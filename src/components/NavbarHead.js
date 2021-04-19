import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';

export default class NavbarHead extends Component {
    render() {
        return (
            <nav className='navbar bg-dark navbar-dark navbar-expand-md px-sm-5'>
                <Link to='/'>
                    <img src={logo} alt='store' className='navbar-brand' />
                </Link>

                    <ul className='navbar-nav align-item-center'>
                        <li className='nav-item ml-3'>
                            <Link to='/'>
                                <span className='navi-item' > Products</span> 
                            </Link>
                        </li>
                        
                    </ul>
                    
                    <Link to='/cart' className='ml-auto' >
                        <button className='btn-lg btn-info'>
                            <span className='mr-1'>
                                <i className="fa fa-cart-plus fa-lg cart-color"></i>
                            </span>
                            My Cart
                        </button>
                    </Link>        
            </nav>
            
        )
    }
}

