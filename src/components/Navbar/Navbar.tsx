import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'
import Contact from './img/contact.svg'
import Cards from './img/cards.svg'
import Card from './img/card.svg'
import AddCard from './img/cards-add.svg'



const Navbar = () => {
    return (
        <div className="Navbar">
            <h3 className='ms-4 mb-0 d-sm-block d-none'>Tarjetas App</h3>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'Navbar__link--active' : 'Navbar__link')}>
                <img src={Card} alt='contact' />
                <span>Inicio</span>
            </NavLink>
            <NavLink to="/cards" className={({ isActive }) => (isActive ? 'Navbar__link--active' : 'Navbar__link')}>
                <img src={Cards} alt='contact' />
                <span>Mis Tarjetas</span>
            </NavLink>
            <NavLink to="/add-card" className={({ isActive }) => (isActive ? 'Navbar__link--active' : 'Navbar__link')}>
                <img src={AddCard} alt='contact' />
                <span>Agregar Tarjeta</span>
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'Navbar__link--active' : 'Navbar__link')}>
                <img src={Contact} alt='contact' />
                <span>Contáctanos</span>
            </NavLink>
        </div>
    )
}

export default Navbar