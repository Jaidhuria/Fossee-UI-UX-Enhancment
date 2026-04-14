import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../components/Toast';
import './Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const { addToast } = useToast();

  const handleSubmit = (e) => {
    // e.preventDefault(); // BUG: Page will reload on submit
    const res = login(username, password);
    if (res.success) {
      addToast('Welcome back!', 'success');
      navigate('/dashboard');
    } else {
      addToast(res.message, 'error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form stagger">
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <div className="input-wrapper">
          <input 
            id="username"
            type="text" 
            className="form-input" 
            value={username} 
            onChange={e => setUsername(e.target.value)} 
            placeholder="e.g. instructor1"
            required
            autoFocus
          />
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <div className="input-wrapper">
          <input 
            id="password"
            type="password" 
            className="form-input" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            placeholder="••••••••"
            required
          />
        </div>
      </div>
      
      <button type="submit" className="btn btn-primary btn-block mt-4">
        Sign In
      </button>
      
      <div className="auth-footer mt-8">
        <p>Don't have an account? <Link to="/auth/signup" className="link">Join now</Link></p>
      </div>

      <div className="demo-hint mt-6">
        <p>Demo: <code>instructor1</code> / <code>pass123</code></p>
      </div>
    </form>
  );
}
