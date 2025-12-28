import { Link } from 'react-router-dom'
import '../styles/components/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <div className="logo-icon">N</div>
            <span className="logo-text">NFTree</span>
          </div>
        </div>

        <div className="footer-links">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/about" className="footer-link">About Us</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
          <Link to="/blog" className="footer-link">Blog</Link>
          <Link to="/login" className="footer-link">Login</Link>
        </div>

        <div className="footer-social">
          <a href="#" className="social-icon" aria-label="Twitter">T</a>
          <a href="#" className="social-icon" aria-label="Instagram">I</a>
          <a href="#" className="social-icon" aria-label="Facebook">F</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 NFTree. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <span> | </span>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

