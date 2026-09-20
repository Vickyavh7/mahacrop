"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Download, Eye, ZoomIn, ZoomOut } from "lucide-react"

interface PDFViewerProps {
  pdfUrl: string
  title: string
  description: string
  fileSize?: string
}

export function PDFViewer({ pdfUrl, title, description, fileSize = "2.5 MB" }: PDFViewerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [zoom, setZoom] = useState(100)
  const previewSrc = `${pdfUrl}#page=1&view=FitH&toolbar=0&navpanes=0`
  const readerSrc = `${pdfUrl}#view=FitH`

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = pdfUrl
    link.download = "Mahacrop-Product-Brochure.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="border border-chamber/20 bg-white">
      <div className="grid lg:grid-cols-2 gap-0">
        <div className="p-6 sm:p-8 space-y-5">
          <p className="crate-stamp text-[11px] text-kernel bg-chamber inline-block px-2 py-1">Catalog</p>
          <h3 className="font-display text-3xl sm:text-4xl uppercase text-chamber">{title}</h3>
          <p className="text-ink/80 leading-relaxed">{description}</p>
          <p className="crate-stamp text-[10px] text-steel">{fileSize} · PDF</p>
          <div className="grid grid-cols-2 gap-3 pt-2">
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button className="rounded-none bg-chamber text-icefield hover:bg-kernel hover:text-chamber crate-stamp text-[11px] min-h-12">
                  <Eye className="w-4 h-4 mr-2" />
                  View PDF
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-6xl h-[92vh] p-0 bg-chamber text-icefield flex flex-col gap-0">
                <DialogHeader className="px-4 py-3 border-b border-kernel/30">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <DialogTitle className="font-display uppercase text-kernel">Product brochure</DialogTitle>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setZoom((z) => Math.max(z - 25, 50))}
                        className="rounded-none border-kernel/40 text-icefield bg-transparent"
                      >
                        <ZoomOut className="w-4 h-4" />
                      </Button>
                      <span className="crate-stamp text-[10px] w-12 text-center">{zoom}%</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setZoom((z) => Math.min(z + 25, 200))}
                        className="rounded-none border-kernel/40 text-icefield bg-transparent"
                      >
                        <ZoomIn className="w-4 h-4" />
                      </Button>
                      <Button onClick={handleDownload} className="rounded-none bg-kernel text-chamber hover:bg-icefield">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </DialogHeader>
                <div className="flex-1 min-h-0 bg-icefield">
                  <iframe
                    src={readerSrc}
                    title="Mahacrop product brochure"
                    className="w-full h-full min-h-[70vh] border-0 origin-top"
                    style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top center" }}
                  />
                </div>
              </DialogContent>
            </Dialog>
            <Button
              onClick={handleDownload}
              variant="outline"
              className="rounded-none border-chamber/30 crate-stamp text-[11px] min-h-12 text-chamber"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
        <div className="relative min-h-[28rem] lg:min-h-[36rem] border-t lg:border-t-0 lg:border-l border-chamber/15 bg-icefield">
          <iframe
            src={previewSrc}
            title={`${title} first page`}
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  )
}
