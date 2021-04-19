import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {modalOpen, closeModal} = value;
                    const {img,title,price} = value.modalProduct;
                    if(!modalOpen){
                        return null;
                    }
                    else{
                        return(
                            <div className='container'>
                                <div id='modal' className='row' >
                                    <div  className='col-8 col-md-6 col-lg-6 p-5 mx-auto text-center'>
                                        <div className='modal-item'>
                                            <h5  >Item Added To The Cart </h5>
                                            <img src={img} alt='modal_img' className='img-fluid ' />
                                            <h5> {title} </h5>
                                            <h5 className='text-muted'> Price - &#36;-{price} </h5>
                                            <Link to='/'>
                                                <button className='btn-lg btn-outline-primary'
                                                    onClick={()=>closeModal()}>
                                                    Continue Shopping
                                                </button>
                                            </Link>
                                            <Link to='/cart'>
                                            <button className='mx-3 btn-lg btn-outline-danger'
                                                    onClick={()=>closeModal()}>
                                                    Go To Cart
                                                </button>
                                            </Link>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}
