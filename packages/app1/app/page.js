'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  
  return (
    <main className="content py-10 px-10">
      <h1 className="text-4xl text-center font-bold">App 1 - Home</h1>
      <hr className="my-4" />
      <div>
        <button onClick={() => router.push('/contact')} className="bg-blue-500 text-white py-2 px-4 rounded">
          Go to contact Form
        </button>
      </div>
    </main>
  )
}
