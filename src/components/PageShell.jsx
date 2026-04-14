import Navbar from './Navbar';
import Footer from './Footer';

export default function PageShell({ children }) {
  return (
    <div className="page-shell">
      <Navbar />
      <main id="main-content" className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
