import MastercardLogo from './img/mastercard.svg'
import VisaLogo from './img/visa.svg'
import AmexLogo from './img/amex.svg'
import EmptyLogo from './img/empty.svg'
import { CardInterface } from '../../interfaces/Interfaces';
import './Card.scss'

const Card = ({ cardNumber, dueDate, owner, logo }: CardInterface) => {

  const getCardLogo = (): string => {
    const routes: { [key: string]: string } = {
      'mastercard': MastercardLogo,
      'visa': VisaLogo,
      'amex': AmexLogo,
      'empty': EmptyLogo
    }
    return routes[logo] ?? routes['mastercard']
  }

  function formatCardNumber(cardNumber: string): string {
    return cardNumber.replace(/(.{4})/g, '$1 ').trim();
  }

  function getCardClass(type: string): string {
    return 'cardItem--' + type
  }

  function getCardImageClass(type: string): string {
    return 'cardItem__image--' + type
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

export default Card