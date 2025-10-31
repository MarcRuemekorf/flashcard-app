import { getCurrentUser } from '@/lib/get-session'
import { redirect } from 'next/navigation'
import Navbar from '@/components/layout/navbar'

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getCurrentUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <>
      <Navbar user={user} />
      {children}
    </>
  )
}