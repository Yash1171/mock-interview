"use client"

import type React from "react"
import { useState } from "react"
import { questions } from "../data/questions"
import QuestionDisplay from "./QuestionDisplay"
import VideoRecorder from "./VideoRecorder"
import RecordingsModal from "./RecordingsModal"
import { Button } from "@/components/ui/button"

const MockInterview: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [recordings, setRecordings] = useState<Blob[]>([])
  const [isRecordingsModalOpen, setIsRecordingsModalOpen] = useState(false)

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const handleRecordingComplete = (blob: Blob) => {
    setRecordings([...recordings, blob])
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Mock Interview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <QuestionDisplay question={questions[currentQuestionIndex]} />
          <div className="mt-4 flex justify-between">
            <Button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
              Previous Question
            </Button>
            <Button onClick={handleNextQuestion} disabled={currentQuestionIndex === questions.length - 1}>
              Next Question
            </Button>
          </div>
        </div>
        <div>
          <VideoRecorder onRecordingComplete={handleRecordingComplete} />
        </div>
      </div>
      <div className="text-center">
        <Button onClick={() => setIsRecordingsModalOpen(true)} className="text-lg px-8 py-3">
          View Recordings
        </Button>
      </div>
      <RecordingsModal
        isOpen={isRecordingsModalOpen}
        onClose={() => setIsRecordingsModalOpen(false)}
        recordings={recordings}
      />
    </div>
  )
}

export default MockInterview

