import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Favicon from '../../public/favicon.ico';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Movies Friend',
  description: 'The movies friend app created by TMDB',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <React.Fragment>
          <div className='bg-gray-950'>
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </React.Fragment>
      </body>
    </html>
  )
}
