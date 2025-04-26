import React from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin , faSquareXTwitter , faFacebook , faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import {  faFaceSmile , faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/collection'); 
      };

  return (
    <div>
    <div className="header">
        <div className="head">
            <h1>Level up your style</h1>
            <p>with our stunning Collections</p>
            <button className="header-button" onClick={handleClick}>Shop Now</button>
        </div>
        <div>
          <img className='header-image' src="/img/Male.jpg" alt="" />
        </div>
    </div>


  <div class="service">
    <div class="service-container-1">
            <div>
                <h2>We Provide Best</h2>
                <h2>Customer Experience</h2>
            </div>

            <div>
                <p>|| we ensure that our customer have the best shopping experience</p>
            </div>
        </div>

        <div className="service-container-2">
            <div className='service-content'>
                <FontAwesomeIcon icon={faFaceSmile} />
                <h4>Satisfaction Guarantee</h4>
                <p>At Shop Fusion, A Satisfaction Guarantee is a promise that customers will be fully satisfied with a product or service, and if not, they can receive a refund, exchange, or other compensation.</p>
            </div>

            <div className='service-content'>
                <FontAwesomeIcon icon={faFaceSmile} />
                <h4>New Arrival Everyday</h4>
                <p>At Shop Fusion, Discover fresh and exciting new arrivals every day, with something new to explore daily. Stay up-to-date with the latest trends and find your next favorite item</p>
            </div>

            <div className='service-content'>
                <FontAwesomeIcon icon={faFaceSmile} />
                <h4>Fast & Free Shipping</h4>
                <p>At Shop Fusion, Enjoy fast and free shipping on all orders, so you can get your items quickly and without any extra cost. We ensure a seamless shopping experience with speedy delivery right to your doorstep</p>
            </div>
        </div>
  </div>

  <div className='offer'>
    <div className='off'>
      <div className='offer-container'>
        <h1>Up to 50% off</h1>
        <h3>Sale is live. Explore exclusive styles.</h3>
      </div>
    </div>
  </div>


  <div className='image-hoodie'>
    <div className="hoodie-container">
    <div className="hoodie">
        <img src="/img/Hoodie Guy.jpg" alt="" />
        <div className="hoodie-content">
        <h1>Iconic graphics</h1>
        <h3>Nostalguc visuals from the world of movies, music, and art.</h3>
        <button onClick={handleClick}>Click <FontAwesomeIcon icon={faArrowRight} /></button>     
        </div>
        </div>
    </div>
  </div>

  <div className='image-hoodie'>
    <div className="hoodie-container">
    <div className="hoodie">
        <img src="/img/Loose Fit Pant.jpg" alt="" />
        <div className="hoodie-content">
        <h1>Sleek & Stylish</h1>
        <h3> Stay stylish and up-to-date with the latest fashion trends.</h3>
        <button onClick={handleClick}>Click <FontAwesomeIcon icon={faArrowRight} /></button>     
        </div>
        </div>
    </div>
  </div>

  <div className='image-hoodie'>
    <div className="hoodie-container">
    <div className="hoodie">
        <img src="/img/Uniform.jpg" alt="" />
        <div className="hoodie-content">
        <h1>Preppy Uniform</h1>
        <h3>We feature a hood for added warmth perfect for layering.</h3>
        <button onClick={handleClick}>Click <FontAwesomeIcon icon={faArrowRight} /></button>     
        </div>
        </div>
    </div>
  </div>

  <div className='sale'>
    <h2>Shop Fusion Sale</h2>
    <p>Get ready for the ultimate shopping experience with our Shop Fusion Sale!We’ve brought together the best of fashion in one exciting event. Whether you're updating your wardrobe,this is the sale you don’t want to miss.</p>
  </div>

  <div className='image-h2'>
    <h2>New Arrival</h2>
    <div className="new-arrival">
        <div className="new-arrival-container">
            <img src="/img/Brown Trouser.jpg" alt="" />
            <button onClick={handleClick}>Shop Now <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>

        <div className="new-arrival-container">
            <img src="/img/Over sized Tshirt.jpg" alt="" />
            <button onClick={handleClick}>Shop Now <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>

        <div className="new-arrival-container">
            <img src="/img/Denim Shirt 1.jpg" alt="" />
            <button onClick={handleClick}>Shop Now <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>

        <div className="new-arrival-container">
            <img src="/img/Cap 1.jpg" alt="" />
            <button onClick={handleClick}>Shop Now <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    </div>
 </div>


 <div className='image-h2'>
    <h2>Most Wanted</h2>
    <div className="new-arrival">
        <div className="new-arrival-container">
            <img src="img/Baggy pant 1.jpg" alt="" />
            <button onClick={handleClick}>Shop Now <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>

        <div className="new-arrival-container">
            <img src="img/Tshirt 1.jpg" alt="" />
            <button onClick={handleClick}>Shop Now <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>

        <div className="new-arrival-container">
            <img src="img/Baggy 2.jpg" alt="" />
            <button onClick={handleClick}>Shop Now <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>

        <div className="new-arrival-container">
            <img src="img/Black Hoodie.jpg" alt="" />
            <button onClick={handleClick}>Shop Now <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    </div>
</div>


<div className="news">
    <h2>Join our News Letter</h2>
    <p>Signup for our email newsletter to get exclusive discounts and updates and more </p>
    <div>
        <input type="text" className='search' />
    </div>

    <div>
        <button>Subscribe</button>
    </div>
</div>


<div className="footer-1">
    <div className="footer-container">
        <div className="footer-box-1">
            <h2 className="heading-text">Shop Fusion</h2>
            <p>Shop Fusion is dedicated to providing high-quality products with a focus on exceptional customer service. We offer a curated selection of items that cater to your needs, ensuring a seamless shopping experience. With fast, free shipping and a satisfaction guarantee, we strive to make every purchase a delightful one. Your happiness is our priority!</p>
            <div class="footer-icon-container">
            <FontAwesomeIcon className='social' icon={faSquareInstagram} />
            <FontAwesomeIcon className='social' icon={faSquareXTwitter} />
            <FontAwesomeIcon className='social' icon={faFacebook} />
            <FontAwesomeIcon className='social' icon={faLinkedin} />
            </div>
        </div>
     <p>@2024ShopFusion.com</p>
   </div>
</div>
    </div>
  )
}

export default Home
