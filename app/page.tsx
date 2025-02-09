"use client"

import { useState } from "react"
import MockInterview from "../components/MockInterview"
import StartModal from "../components/StartModal"

export default function Home() {
  const [isStarted, setIsStarted] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
      {!isStarted ? (
        <StartModal onStart={() => setIsStarted(true)} />
      ) : (
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-xl p-8">
          <MockInterview />
        </div>
      )}
    </main>
  )
}

