import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';

export default class Product extends Component {

    render() {
        const {id,title,img,price,inCart} = this.props.product;

        return (
            <div className='col-12 mx-auto col-lg-3 my-3 col-md-6'>
                <div className='card'>
                    <ProductConsumer>
                        {value=> (
                            <div className='img-container p-5' onClick={()=>{
                                //console.log("you clicked me");
                                value.handelDetail(id)
                            }}
                        >
                            <Link to='/details'>
                                <img src={img} alt='Product' className='card-img-top'/>
                            </Link>
                            <button className='cart-btn' disabled={inCart ? true : false}
                                onClick={()=>{
                                    //console.log("added to cart");
                                    value.addToCart(id);
                                    value.openModal(id);
                                }}
                            >
                                {inCart ?(<p className='mb-0' disabled>{" "} In Cart</p>) : ( <i className='fa fa-cart-plus fa-lg cart-color'/>) }

                            </button>
                        </div>


                        )}
                    </ProductConsumer>

                    <div className='card-footer d-flex justify-content-between'>
                        <p className='algin-self-center mb-0'> {title} </p>
                        <h5 className='font-italic text-blue mb-0' > 	&#36;- {price} </h5>
                    </div>
                </div>
            </div>
        )
    };
};

