import { useParams, Link } from 'react-router-dom';
import { workshops, getWorkshopTypeById, getUserById } from '../data/mockData';
import { formatDate, getStatusLabel } from '../utils/formatters';

export default function WorkshopDetails() {
  const { id } = useParams();
  const workshop = workshops.find(w => w.id === Number(id));

  if (!workshop) return <div className="container py-20 text-center"><h1>Session not found</h1></div>;

  const wt = getWorkshopTypeById(workshop.workshopTypeId);
  const coordinator = getUserById(workshop.coordinatorId);
  const instructor = workshop.instructorId ? getUserById(workshop.instructorId) : null;

  return (
    <div className="container py-12 animate-in">
      <nav className="mb-8">
        <Link to="/dashboard" className="text-muted" style={{ fontWeight: '500' }}>← Back to Dashboard</Link>
      </nav>

      <div className="details-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '48px' }}>
          <main className="details-main">
            <div className="flex-between mb-4">
                <span className={`badge ${workshop.status === 1 ? 'badge-success' : 'badge-warning'}`}>
                    {getStatusLabel(workshop.status)}
                </span>
                <span className="text-muted" style={{ fontSize: '13px' }}>Reference: #WK-{workshop.id}</span>
            </div>
            <h1 className="h2 mb-12">{wt?.name}</h1>

            <section className="mb-12">
                <h3 className="h4 mb-4">Participants & Logistics</h3>
                <div className="card">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                        <div>
                            <label className="form-label">Commencement Date</label>
                            <p style={{ fontWeight: '600', fontSize: '1.1rem' }}>{formatDate(workshop.date)}</p>
                        </div>
                        <div>
                            <label className="form-label">Session Duration</label>
                            <p style={{ fontWeight: '600', fontSize: '1.1rem' }}>{wt?.duration} Full Days</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h3 className="h4 mb-4">Key Contacts</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                    <div className="card glass-card">
                        <label className="form-label">Coordinator</label>
                        <p style={{ fontWeight: '600' }}>{coordinator.firstName} {coordinator.lastName}</p>
                        <p className="text-secondary" style={{ fontSize: '13px' }}>{coordinator.institute}</p>
                    </div>
                    {instructor ? (
                        <div className="card glass-card">
                            <label className="form-label">Instructor</label>
                            <p style={{ fontWeight: '600' }}>{instructor.firstName} {instructor.lastName}</p>
                            <p className="text-secondary" style={{ fontSize: '13px' }}>{instructor.institute}</p>
                        </div>
                    ) : (
                        <div className="card" style={{ background: 'var(--clr-surface-alt)', border: '1px dashed var(--clr-border)' }}>
                            <label className="form-label">Instructor</label>
                            <p className="text-muted">Awaiting assignment</p>
                        </div>
                    )}
                </div>
            </section>
          </main>

          <aside className="details-sidebar">
              <div className="card">
                  <h3 className="h4 mb-4">Session Actions</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <button className="btn btn-primary btn-block">Download Syllabus</button>
                      <button className="btn btn-secondary btn-block">Contact Coordinator</button>
                      <button className="btn btn-secondary btn-block" style={{ color: 'var(--clr-error)' }}>Cancel Request</button>
                  </div>
              </div>
          </aside>
      </div>
    </div>
  );
}
