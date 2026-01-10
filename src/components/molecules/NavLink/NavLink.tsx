import { useLocation } from 'react-router-dom'
import { Link } from '@/components/atoms'

interface NavLinkProps {
  to: string
  children: string
  onClick?: () => void
}

export function NavLink({ to, children, onClick }: NavLinkProps) {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link
      to={to}
      variant="nav"
      className={isActive ? 'text-blue-500' : ''}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
