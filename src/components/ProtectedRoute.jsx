import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function ProtectedRoute({ children }) {
  const { currentUser, isReady } = useAuth();

  if (!isReady) return null;
  if (!currentUser) return <Navigate to="/connexion" replace />;

  return children;
}
