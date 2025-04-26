import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin , faSquareXTwitter , faFacebook , faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import './Contact.css'

function Contact() {
  return (
    <div>
      <footer>
    <div class="container">
        <div class="footer-content">
            <h3>Contact Us</h3>
            <p>Email : ShopFusion@gmail.com</p>
            <p>Phone : +91 9442302465</p>
            <p>Address : No.56,SMT Street-Thanjavur</p>
        </div>

        <div class="footer-content">
            <h3>Quick Links</h3>
            <ul class="list">
                <li><a href="/">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="/Collection">Products</a></li>
                <li><a href="/Contact">Contact</a></li>
            </ul>
        </div>

        <div class="footer-content">
            <h3>Follow us</h3>
            <ul class="social-icons">
            <li><a href=""><FontAwesomeIcon className='social' icon={faFacebook} /></a></li>
            <li><a href=""><FontAwesomeIcon className='social' icon={faSquareXTwitter} /></a></li>
            <li><a href="https://www.instagram.com/ix_hari/"><FontAwesomeIcon className='social' icon={faSquareInstagram} /></a></li>
            <li><a href="https://www.linkedin.com/in/hariharan-venkatesan-2650a5254/"><FontAwesomeIcon className='social' icon={faLinkedin} /></a></li>
            </ul>
        </div>
    </div>
</footer>
<div class="bottom-bar">
    <p>&copy;2024 Shop Fusion . All rights reserved . Designed By Hariharan</p>
</div>
    </div>
  )
}

export default Contact
