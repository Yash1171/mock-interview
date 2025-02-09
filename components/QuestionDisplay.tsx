import type React from "react"

interface QuestionDisplayProps {
  question: string
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ question }) => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 p-6 rounded-lg shadow-md text-white">
      <h2 className="text-2xl font-bold mb-4">Interview Question:</h2>
      <p className="text-xl">{question}</p>
    </div>
  )
}

export default QuestionDisplay

