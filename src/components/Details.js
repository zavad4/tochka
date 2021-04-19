import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import {ProductConsumer} from '../context';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                { value => {
                    const {
                        id,
                        company,
                        price,
                        img,
                        info,
                        title,
                        inCart
                    } = value.detailProduct;
                    return(
                        <div className='container py-5'>
                            <div className='row'>
                                <div className='col-10 my-5 mx-auto text-center text-blue' >
                                    <h1> {title} </h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-10 col-md-6 mx-auto my-3' >
                                    <img className='img-fluid' src={img} alt ='product' />
                                </div>
                                <div className='col-10 col-md-6 mx-auto my-3' >
                                    <h2> Model : {title} </h2>
                                    <h4 className='mt-3 mb-2 text-muted'>
                                        MADE BY : <span className='text-uppercase' > {company} </span> 
                                    </h4>
                                    <h4 className='text-blue'>
                                        <strong>
                                            Price : &#36;- {price}
                                        </strong>
                                    </h4>
                                    <p className='font-weight-bold mt-3 mb-0' >
                                        Some Info About The Product
                                    </p>
                                    <p className='text-muted lead'>
                                        {info}
                                    </p>
                                    <div>
                                        <Link to='/'>
                                            <button className='btn-outline-primary btn-lg' > 
                                                Back To Products
                                            </button>
                                        </Link>
                                        <button className='btn-outline-danger btn-lg my-2 mx-3'
                                            disabled={inCart?true:false} 
                                            onClick={()=>{
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}    >
                                            {inCart ? "In Cart" : "Add To Cart"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
