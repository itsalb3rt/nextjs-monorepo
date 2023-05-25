'use client'
import React from 'react'
import Link from 'next/link'

const TheMenu = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link className="text-white text-gray-300 hover:text-white" href="/">
              Home
            </Link>
            <Link className="ml-4 text-gray-300 hover:text-white" href="/contact">
              Contact
            </Link>
            <Link className="ml-4 text-gray-300 hover:text-white" href="/profile">
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default TheMenu
