"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Download, Eye, FileText, ZoomIn, ZoomOut, Star, Users, Award, Sparkles } from "lucide-react"

interface PDFViewerProps {
  pdfUrl: string
  title: string
  description: string
  fileSize?: string
}

export function PDFViewer({ pdfUrl, title, description, fileSize = "2.5 MB" }: PDFViewerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [zoom, setZoom] = useState(100)
  const [isHovered, setIsHovered] = useState(false)
  const [downloadCount, setDownloadCount] = useState(1247)

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = pdfUrl
    link.download = "Mahacrop-Product-Brochure.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setDownloadCount((prev) => prev + 1)
  }

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 25, 200))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 25, 50))
  }

  return (
    <div className="relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-orange-50 rounded-2xl"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-green-200/30 to-green-300/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-orange-200/30 to-orange-300/30 rounded-full blur-3xl"></div>

      <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 p-8 hover:shadow-3xl transition-all duration-500">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-green-500 to-green-600 rounded-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="px-3 py-1 bg-gradient-to-r from-green-100 to-green-200 text-green-800 rounded-full text-sm font-semibold">
                  Premium Catalog
                </span>
              </div>

              <h3 className="text-4xl font-bold bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent mb-4">
                {title}
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
            </div>

            {/* Feature List with Icons */}
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: FileText, text: "Complete product specifications", color: "text-green-600" },
                { icon: Award, text: "Nutritional information", color: "text-blue-600" },
                { icon: Download, text: "Packaging and export details", color: "text-orange-600" },
                { icon: Star, text: "Quality certifications", color: "text-purple-600" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/60 transition-all duration-300 group"
                >
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-green-100 group-hover:to-green-200 transition-all duration-300`}
                  >
                    <item.icon
                      className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-600">{downloadCount.toLocaleString()} downloads</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-600 ml-1">4.9/5 rating</span>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced PDF Preview */}
          <div className="space-y-6">
            {/* Main PDF Preview Card */}
            <Card
              className="bg-gradient-to-br from-white to-gray-50 shadow-xl border-0 overflow-hidden hover:shadow-2xl transition-all duration-500 group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <CardContent className="p-0">
                {/* Header */}
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.1%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
                  <div className="relative flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold mb-1">Product Brochure</h4>
                      <p className="text-green-100 text-sm">Complete catalog with all details</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{fileSize}</div>
                      <div className="text-green-100 text-xs">PDF Format</div>
                    </div>
                  </div>
                </div>

                {/* PDF Preview with 3D Effect */}
                <div className="p-6">
                  <div
                    className={`relative transform transition-all duration-500 ${isHovered ? "scale-105 rotate-1" : ""}`}
                  >
                    <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-lg border-4 border-white relative">
                      {/* PDF Preview Placeholder */}
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
                        <div className="text-center">
                          <FileText className="w-16 h-16 text-green-600 mx-auto mb-4" />
                          <p className="text-green-800 font-semibold">PDF Preview</p>
                          <p className="text-green-600 text-sm">Click to view full document</p>
                        </div>
                      </div>

                      {/* Overlay with hover effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
                      >
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                            <p className="text-sm font-semibold text-gray-800">Preview of first page</p>
                            <p className="text-xs text-gray-600">Click to view full catalog</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 3D Shadow Effect */}
                    <div className="absolute -bottom-2 -right-2 w-full h-full bg-gradient-to-br from-green-200/50 to-green-300/50 rounded-xl -z-10 blur-sm"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons with Enhanced Design */}
            <div className="grid grid-cols-2 gap-4">
              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="group relative overflow-hidden border-2 border-green-600 text-green-600 hover:text-white bg-transparent hover:bg-green-600 transition-all duration-300 py-6 text-lg font-semibold"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    <Eye className="w-5 h-5 mr-2 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    <span className="relative z-10">View PDF</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-7xl h-[95vh] p-0 bg-gray-900">
                  <DialogHeader className="p-6 pb-0 bg-gray-900 text-white">
                    <div className="flex items-center justify-between">
                      <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                        Mahacrop Product Brochure
                      </DialogTitle>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleZoomOut}
                          disabled={zoom <= 50}
                          className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                        >
                          <ZoomOut className="w-4 h-4" />
                        </Button>
                        <span className="text-sm text-gray-300 min-w-[60px] text-center bg-gray-800 px-3 py-1 rounded">
                          {zoom}%
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleZoomIn}
                          disabled={zoom >= 200}
                          className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                        >
                          <ZoomIn className="w-4 h-4" />
                        </Button>
                        <Button onClick={handleDownload} className="ml-2 bg-green-600 hover:bg-green-700">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </DialogHeader>
                  <div className="flex-1 p-6 pt-4 bg-gray-900">
                    <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-2xl flex items-center justify-center">
                      <iframe
                        src={pdfUrl}
                        width="100%"
                        height="100%"
                        className="border-0 rounded-lg"
                        title="Product Brochure PDF"
                      />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Button
                onClick={handleDownload}
                className="group relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                <Download className="w-5 h-5 mr-2 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative z-10">Download PDF</span>
              </Button>
            </div>

            {/* Additional Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
                <div className="text-2xl font-bold text-green-800">50+</div>
                <div className="text-sm text-green-700">Product Varieties</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl border border-orange-200">
                <div className="text-2xl font-bold text-orange-800">15+</div>
                <div className="text-sm text-orange-700">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Alternative component for when you want to show multiple PDF pages as thumbnails
export function PDFGalleryPreview({ pdfUrl, title }: { pdfUrl: string; title: string }) {
  const [selectedPage, setSelectedPage] = useState(1)
  const totalPages = 8 // You can adjust this based on your actual PDF

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">{title}</h4>

      {/* Main PDF Display */}
      <div className="mb-6">
        <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden border flex items-center justify-center">
          <div className="text-center">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 font-semibold">PDF Page {selectedPage}</p>
            <p className="text-gray-500 text-sm">Your PDF content will appear here</p>
          </div>
        </div>
        <p className="text-center text-sm text-gray-600 mt-2">
          Page {selectedPage} of {totalPages}
        </p>
      </div>

      {/* Page Thumbnails */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {Array.from({ length: Math.min(totalPages, 8) }, (_, i) => i + 1).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => setSelectedPage(pageNum)}
            className={`aspect-[3/4] bg-gray-100 rounded border-2 overflow-hidden transition-all flex items-center justify-center ${
              selectedPage === pageNum
                ? "border-green-600 ring-2 ring-green-200"
                : "border-gray-200 hover:border-green-300"
            }`}
          >
            <span className="text-xs text-gray-500">Page {pageNum}</span>
          </button>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setSelectedPage((prev) => Math.max(prev - 1, 1))}
          disabled={selectedPage === 1}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setSelectedPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={selectedPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
