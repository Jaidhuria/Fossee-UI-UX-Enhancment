import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} FOSSEE Group, IIT Bombay</p>
      </div>
    </footer>
  );
}
