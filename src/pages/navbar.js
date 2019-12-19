import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css';

import calculadora from '../assets/Calculadora.svg';
import CDC from '../assets/CDC.svg';
import configuracoes from '../assets/Configurações.svg';
import documento from '../assets/Documento.svg';
import formulario from '../assets/Formulario.svg';
import logo from '../assets/logo_procon_deitado.svg';

export default function Navbar() {
    return (

        <div >
            <nav className="containerMain" >
                <ul>
                    <img src={logo} alt='logo' style={{ maxWidth: '300px' }} />
                    <div className="item">
                        <img src={calculadora} alt='calculadora' />
                        <NavLink to='/calculadora'> Calculadora</NavLink>
                    </div>
                    <div className="item">
                        <img src={formulario} alt='formulario' />
                        <a href='#'> Abrir Formulário</a>
                    </div>
                    <div className="item">
                        <img src={documento} alt='documento' />
                        <a href='#'> Enviar </a>
                    </div>
                    <div className="item">
                        <img src={CDC} alt='CDC' />
                        <a href='#'> CDC</a>
                    </div>
                    <div className="item" style={{ borderBottom: '2px', 'solid:': '#003E9A' }}>
                        <img src={configuracoes} alt='configurações' />
                        <a href='#'> configurações</a>
                    </div>
                </ul>
            </nav>

            </div >



    )
}