import React from 'react'
import Carousel from '../../components/Carousel/Carousel'

const AllCards = () => {
    return (
        <div className="container p-0">
            <div className='panel p-0 p-sm-5'>
                <h3 className='mb-5 text-salmon px-4 px-sm-0 pt-4 pt-sm-0'>Mis tarjetas guardadas</h3>
                <div className="mt-5">
                    <Carousel />
                </div>

            </div>
        </div>
    )
}

export default AllCards