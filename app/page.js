"use client"

import { useState } from "react"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"
import TokenPage from "./token/[token]/page"
import DeleteAccountPage from "./confirmdelete/[deleteAccount]/page"

export default function Home() {
   
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <TokenPage />
      {/* <DeleteAccountPage /> */}

    </div>
  )
}
