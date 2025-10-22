import { getCurrentUser } from '@/lib/get-session'
import { redirect } from 'next/navigation'
import './dashboard.scss'

export const metadata = {
  title: 'Dashboard - Flashcard App',
  description: 'Your flashcard dashboard',
}

const DashboardPage = async () => {
  const user = await getCurrentUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome back, {user.name || 'there'}! 👋</h1>
        <p>Ready to continue your learning journey?</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-value">0</div>
          <div className="stat-label">Total Decks</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">0</div>
          <div className="stat-label">Total Cards</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">0</div>
          <div className="stat-label">Cards to Review</div>
        </div>
      </div>

      <div className="dashboard-cta">
        <h2>Get Started</h2>
        <p>Create your first deck to start learning!</p>
        <button className="btn-primary">Create Deck</button>
      </div>
    </div>
  )
}

export default DashboardPage