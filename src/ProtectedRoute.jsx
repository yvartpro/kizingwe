import { Navigate } from 'react-router-dom'
import { isAuthenticated } from './Auth'

const ProtectedRoute = ({ children })=>{
    return isAuthenticated ? children : <Navigate to='/auth'/>
}

export default ProtectedRoute