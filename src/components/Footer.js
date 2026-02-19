import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-container">
                    <div className="footer-brand">
                        <a href="https://zigguratss.com/" className="footer-logo">
                            <span className="footer-logo-text">Zigguratss</span>
                            <span className="footer-logo-sub">Artwork LLP</span>
                        </a>
                        <p className="footer-tagline">
                            Discover the finest collection of original Indian artwork and paintings 
                            that resonate with creativity, cultural depth, and aesthetic brilliance.
                        </p>
                        <div className="social-links">
                            <a href="https://www.facebook.com/people/Zigguratss-Artwork-LLP/100090657829166/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/company/zigguratssartwork/about/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                    <rect x="2" y="9" width="4" height="12"/>
                                    <circle cx="4" cy="4" r="2"/>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/zigguratss/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                                </svg>
                            </a>
                            <a href="https://in.pinterest.com/zigguratss/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-links-section">
                        <div className="footer-column">
                            <h4 className="footer-heading">For Buyers</h4>
                            <ul className="footer-list">
                                <li><a href="https://zigguratss.com/cms/customer-guide">Customer Guide</a></li>
                                <li><a href="https://zigguratss.com/artworks">Browse Artworks</a></li>
                                <li><a href="https://zigguratss.com/artist">Our Artists</a></li>
                                <li><a href="https://zigguratss.com/faq">FAQs</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-heading">For Artists</h4>
                            <ul className="footer-list">
                                <li><a href="https://zigguratss.com/cms/artist-guide">Artist Guide</a></li>
                                <li><a href="https://zigguratss.com/contest/artwork/week">Art Contest</a></li>
                                <li><a href="https://zigguratss.com/cms/contest-rules">Contest Rules</a></li>
                                <li><a href="https://zigguratss.com/signup">Join Us</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-heading">Zigguratss Art</h4>
                            <ul className="footer-list">
                                <li><a href="https://zigguratss.com/about">About Us</a></li>
                                <li><a href="https://zigguratss.com/blog">Blog</a></li>
                                <li><a href="https://zigguratss.com/contact">Contact</a></li>
                                <li><a href="https://zigguratss.com/cms/terms-and-conditions">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-container">
                    <p className="copyright">
                        © 2026 Zigguratss Artwork LLP. All Rights Reserved.
                    </p>
                    <div className="payment-methods">
                        <span>We Accept:</span>
                        <div className="payment-icons">
                            <span className="payment-badge">Visa</span>
                            <span className="payment-badge">PayPal</span>
                            <span className="payment-badge">Discover</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* WhatsApp floating button intentionally removed per request */}
        </footer>
    );
};

export default Footer;
