import React from 'react'
import './product.css'

const Product = ({product , cart , setCart}) => {
    const name = product.description.length>21?product.description.substring(0,20)+"...":product.description;

    const addCart = () => {
        setCart([...cart,product])
    }
    const removeCart = () => {
        setCart(cart.filter((c)=>c.id!==product.id))
    }
  return (
    <> 
    <div className='product'>
        <div className='products-box'>
            <img src={product.image} alt="" />
        </div>
        <div className="details">
      <h3>{product.name}</h3>
      <p>Rs.{product.price}.00</p>
      <p className='description'>Description : {name}</p>
      {cart.includes (product)?(
        <button className='btnremove' onClick={removeCart}>Remove</button>
      ):
        <button className='btnAdd' onClick={addCart}> Add to Cart</button>
      }
      </div>
    </div> 
    </>
  )
}

export default Product
