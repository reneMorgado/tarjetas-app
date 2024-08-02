import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Carousel.scss'

import Card from '../Card/Card';
import { CarouselInterface, CardInterface } from '../../interfaces/Interfaces';
import { useContext } from 'react';
import { cardsContext } from '../../context/CardsContext';

const Carousel = ({ items }: CarouselInterface) => {
    const context = useContext(cardsContext)
    return (
        <Swiper
            slidesPerView={'auto'}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
                renderBullet: function (index: number, className: string) {
                    return '<span class="Carousel__bullet ' + className + '">' + (index + 1) + '</span>';
                },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="Carousel"
        >
            {context?.state.map((card: CardInterface) => (
                <SwiperSlide key={card.id} className='Carousel__slide'>
                    <Card cardNumber={card.cardNumber} dueDate={card.dueDate} owner={card.owner} logo={card.logo} />
                </SwiperSlide>
            ))}

        </Swiper>
    )
}

export default Carousel