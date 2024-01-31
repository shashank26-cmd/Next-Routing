import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>At Kenmark Itan Solutions we continuosly strive to perfect </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
  <li><Link href="/" className="text-decoration-none text-white ">Home</Link></li>
  <li><Link href="/About" className="text-decoration-none text-white ">About Us</Link></li>
  <li><Link href="/MyProfile"className="text-decoration-none text-white ">Portfolio</Link></li>
  <li><Link href="/Contact"className="text-decoration-none text-white ">Contact Us</Link></li>
</ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 text-center">
            <p>© {new Date().getFullYear()} - Kenmark</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
