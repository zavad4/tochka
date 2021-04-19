import React from 'react';


export default function CartItem({item,value}) {
    const {id,title,img,price,total,count} = item;
    const { increment,decrement,removeItem } = value;
    return (
        <div className='row my-2 text-center' >
            <div className='col-lg-2 col-10 mx-auto' >
                <img src={img} style={{width:'5rem',height:'5rem'}}
                    className='img-fluid' alt='product'/>
            </div>
            <div className='col-lg-2 col-10 mx-auto' >
                <span className='d-lg-none'> Product : </span> {title}
            </div>
            <div className='col-lg-2 col-10 mx-auto' >
                <span className='d-lg-none'> Price : </span> {price}
            </div>
            <div className='col-10 col-lg-2 mx-auto  my-2 my-lg-0' >
                <div className='d-flex justify-content-center'>
                    <div>
                        <span className='btn btn-black mx-1' onClick={()=>decrement(id)} > - </span>
                        <span className='btn btn-black mx-1' > {count} </span>
                        <span className='btn btn-black mx-1' onClick={()=>increment(id)} > + </span>
                    </div>
                </div>
            </div>
            <div className='col-lg-2 col-10 mx-auto' >
                <div className='cart-icon' onClick={()=>removeItem(id)} >
                    <i className='fa fa-trash' />
                </div>
            </div>
            
            <div className='col-lg-2 col-10 mx-auto' >
                <strong> Total : &#36; - {total} </strong>
            </div>
            
        </div>
    )
}
