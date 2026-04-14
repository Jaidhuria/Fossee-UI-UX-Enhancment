import { useState } from 'react';
import { workshopTypes } from '../data/mockData';
import { useToast } from '../components/Toast';
import { useNavigate } from 'react-router-dom';

export default function ProposeWorkshop() {
  const [form, setForm] = useState({ type: '', date: '', notes: '' });
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addToast('Proposal submitted successfully!', 'success');
    navigate('/dashboard');
  };

  return (
    <div className="container py-12 animate-in" style={{ maxWidth: '700px' }}>
      <header className="mb-12 text-center">
        <h1 className="h2">Propose a Workshop</h1>
        <p className="text-secondary">Initiate a new educational session at your institution.</p>
      </header>

      <div className="card glass-card">
        <form onSubmit={handleSubmit} className="stagger">
          <div className="form-group mb-6">
            <label className="form-label">Workshop Category</label>
            <select 
              className="form-input" 
              required
              value={form.type}
              onChange={e => setForm({...form, type: e.target.value})}
            >
              <option value="">Select a category</option>
              {workshopTypes.map(wt => (
                <option key={wt.id} value={wt.id}>{wt.name}</option>
              ))}
            </select>
          </div>

          <div className="form-group mb-6">
            <label className="form-label">Preferred Commencement Date</label>
            <input 
              type="date" 
              className="form-input" 
              required
              value={form.date}
              onChange={e => setForm({...form, date: e.target.value})}
            />
          </div>

          <div className="form-group mb-8">
            <label className="form-label">Additional Logistics / Requirements</label>
            <textarea 
              className="form-input" 
              rows="4"
              placeholder="E.g. Expected participant count, equipment availability..."
              value={form.notes}
              onChange={e => setForm({...form, notes: e.target.value})}
            ></textarea>
          </div>

          <div className="flex-between">
            <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>Cancel</button>
            <button type="submit" className="btn btn-primary">Submit Proposal</button>
          </div>
        </form>
      </div>
    </div>
  );
}
