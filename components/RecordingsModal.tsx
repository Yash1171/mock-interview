"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface RecordingsModalProps {
  isOpen: boolean
  onClose: () => void
  recordings: Blob[]
}

const RecordingsModal: React.FC<RecordingsModalProps> = ({ isOpen, onClose, recordings }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2">Your Recordings</DialogTitle>
          <DialogDescription>Review your interview responses. Click on a video to play.</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[60vh] overflow-y-auto p-4">
          {recordings.map((recording, index) => (
            <video
              key={index}
              src={URL.createObjectURL(recording)}
              controls
              className="w-full h-auto border rounded-lg"
            />
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default RecordingsModal

