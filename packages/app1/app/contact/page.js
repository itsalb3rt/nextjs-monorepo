'use client'
import React from 'react'
import { ContactForm } from 'components'

export default function Home() {
  return (
    <main className="content py-10 px-10">
      <p className="text-center mb-10">
        Contact form component from the Components package and Tailwind CSS
      </p>
      <ContactForm />
    </main>
  )
}
