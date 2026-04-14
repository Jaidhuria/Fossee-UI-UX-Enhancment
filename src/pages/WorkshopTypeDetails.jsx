import { useParams, Link } from 'react-router-dom';
import { getWorkshopTypeById } from '../data/mockData';

export default function WorkshopTypeDetails() {
  const { id } = useParams();
  const wt = getWorkshopTypeById(Number(id));

  if (!wt) return <div className="container py-20 text-center"><h1>Workshop not found</h1></div>;

  return (
    <div className="container py-12 animate-in">
      <nav className="mb-8">
        <Link to="/workshops/types" className="text-muted" style={{ fontWeight: '500', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>←</span> Back to Workshop Catalog
        </Link>
      </nav>
      
      <div className="details-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '48px' }}>
        <main className="details-main">
            <span className="badge badge-success mb-4">Core Module</span>
            <h1 style={{ fontSize: 'var(--fs-3xl)', marginBottom: '24px' }}>{wt.name}</h1>
            
            <section className="mb-12">
                <h2 className="h3">Course Overview</h2>
                <p className="text-secondary" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>{wt.description}</p>
            </section>

            <section className="mb-12">
                <h2 className="h3">Learning Objectives</h2>
                <div className="card glass-card">
                    <ul className="text-secondary" style={{ paddingLeft: '20px', lineHeight: '2' }}>
                        <li>Fundamental concepts and theoretical frameworks</li>
                        <li>Hands-on practical implementation with expert guidance</li>
                        <li>Real-world case studies and project work</li>
                        <li>Advanced optimization techniques and best practices</li>
                    </ul>
                </div>
            </section>

            <section>
                <h2 className="h3">Terms & Conditions</h2>
                <div className="card" style={{ background: 'var(--clr-surface-alt)', border: 'none' }}>
                    <p className="text-secondary" style={{ whiteSpace: 'pre-line', fontSize: '14px' }}>{wt.termsAndConditions}</p>
                </div>
            </section>
        </main>

        <aside className="details-sidebar">
            <div className="card glass" style={{ position: 'sticky', top: '100px', border: '1px solid var(--clr-primary)' }}>
                <h3 className="h4 mb-6">Program Info</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                    <div className="flex-between">
                        <span className="text-muted">Duration</span>
                        <span className="font-bold">{wt.duration} Full Days</span>
                    </div>
                    <div className="flex-between">
                        <span className="text-muted">Type ID</span>
                        <span className="font-bold">#WT-{wt.id.toString().padStart(3, '0')}</span>
                    </div>
                    <div className="flex-between">
                        <span className="text-muted">Certification</span>
                        <span className="badge badge-success">Included</span>
                    </div>
                </div>
                <Link to="/workshops/propose" className="btn btn-primary btn-block">
                    Propose for Institute
                </Link>
                <p className="text-center text-muted mt-4" style={{ fontSize: '11px' }}>
                    Requires minimum 20 participants
                </p>
            </div>
        </aside>
      </div>
    </div>
  );
}
