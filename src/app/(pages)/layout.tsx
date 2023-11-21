import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <main className='mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8'>
      {children}
    </main>
    </>
  )
}
