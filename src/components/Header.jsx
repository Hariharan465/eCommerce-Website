import React from 'react'
import {Link} from "react-router-dom"
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse , faBagShopping , faAddressBook ,faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Header = ({cart}) => {
  return (
    <div>
        <div className="navbar">
                <h1>Shop Fusion</h1>         

        <ul>
            <li>
                <Link to={"/"} className='text'><FontAwesomeIcon className='icon' icon={faHouse} /> Home</Link>
            </li>
            <li>
                <Link to={"/Collection"} className='text'><FontAwesomeIcon className='icon' icon={faCartPlus} /> Collection</Link>
            </li>
            <li>
                <Link to={"/Cart"} className='text'><FontAwesomeIcon className='icon' icon={faBagShopping} /> Cart<span className='cart-count'>({cart.length})</span></Link>
            </li>
            <li>
                <Link to={"/Contact"} className='text'><FontAwesomeIcon className='icon' icon={faAddressBook} /> Contact</Link>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Header
