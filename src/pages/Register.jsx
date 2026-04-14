import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '../components/Toast';
import { DEPARTMENT_OPTIONS, TITLE_OPTIONS, STATE_OPTIONS, SOURCE_OPTIONS } from '../data/mockData';

export default function Register() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    title: 'Prof.',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    institute: '',
    department: '',
    location: '',
    state: '',
    source: 'FOSSEE website',
  });
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      addToast('Passwords do not match!', 'error');
      return;
    }
    addToast('Account created! Please sign in.', 'success');
    navigate('/auth/login');
  };

  const FormRow = ({ label, required = true, children, helpText }) => (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap',
      border: '1px solid var(--clr-border)',
      borderBottom: 'none',
    }}>
      <div style={{ 
        flex: '1 1 200px', 
        maxWidth: '250px', 
        padding: '12px 16px', 
        fontWeight: 'bold',
        fontSize: '0.9rem',
        borderRight: '1px solid var(--clr-border)'
      }}>
        {label}{required && <span style={{ color: 'red' }}>*</span>}
      </div>
      <div style={{ 
        flex: '2 1 300px', 
        padding: '12px 16px' 
      }}>
        {children}
        {helpText && <small style={{ display: 'block', color: 'var(--clr-text-secondary)', marginTop: '4px', fontSize: '0.8rem' }}>{helpText}</small>}
      </div>
    </div>
  );

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '24px' }}>Coordinator Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ borderBottom: '1px solid var(--clr-border)' }}>
          
          <FormRow label="Username:" helpText="Letters, digits, period and underscore only.">
            <input 
              type="text" 
              className="form-input" 
              required 
              pattern="[a-zA-Z0-9._]+"
              value={form.username}
              onChange={e => setForm({...form, username: e.target.value})}
              style={{ maxWidth: '300px' }}
            />
          </FormRow>

          <FormRow label="Email:">
            <input 
              type="email" 
              className="form-input" 
              required 
              value={form.email}
              onChange={e => setForm({...form, email: e.target.value})}
              style={{ maxWidth: '300px' }}
            />
          </FormRow>

          <FormRow label="Password:">
            <input 
              type="password" 
              className="form-input" 
              required 
              value={form.password}
              onChange={e => setForm({...form, password: e.target.value})}
              style={{ maxWidth: '300px' }}
            />
          </FormRow>

          <FormRow label="Confirm password:">
            <input 
              type="password" 
              className="form-input" 
              required 
              value={form.confirmPassword}
              onChange={e => setForm({...form, confirmPassword: e.target.value})}
              style={{ maxWidth: '300px' }}
            />
          </FormRow>

          <FormRow label="Title:">
            <select 
              className="form-input" 
              required
              value={form.title}
              onChange={e => setForm({...form, title: e.target.value})}
              style={{ maxWidth: '100px' }}
            >
              {TITLE_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </FormRow>

          <FormRow label="First name:">
            <input 
              type="text" 
              className="form-input" 
              required 
              value={form.firstName}
              onChange={e => setForm({...form, firstName: e.target.value})}
              style={{ maxWidth: '300px' }}
            />
          </FormRow>

          <FormRow label="Last name:">
            <input 
              type="text" 
              className="form-input" 
              required 
              value={form.lastName}
              onChange={e => setForm({...form, lastName: e.target.value})}
              style={{ maxWidth: '300px' }}
            />
          </FormRow>

          <FormRow label="Phone number:">
            <input 
              type="tel" 
              className="form-input" 
              required 
              value={form.phoneNumber}
              onChange={e => setForm({...form, phoneNumber: e.target.value})}
              style={{ maxWidth: '300px' }}
            />
          </FormRow>

          <FormRow label="Institute:" helpText="Please write full name of your Institute/Organization">
            <input 
              type="text" 
              className="form-input" 
              required 
              value={form.institute}
              onChange={e => setForm({...form, institute: e.target.value})}
              style={{ maxWidth: '300px' }}
            />
          </FormRow>

          <FormRow label="Department:" helpText="Department you work/study">
            <select 
              className="form-input" 
              required
              value={form.department}
              onChange={e => setForm({...form, department: e.target.value})}
              style={{ maxWidth: '300px' }}
            >
              <option value="">Select Dept</option>
              {DEPARTMENT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </FormRow>

          <FormRow label="Location:" helpText="Place/City">
            <input 
              type="text" 
              className="form-input" 
              required 
              value={form.location}
              onChange={e => setForm({...form, location: e.target.value})}
              style={{ maxWidth: '300px' }}
            />
          </FormRow>

          <FormRow label="State:">
            <select 
              className="form-input" 
              required
              value={form.state}
              onChange={e => setForm({...form, state: e.target.value})}
              style={{ maxWidth: '300px' }}
            >
              <option value="">---------</option>
              {STATE_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </FormRow>

          <FormRow label="How did you hear about us:">
            <select 
              className="form-input" 
              required
              value={form.source}
              onChange={e => setForm({...form, source: e.target.value})}
              style={{ maxWidth: '300px' }}
            >
              <option value="FOSSEE website">FOSSEE website</option>
              {SOURCE_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.label}>{opt.label}</option>
              ))}
            </select>
          </FormRow>
        </div>

        <div style={{ marginTop: '24px' }}>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>

        <div className="auth-footer mt-8" style={{ textAlign: 'left' }}>
          <p>Already a member? <Link to="/auth/login" className="link">Sign in</Link></p>
        </div>
      </form>
    </div>
  );
}
