import React, { useState } from 'react'; // Importa React y el hook useState.
import './Navbar.scss'; // Importa el archivo de estilos SCSS para el componente.
import { NavLink } from 'react-router-dom'; // Importa NavLink para la navegación entre rutas.
import Profile from './img/profile.png'; // Importa la imagen del perfil.
import Menu from './img/menu.svg'; // Importa el icono de menú.
import Close from './img/close.svg'; // Importa el icono de cerrar.

const Navbar = () => {

    // Estado que controla si el menú de navegación está visible o no.
    const [showNavigation, setShowNavigation] = useState<boolean>(false);

    // Función para alternar la visibilidad del menú de navegación.
    const toggleNavigation = (): void => {
        setShowNavigation(!showNavigation);
    };

    return (
        <div className="Navbar p-sm-0 p-4 d-flex justify-content-between justify-content-sm-around align-items-center">
            <button onClick={toggleNavigation} className="Navbar__button d-flex d-sm-none" type="button">
                <img src={Menu} alt="menu" />
            </button>
            <div className={showNavigation ? 'Navbar__navigation' : 'Navbar__navigation--closed'}>
                {
                    showNavigation && <div className='p-3'>
                        <div className="Navbar__navigation--header d-flex justify-content-between align-items-center pb-3">
                            <p className='fw-semibold mb-0 fs-4'>CardsApp</p>
                            <button onClick={toggleNavigation} className="Navbar__button d-flex d-sm-none" type="button">
                                <img src={Close} alt="menu" />
                            </button>
                        </div>
                        <div className='Navbar__navigation--links d-flex flex-column align-items-center mt-4'>
                            <NavLink onClick={toggleNavigation} to="/" className={({ isActive }) => (isActive ? 'active my-2' : 'my-2')}>
                                <span className='fw-medium '>Inicio</span>
                            </NavLink>
                            <NavLink onClick={toggleNavigation} to="/cards" className={({ isActive }) => (isActive ? 'active my-2' : 'my-2')}>
                                <span className='my-4 fw-medium '>Mis Tarjetas</span>
                            </NavLink>
                            <NavLink onClick={toggleNavigation} to="/add-card" className={({ isActive }) => (isActive ? 'active my-2' : 'my-2')}>
                                <span className='me-md-4 me-2 fw-medium '>Agregar Tarjeta</span>
                            </NavLink>
                            <NavLink onClick={toggleNavigation} to="/contact" className={({ isActive }) => (isActive ? 'active my-2' : 'my-2')}>
                                <span className='me-md-4 me-2 fw-medium '>Contáctanos</span>
                            </NavLink>
                        </div>
                    </div>
                }
            </div>
            <div className="Navbar__logo d-none d-sm-flex">
                <p className='fw-semibold'>CardsApp</p>
            </div>
            <div className="Navbar__links d-none d-sm-flex">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                    <span className='me-md-4 me-2 fw-medium '>Inicio</span>
                </NavLink>
                <NavLink to="/cards" className="">
                    <span className='me-md-4 me-2 fw-medium '>Mis Tarjetas</span>
                </NavLink>
                <NavLink to="/add-card" className="">
                    <span className='me-md-4 me-2 fw-medium '>Agregar Tarjeta</span>
                </NavLink>
                <NavLink to="/contact" className="">
                    <span className='me-md-4 me-2 fw-medium '>Contáctanos</span>
                </NavLink>
            </div>
            <div className="Navbar__profile">
                <img src={Profile} alt="profile pic" />
            </div>
        </div>
    )
}

export default Navbar


/*       <div className="Navbar">
<h3 className='ms-4 mb-0 d-sm-block d-none'>Tarjetas App</h3>

</div>*/