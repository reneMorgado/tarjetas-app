import Card from '../../components/Card/Card';

const Main = () => {

  return (
    <div className="container mt-4">
      <h3>Bienvenido</h3>
      <h6 className='mb-4'>Consulta los detalles de tu tarjeta en esta sección</h6>
      <div className="d-flex justify-content-center">
        <Card cardNumber="312321321312312332" dueDate='12/24' owner='Lisardo René Morgado Resendiz' logo='mastercard' />
      </div>
    </div>
  )
}

export default Main