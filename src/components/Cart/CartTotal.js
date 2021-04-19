import React from 'react';
import {Link} from 'react-router-dom';

export default function CartTotal({value}) {
    const{cartSubTotal,cartTotal,cartTax,clearCart} = value;
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-6 text-right' >
                        
                        <h5>
                            <span className='text-title' >
                                SubTotal :
                            </span>
                            <strong> &#36; {cartSubTotal} </strong>
                        </h5>
                        <h5>
                            <span className='text-title' >
                                Tax :
                            </span>
                            <strong> &#36; {cartTax} </strong>
                        </h5>
                        <h5>
                            <span className='text-title' >
                                Total :
                            </span>
                            <strong> &#36; {cartTotal} </strong>
                        </h5>
                        <Link to='/'>
                            <button className='btn btn-outline-danger mb-3 px-5'
                                onClick={()=>clearCart()}>
                                    Clear Cart
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
        
    )
}
