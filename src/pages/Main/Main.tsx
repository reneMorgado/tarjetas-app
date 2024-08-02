import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';

const Main = () => {

  return (
    <div className="container mt-4">
      <div className="panel">
        <div className="d-flex justify-content-between flex-sm-row flex-column">
          <h3 className='mb-sm-4 mb-2 text-salmon'>Bienvenido, Lisardo René</h3>
          <Link className='d-flex mb-2 mb-sm-0 text-salmon' to="/add-card">
            <svg className='me-2' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g data-name="add" id="add-2"> <g> <line fill="none" stroke="#f66595" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="19" y2="5"></line> <line fill="none" stroke="#f66595" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5" x2="19" y1="12" y2="12"></line> </g> </g> </g> </g></svg>
            Añadir tarjeta
          </Link>
        </div>
        <h6 className='mb-5 text-salmon'>Consulta los detalles de tu tarjeta en esta sección</h6>
        <div className="d-flex justify-content-center">
          <Card cardNumber="312321321312312332" dueDate='12/24' owner='Lisardo René Morgado Resendiz' logo='mastercard' />
        </div>
        <Link className='d-flex mt-5 align-items-center' to="/cards">
          Ver todas mis tarjetas
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="F-Chevron"> <polyline fill="none" id="Right" points="8.5 5 15.5 12 8.5 19" stroke="#f66595" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline> </g> </g> </g></svg>
        </Link>
      </div>
    </div>
  )
}

export default Main