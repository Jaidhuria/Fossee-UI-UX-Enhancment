import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './AuthLayout.css';

export default function AuthLayout() {
  const { user } = useAuth();
  const location = useLocation();

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const isLogin = location.pathname.includes('login');

  return (
    <div className="auth-layout">
      <div className="auth-container">
        <div className="auth-card card animate-in">
          <header className="auth-header">
            <h2>{isLogin ? 'Sign In' : 'Create Account'}</h2>
            <p className="text-secondary">
              {isLogin 
                ? 'Welcome back to FOSSEE Workshops' 
                : 'Join the educational community at IIT Bombay'}
            </p>
          </header>
          
          <main className="auth-content">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
