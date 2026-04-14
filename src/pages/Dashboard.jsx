import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  workshops as initialWorkshops,
  getWorkshopTypeById,
  getUserById,
} from '../data/mockData';
import DashboardCard from '../components/cards/DashboardCard';
import './Dashboard.css';

export default function Dashboard() {
  const { user, isInstructor } = useAuth();
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    if (user) {
      const filtered = isInstructor
        ? initialWorkshops.filter(w => w.instructorId === user.id || w.status === 0)
        : initialWorkshops.filter(w => w.coordinatorId === user.id);
      setWorkshops(filtered);
    }
  }, [user, isInstructor]);

  if (!user) return null;

  const accepted = workshops.filter(w => w.status === 1);
  const pending = workshops.filter(w => w.status === 0);

  return (
    <div className="container py-12 animate-in">
      <header className="mb-12">
        <div className="flex-between">
            <div>
                <h1 style={{ marginBottom: '8px' }}>Hello, {user.firstName}</h1>
                <p className="text-secondary">Track and manage your upcoming workshop sessions.</p>
            </div>
            {!isInstructor && (
                <Link to="/workshops/propose" className="btn btn-primary">
                    + Propose New
                </Link>
            )}
        </div>
      </header>

      <section className="dashboard-grid stagger">
        <div className="dashboard-column">
            <h2 className="h3 mb-6 flex-between">
                <span>Active Sessions</span>
                <span className="badge badge-neutral">{accepted.length}</span>
            </h2>
            <div className="card-stack">
                {accepted.length > 0 ? accepted.map(w => (
                    <DashboardCard key={w.id} workshop={w} isInstructor={isInstructor} />
                )) : <p className="text-muted">No active sessions.</p>}
            </div>
        </div>

        <div className="dashboard-column">
            <h2 className="h3 mb-6 flex-between">
                <span>{isInstructor ? 'New Requests' : 'Pending Proposals'}</span>
                <span className="badge badge-neutral">{pending.length}</span>
            </h2>
            <div className="card-stack">
                {pending.length > 0 ? pending.map(w => (
                    <DashboardCard key={w.id} workshop={w} isInstructor={isInstructor} />
                )) : <p className="text-muted">Nothing pending at the moment.</p>}
            </div>
        </div>
      </section>
    </div>
  );
}


