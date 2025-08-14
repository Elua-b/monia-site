'use client'

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Download, Eye, Mail, Trash2, LogOut, Heart } from "lucide-react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface RSVP {
  id: number
  name: string
  email: string
  phone: string
  attendance: string
  guests: number
  guestNames: string
  dietaryRestrictions: string
  message: string
  submittedAt: string
}

// Map short codes to descriptive strings for display
const attendanceMap: { [key: string]: string } = {
  both: "Both Traditional Wedding and Reception",
  "reception-only": "Reception Only",
  "traditional-only": "Traditional Wedding Only",
  no: "Not Attending",
}

export default function AdminDashboard() {
  const [rsvps, setRsvps] = useState<RSVP[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)
  const [selectedRsvp, setSelectedRsvp] = useState<RSVP | null>(null)
  const router = useRouter()

  useEffect(() => {
    fetchRSVPs()
  }, [])

  const fetchRSVPs = async () => {
    try {
      const response = await fetch("/api/admin/rsvps")
      if (response.ok) {
        const data = await response.json()
        setRsvps(data)
      } else if (response.status === 401) {
        router.push('/admin/login')
      }
    } catch (error) {
      console.error("Error fetching RSVPs:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" })
    router.push("/")
  }

  const handleDeleteRsvp = async (id: number) => {
    if (!confirm("Are you sure you want to delete this RSVP? This action cannot be undone.")) {
      return
    }

    try {
      const response = await fetch(`/api/admin/rsvps/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        alert("RSVP deleted successfully!")
        fetchRSVPs()
      } else {
        const errorData = await response.json()
        alert(`Failed to delete RSVP: ${errorData.error || "Unknown error"}`)
      }
    } catch (error) {
      console.error("Error deleting RSVP:", error)
      alert("An error occurred while trying to delete the RSVP.")
    }
  }

  const handleViewRsvp = (rsvp: RSVP) => {
    setSelectedRsvp(rsvp)
  }

  const filteredRSVPs = rsvps.filter(
    (rsvp) =>
      rsvp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rsvp.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rsvp.phone?.includes(searchTerm),
  )

  const stats = {
    totalResponses: rsvps.length,
    attendingBoth: rsvps.filter((r) => r.attendance === "both").length,
    attendingReceptionOnly: rsvps.filter((r) => r.attendance === "reception-only").length,
    attendingTraditionalOnly: rsvps.filter((r) => r.attendance === "traditional-only").length,
    notAttending: rsvps.filter((r) => r.attendance === "no").length,
    totalGuests: rsvps.filter((r) => r.attendance !== "no").reduce((sum, r) => sum + r.guests, 0),
  }

  const exportToCSV = () => {
    const headers = [
      "Name",
      "Email",
      "Phone",
      "Attendance",
      "Total Guests",
      "Guest Names",
      "Dietary Restrictions",
      "Message",
      "Submitted",
    ]
    const csvContent = [
      headers.join(","),
      ...rsvps.map((rsvp) =>
        [
          rsvp.name,
          rsvp.email,
          rsvp.phone,
          attendanceMap[rsvp.attendance] || rsvp.attendance,
          rsvp.guests,
          rsvp.guestNames,
          rsvp.dietaryRestrictions,
          rsvp.message,
          rsvp.submittedAt,
        ]
          .map((field) => `"${String(field).replace(/"/g, '""')}"`)
          .join(","),
      ),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "wedding-rsvps.csv"
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const getAttendanceBadge = (attendance: string) => {
    switch (attendance) {
      case "both":
        return <Badge className="bg-stone-100 text-stone-800 text-xs">Both Events</Badge>
      case "reception-only":
        return <Badge className="bg-gold-100 text-gold-800 text-xs">Reception Only</Badge>
      case "traditional-only":
        return <Badge className="bg-cream-100 text-cream-800 text-xs">Traditional Only</Badge>
      case "no":
        return <Badge className="bg-stone-100 text-stone-600 text-xs">Not Attending</Badge>
      default:
        return (
          <Badge variant="outline" className="text-xs">
            {attendanceMap[attendance] || attendance}
          </Badge>
        )
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-warm-100/20 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-warm-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-100/20 to-white">
      {/* Header */}
      <header className="border-b border-gray-200 p-4 md:p-6 bg-white/80 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-warm-500" />
            <div>
              <h1 className="text-xl md:text-2xl font-serif text-warm-500">Monia & Andy Wedding Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Monia & Andy - December 24, 2025</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="text-gray-600 hover:text-gray-800 border-gray-300 bg-transparent"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="p-4 md:p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-6 md:mb-8">
          <Card className="bg-white/80 border-gray-200 p-3 md:p-4">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-warm-500 mb-1">{stats.totalResponses}</div>
              <div className="text-xs text-gray-600">Total Responses</div>
            </div>
          </Card>

          <Card className="bg-white/80 border-gray-200 p-3 md:p-4">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-stone-600 mb-1">{stats.attendingBoth}</div>
              <div className="text-xs text-gray-600">Both Events</div>
            </div>
          </Card>

          <Card className="bg-white/80 border-gray-200 p-3 md:p-4">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-gold-600 mb-1">{stats.attendingReceptionOnly}</div>
              <div className="text-xs text-gray-600">Reception Only</div>
            </div>
          </Card>

          <Card className="bg-white/80 border-gray-200 p-3 md:p-4">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-cream-600 mb-1">{stats.attendingTraditionalOnly}</div>
              <div className="text-xs text-gray-600">Traditional Only</div>
            </div>
          </Card>

          <Card className="bg-white/80 border-gray-200 p-3 md:p-4">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-stone-500 mb-1">{stats.notAttending}</div>
              <div className="text-xs text-gray-600">Not Attending</div>
            </div>
          </Card>

          <Card className="bg-white/80 border-gray-200 p-3 md:p-4">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-warm-500 mb-1">{stats.totalGuests}</div>
              <div className="text-xs text-gray-600">Total Guests</div>
            </div>
          </Card>
        </div>

        {/* Search and Export */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search by name, email, or phone"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-gray-300 focus:border-warm-500 focus:ring-warm-500/20"
            />
          </div>
          <Button
            onClick={exportToCSV}
            className="bg-warm-500 hover:bg-warm-600 text-white border border-warm-500"
          >
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        </div>

        {/* RSVP Table */}
        <Card className="bg-white/80 border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-200">
                  <TableHead className="text-gray-700">Name</TableHead>
                  <TableHead className="text-gray-700">Contact</TableHead>
                  <TableHead className="text-gray-700">Attendance</TableHead>
                  <TableHead className="text-gray-700">Guests</TableHead>
                  <TableHead className="text-gray-700 hidden lg:table-cell">Guest Names</TableHead>
                  <TableHead className="text-gray-700 hidden md:table-cell">Submitted</TableHead>
                  <TableHead className="text-gray-700">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRSVPs.map((rsvp) => (
                  <TableRow key={rsvp.id} className="border-gray-200">
                    <TableCell className="text-gray-800 font-medium">{rsvp.name}</TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div className="text-gray-800">{rsvp.email}</div>
                        <div className="text-gray-500 text-xs">{rsvp.phone}</div>
                      </div>
                    </TableCell>
                    <TableCell>{getAttendanceBadge(rsvp.attendance)}</TableCell>
                    <TableCell className="text-gray-800">{rsvp.guests}</TableCell>
                    <TableCell className="text-gray-600 hidden lg:table-cell max-w-xs truncate">
                      {rsvp.guestNames || "-"}
                    </TableCell>
                    <TableCell className="text-gray-500 text-sm hidden md:table-cell">
                      {new Date(rsvp.submittedAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-500 hover:text-gray-700 p-1"
                          onClick={() => handleViewRsvp(rsvp)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700 p-1">
                          <Mail className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-500 hover:text-red-600 p-1"
                          onClick={() => handleDeleteRsvp(rsvp.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* View RSVP Modal */}
        {selectedRsvp && (
          <Dialog open={!!selectedRsvp} onOpenChange={() => setSelectedRsvp(null)}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>RSVP Details</DialogTitle>
                <DialogDescription>Details for {selectedRsvp.name}'s RSVP</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <span className="font-medium col-span-1">Name:</span>
                  <span className="col-span-3">{selectedRsvp.name}</span>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <span className="font-medium col-span-1">Email:</span>
                  <span className="col-span-3">{selectedRsvp.email}</span>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <span className="font-medium col-span-1">Phone:</span>
                  <span className="col-span-3">{selectedRsvp.phone || "-"}</span>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <span className="font-medium col-span-1">Attendance:</span>
                  <span className="col-span-3">{attendanceMap[selectedRsvp.attendance] || selectedRsvp.attendance}</span>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <span className="font-medium col-span-1">Guests:</span>
                  <span className="col-span-3">{selectedRsvp.guests}</span>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <span className="font-medium col-span-1">Guest Names:</span>
                  <span className="col-span-3">{selectedRsvp.guestNames || "-"}</span>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <span className="font-medium col-span-1">Dietary:</span>
                  <span className="col-span-3">{selectedRsvp.dietaryRestrictions || "-"}</span>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <span className="font-medium col-span-1">Message:</span>
                  <span className="col-span-3">{selectedRsvp.message || "-"}</span>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <span className="font-medium col-span-1">Submitted:</span>
                  <span className="col-span-3">{new Date(selectedRsvp.submittedAt).toLocaleString()}</span>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  )
}