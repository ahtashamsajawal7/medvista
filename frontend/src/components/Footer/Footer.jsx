import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4 className="footer-logo">
                            <span style={{ color: '#000000' }}>
                            <h1 className="logo">
  <span style={{ color: '#33b4ff' }}>Med</span>
  <span style={{ color: 'white' }}>Vista</span>
  <span style={{ color: '#33b4ff' }}>.</span>
</h1>
                            </span>
                        </h4>
                        <p className="logo-text">Lorem ipsum</p>
                        <input className="footer-input" type="text" placeholder="Enter your email" />
                    </div>
                    <div className="footer-col">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#">Islamabad Pakistan</a></li>
                            <li><a href="#">abc@gmail.com</a></li>
                            <li><a href="#">+92 000 0000000</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Account</h4>
                        <ul>
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Login / Register</a></li>
                            <li><a href="#">Shop</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Quick Link</h4>
                        <ul>
                            <li><a href="#food">Exercise</a></li>
                            <li><a href="#calendar">Calendar</a></li>
                            <li><a href="#diet-section">Diet</a></li>
                            <li><a href="#blogs">Blog</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Download App</h4>
                        <div className="download">
                            <div className="qr-code">
                                <img src="./QRcode.PNG" alt="QR Code" style={{ width: '90px', height: '90px' }} />
                            </div>
                            <div className="store-link">
                                <div className="play-store">
                                    <a href="">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="playstore-icon" style={{ width: '120px' }} />
                                    </a>
                                </div>
                                <div className="apple-store">
                                    <a href="">
                                        <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="store-icon" style={{ width: '120px' }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="social-links">
                            <a href=""><i className="fab fa-facebook"></i></a>
                            <a href=""><i className="fab fa-twitter"></i></a>
                            <a href=""><i className="fab fa-instagram"></i></a>
                            <a href=""><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
