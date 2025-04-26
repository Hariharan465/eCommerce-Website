import React, { useEffect, useState } from 'react'
import'./Cart.css'
import Product from './Product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping  } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin , faSquareInstagram , faFacebook , faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'

const Cart = ({cart , setCart}) => {
    const [total , setTotal] = useState(0)

    useEffect(() => {
        setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.price),0))
    },[cart])
  return (
    <>
    <h1 className='cart-heading'>Cart Products <FontAwesomeIcon icon={faCartShopping} /></h1>
    <div className='cart-container'>
    {
        cart.map((Product)=>(
        <div className="cart-product" key={Product.id}>
            <div className="img">
                <img src={Product.image} alt="image" />
            </div>
            <div className="cart-product-details">
                <h3>{Product.name}</h3>
                <p>Rs.{Product.price}.00</p>
            </div>
        </div>
        ))
    }
    </div>
    <h2 className='cart-amt'>Total Amount Rs :  {total}.00</h2>

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
    </>
  )
}

export default Cart
