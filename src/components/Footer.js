import React from 'react';
import './Footer.css'; // Create a CSS file to style the footer as needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="newsletter">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettä muse.</p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="contact">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h4>CURRENCY</h4>
          <p>
            <span className="currency-flag">🇺🇸</span> USD
          </p>
          <small>Transactions will be completed in Euros and a currency reference is available on hover.</small>
        </div>
      </div>

      <div className="footer-middle">
        <div className="links">
          <h4>mettā muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className="quick-links">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-media">
          <h4>FOLLOW US</h4>
          <p>
            <a href="#instagram">Instagram</a> | <a href="#linkedin">LinkedIn</a>
          </p>
        </div>
        <div className="payments">
          <h4>mettā muse ACCEPTS</h4>
          <p>
            <img src="gpay.png" alt="Google Pay" />
            <img src="mastercard.png" alt="MasterCard" />
            <img src="paypal.png" alt="PayPal" />
            <img src="amex.png" alt="American Express" />
            <img src="applepay.png" alt="Apple Pay" />
            <img src="dipay.png" alt="Dipay" />
          </p>
        </div>
      </div>

      <div className="footer-copy">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;