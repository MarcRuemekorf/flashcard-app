'use client'

import Link from 'next/link'
import { signOut } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface NavbarProps {
  user: {
    id: string
    email: string
    name: string | null
  }
}

const Navbar = ({ user }: NavbarProps) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSignOut = async () => {
    setIsLoading(true)
    try {
      await signOut()
      router.push('/login')
      router.refresh()
    } catch (error) {
      console.error('Sign out error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link href="/dashboard">
            <span className="navbar-logo">🎴</span>
            <span className="navbar-title">Flashcard</span>
          </Link>
        </div>

        <div className="navbar-links">
          <Link href="/dashboard" className="navbar-link">
            Dashboard
          </Link>
          <Link href="/decks" className="navbar-link">
            Decks
          </Link>
        </div>

        <div className="navbar-user">
          <span className="navbar-user-name">{user.name || user.email}</span>
          <button
            onClick={handleSignOut}
            disabled={isLoading}
            className="navbar-signout"
          >
            {isLoading ? 'Signing out...' : 'Sign Out'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;