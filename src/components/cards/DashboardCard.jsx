import { Link } from 'react-router-dom';
import { getWorkshopTypeById, getUserById } from '../../data/mockData';
import { formatDate, getStatusLabel } from '../../utils/formatters';

export default function DashboardCard({ workshop, isInstructor }) {
  const wt = getWorkshopTypeById(workshop.workshopTypeId);
  const otherUser = isInstructor 
    ? getUserById(workshop.coordinatorId) 
    : workshop.instructorId ? getUserById(workshop.instructorId) : null;

  return (
    <div className="card dashboard-row-card">
      <div className="flex-between mb-4">
        <span className={`badge ${workshop.status === 1 ? 'badge-success' : 'badge-warning'}`}>
          {getStatusLabel(workshop.status)}
        </span>
        <span className="text-muted" style={{ fontSize: '13px', fontWeight: '500' }}>
            {formatDate(workshop.date)}
        </span>
      </div>
      <h4 className="mb-2" style={{ fontSize: 'var(--fs-lg)' }}>{wt?.name}</h4>
      <p className="text-secondary mb-6" style={{ fontSize: '14px' }}>
        {isInstructor ? 'Coordinator' : 'Instructor'}: 
        <span style={{ fontWeight: '600', marginLeft: '6px', color: 'var(--clr-text)' }}>
            {otherUser ? `${otherUser.firstName} ${otherUser.lastName}` : 'Pending Assignment'}
        </span>
      </p>
      <div className="flex-between">
        <Link to={`/workshops/${workshop.id}`} className="btn btn-secondary btn-sm">Manage Session</Link>
        {isInstructor && workshop.status === 0 && (
          <button className="btn btn-primary btn-sm">Claim Workshop</button>
        )}
      </div>
    </div>
  );
}
