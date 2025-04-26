import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin , faSquareXTwitter , faFacebook , faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import data from '../assets/products.json'
import './collection.css'
import Product from './Product';

const Colection = ( {cart , setCart} ) => {
  const [searchQuery, setSearchQuery] = useState(""); // To store the search query
  const [filteredProducts, setFilteredProducts] = useState(data);

   // Function to handle the search input change
   const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter the products based on the search query
    const filtered = data.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) // Case insensitive search
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className='product-section'>
      <div className='search'>
          <form class="product-search">
              <input type='text' id='search' placeholder='Search' value={searchQuery} onChange={handleSearchChange}/>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
          </form>
        </div>
      <div className="products">
      {filteredProducts.length === 0 ? (
          <h2>No products found</h2>
        ) : (
      filteredProducts.map((product)=>(
        <Product key={product.id}  product={product} cart ={cart} setCart ={setCart}/> 
          ))
        )}
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

export default Colection
