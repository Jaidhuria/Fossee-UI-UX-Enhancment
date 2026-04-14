import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

export default function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar glass">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand">
          <span className="brand-logo">F</span>
          <span className="brand-text">Workshops</span>
        </Link>
        
        <div className="navbar-links">
          <Link to="/workshops/types" className={`nav-link ${isActive('/workshops/types') ? 'active' : ''}`}>
            Types
          </Link>
          {user ? (
            <>
              <Link to="/dashboard" className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}>
                Dashboard
              </Link>
              <Link to="/profile" className={`nav-link ${isActive('/profile') ? 'active' : ''}`}>
                Profile
              </Link>
              <button onClick={logout} className="btn-logout">
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to="/auth/login" className="nav-link">Sign In</Link>
              <Link to="/auth/signup" className="btn btn-primary btn-sm">Sign Up</Link>
            </>
          )}
          <div className="nav-divider"></div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
