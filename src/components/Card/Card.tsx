import MastercardLogo from './img/mastercard.svg'; // Importa el logo de Mastercard.
import VisaLogo from './img/visa.svg'; // Importa el logo de Visa.
import AmexLogo from './img/amex.svg'; // Importa el logo de American Express.
import EmptyLogo from './img/empty.svg'; // Importa un logo vacío.
import { CardInterface } from '../../interfaces/Interfaces'; // Importa la interfaz de tarjeta.
import './Card.scss'; // Importa los estilos CSS para el componente.

const Card = ({ cardNumber, dueDate, owner, logo }: CardInterface) => {

  // Función para obtener la ruta del logo de la tarjeta.
  const getCardLogo = (): string => {
    const routes: { [key: string]: string } = {
      'mastercard': MastercardLogo,
      'visa': VisaLogo,
      'amex': AmexLogo,
      'empty': EmptyLogo
    }
    return routes[logo] ?? routes['mastercard'];
  }

  // Función para formatear el número de la tarjeta.
  function formatCardNumber(cardNumber: string): string {
    return cardNumber.replace(/(.{4})/g, '$1 ').trim();
  }

  // Función para obtener la clase CSS según el tipo de tarjeta.
  function getCardClass(type: string): string {
    return 'cardItem--' + type;
  }

  // Función para obtener la clase CSS de la imagen según el tipo de tarjeta.
  function getCardImageClass(type: string): string {
    return 'cardItem__image--' + type;
  }

  return (
    <div className={"p-sm-2 p-1 d-flex flex-column justify-content-between " + getCardClass(logo)}>
      <img className={"align-self-end " + getCardImageClass(logo)} src={getCardLogo()} alt="card logo" />
      <div className="cardItem__cardInfo">
        <span className="d-flex flex-sm-row flex-column justify-content-between px-sm-4 px-2 pb-2">
          <p className='cardItem__cardNumber m-0'>{formatCardNumber(cardNumber)}</p>
          <p className='cardItem__cardNumber m-0'>{dueDate}</p>
        </span>
        <p className='cardItem__cardOwner px-sm-4 px-2 pb-2'>{owner}</p>
      </div>
    </div>
  )
}

export default Card // Exporta el componente Card.