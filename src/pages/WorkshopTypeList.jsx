import { workshopTypes } from '../data/mockData';
import WorkshopCard from '../components/cards/WorkshopCard';

export default function WorkshopTypeList() {
  return (
    <div className="container py-12 animate-in">
      <header className="mb-12 text-center">
        <span className="badge badge-success mb-4">Educational Programs</span>
        <h1 className="mb-4">Curated Workshop Catalog</h1>
        <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Discover high-impact, hands-on learning sessions designed by industry experts and academic leaders at IIT Bombay.
        </p>
      </header>
      
      <div className="grid-workshops stagger">
        {workshopTypes.map(wt => (
          <WorkshopCard key={wt.id} workshopType={wt} />
        ))}
      </div>
    </div>
  );
}
