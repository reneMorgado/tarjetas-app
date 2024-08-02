import { Swiper, SwiperSlide } from 'swiper/react'; // Importa los componentes Swiper y SwiperSlide de Swiper para el carrusel.
import { Pagination, Navigation } from 'swiper/modules'; // Importa los módulos de paginación y navegación para Swiper.

import 'swiper/css'; // Importa los estilos CSS básicos de Swiper.
import 'swiper/css/navigation'; // Importa los estilos CSS para la navegación de Swiper.
import 'swiper/css/pagination'; // Importa los estilos CSS para la paginación de Swiper.

import './Carousel.scss'; // Importa los estilos CSS personalizados para el carrusel.

import Card from '../Card/Card'; // Importa el componente Card.
import { CarouselInterface, CardInterface } from '../../interfaces/Interfaces'; // Importa las interfaces para las propiedades del carrusel y de las tarjetas.
import { useContext } from 'react'; // Importa useContext para usar el contexto de React.
import { cardsContext } from '../../context/CardsContext'; // Importa el contexto de tarjetas.


const Carousel = ({ items }: CarouselInterface) => {

    const context = useContext(cardsContext) // Usa el contexto de tarjetas para obtener el estado de las tarjetas.

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

export default Carousel // Exporta el componente Carousel.