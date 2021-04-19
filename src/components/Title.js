import React from 'react'

export default function Title({name,title}) {
    return (
        <div className='row'>
            <div className='col-12 mx-auto my-2 text-center' >
                <h1 className='text-capitalize center'>
                    {name} {title}
                </h1>
            </div>
        </div>
    )
}

