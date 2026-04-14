import { Link } from 'react-router-dom';

export default function WorkshopCard({ workshopType }) {
  return (
    <article className="card glass-card">
      <div className="card-tag mb-4">
        <span className="badge badge-neutral">
          {workshopType.duration} Day{workshopType.duration > 1 ? 's' : ''}
        </span>
      </div>
      <h3 className="h3 mt-2 mb-2">{workshopType.name}</h3>
      <p className="text-secondary mb-6" style={{ fontSize: '14px', lineHeight: '1.7' }}>
        {workshopType.description}
      </p>
      
      {/* We use an extracted utility class flex-between inside the card footer if needed, but styling here is fine to keep component-scoped if it's very specific, or we can use generic padding. */}
      <div 
        className="card-footer" 
        style={{ 
          marginTop: 'auto', 
          paddingTop: '20px', 
          borderTop: '1px solid var(--clr-border-light)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Link to={`/workshops/types/${workshopType.id}`} className="btn btn-secondary btn-sm" style={{ padding: '8px 16px' }}>
          View Syllabus
        </Link>
        <Link to="/auth/signup" className="btn btn-primary btn-sm">
          Propose
        </Link>
      </div>
    </article>
  );
}
