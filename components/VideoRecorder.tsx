"use client"

import type React from "react"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"

interface VideoRecorderProps {
  onRecordingComplete: (blob: Blob) => void
}

const VideoRecorder: React.FC<VideoRecorderProps> = ({ onRecordingComplete }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const [isRecording, setIsRecording] = useState(false)

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      const chunks: Blob[] = []

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data)
        }
      }

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "video/webm" })
        onRecordingComplete(blob)
      }

      mediaRecorder.start()
      setIsRecording(true)
    } catch (error) {
      console.error("Error accessing media devices:", error)
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="bg-gray-100 p-4 rounded-lg">
        <video ref={videoRef} autoPlay muted className="w-full h-auto border rounded-lg" />
      </div>
      <div className="flex justify-center space-x-4">
        {!isRecording ? (
          <Button onClick={startRecording} className="bg-green-500 hover:bg-green-600">
            Start Recording
          </Button>
        ) : (
          <Button onClick={stopRecording} variant="destructive">
            Stop Recording
          </Button>
        )}
      </div>
    </div>
  )
}

export default VideoRecorder

