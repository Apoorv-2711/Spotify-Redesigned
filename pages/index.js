import { Dashboard } from '@/components/Dashboard'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="min-h-screen">
      <Dashboard/>
    </main>
  )
}
