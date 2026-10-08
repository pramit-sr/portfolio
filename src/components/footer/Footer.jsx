import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <span className="footer__copy">&copy; {new Date().getFullYear()} Pramit Sarkar</span>
        </div>
    </footer>
  );
}

export default Footer;