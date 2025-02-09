import type React from "react"
import { Button } from "@/components/ui/button"

interface StartModalProps {
  onStart: () => void
}

const StartModal: React.FC<StartModalProps> = ({ onStart }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Mock Interview</h1>
      <p className="text-lg text-gray-600 mb-6">
        Ready to practice your interview skills? Click the button below to start your mock interview session.
      </p>
      <Button onClick={onStart} className="text-lg px-8 py-3">
        Start Interview
      </Button>
    </div>
  )
}

export default StartModal

