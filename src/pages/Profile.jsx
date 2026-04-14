import { useAuth } from '../context/AuthContext';
import { DEPARTMENT_OPTIONS } from '../data/mockData';

export default function Profile() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="container py-12 animate-in">
      <header className="mb-12">
        <h1 className="h2">Identity & Profile</h1>
        <p className="text-secondary">Manage your institutional credentials and personal details.</p>
      </header>

      <div className="profile-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px' }}>
          <aside className="profile-sidebar">
            <div className="card text-center glass-card" style={{ paddingTop: '40px' }}>
                <div style={{ 
                    width: '100px', 
                    height: '100px', 
                    background: 'var(--clr-primary)', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'white', 
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    margin: '0 auto 24px',
                    boxShadow: 'var(--shadow-lg)'
                }}>
                    {user.firstName[0]}{user.lastName[0]}
                </div>
                <h3 className="h4 mb-1">{user.firstName} {user.lastName}</h3>
                <p className="text-muted mb-6" style={{ fontSize: '14px' }}>{user.email}</p>
                <button className="btn btn-secondary btn-sm btn-block">Change Avatar</button>
            </div>
          </aside>

          <main className="profile-main">
            <div className="card">
                <h3 className="h4 mb-8">Institutional Information</h3>
                <div className="stagger" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                    <div className="profile-field">
                        <label className="text-muted" style={{ fontSize: '11px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Institute</label>
                        <p style={{ fontWeight: '600' }}>{user.institute}</p>
                    </div>
                    <div className="profile-field">
                        <label className="text-muted" style={{ fontSize: '11px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Department</label>
                        <p style={{ fontWeight: '600' }}>{DEPARTMENT_OPTIONS.find(d => d.value === user.department)?.label}</p>
                    </div>
                    <div className="profile-field">
                        <label className="text-muted" style={{ fontSize: '11px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Position / Role</label>
                        <p style={{ fontWeight: '600', textTransform: 'capitalize' }}>{user.position}</p>
                    </div>
                    <div className="profile-field">
                        <label className="text-muted" style={{ fontSize: '11px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Account Status</label>
                        <span className="badge badge-success">Verified</span>
                    </div>
                </div>

                <div className="action-bar mt-12 pt-8" style={{ borderTop: '1px solid var(--clr-border-light)' }}>
                    <button className="btn btn-primary">Edit Profile</button>
                </div>
            </div>
          </main>
      </div>
    </div>
  );
}
