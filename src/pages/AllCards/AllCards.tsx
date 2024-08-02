import React from 'react'
import Carousel from '../../components/Carousel/Carousel'

const AllCards = () => {
    return (
        <>
            <div className="container">
                <h3 className='my-4'>Mis tarjetas guardadas</h3>

            </div>
            <div className="mt-4">
                <Carousel />
            </div>
        </>
    )
}

export default AllCards