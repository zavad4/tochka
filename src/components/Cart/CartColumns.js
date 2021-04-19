import React from 'react'

export default function CartColumns() {
    return (
        <div className='container-fluid text-center d-none d-lg-block' >
            <div className='row'>
                <div className='col-10 col-lg-2 mx-auto' >
                    <p className='uppercase'>products</p>
                </div>
                <div className='col-10 col-lg-2 mx-auto' >
                    <p className='uppercase'>Name of Product</p>
                </div>
                <div className='col-10 col-lg-2 mx-auto' >
                    <p className='uppercase'>price</p>
                </div>
                <div className='col-10 col-lg-2 mx-auto' >
                    <p className='uppercase'>quantity</p>
                </div>
                <div className='col-10 col-lg-2 mx-auto' >
                    <p className='uppercase'>remove</p>
                </div>
                <div className='col-10 col-lg-2 mx-auto' >
                    <p className='uppercase'>Total</p>
                </div>
            </div>
        </div>
    )
}
