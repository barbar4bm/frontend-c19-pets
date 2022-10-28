import { useAuth } from './context/authContext'
import { Navigate } from 'react-router-dom'
export function ProtectedRoutes({children}) {
    const {user, loading } = useAuth()

    if (!user) return <Navigate to='/login' />

    if (loading) return <h1>loading</h1>

    return <>{children}</>
}

