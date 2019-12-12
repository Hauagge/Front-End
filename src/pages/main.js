import React from 'react';
import './main.css';
import home from '../assets/Home.svg';
import calculadora from '../assets/Calculadora.svg';
import CDC from '../assets/CDC.svg';
import configurações from '../assets/Configurações.svg';
import documento from '../assets/Documento.svg';
import formulario from '../assets/Formulario.svg'


export default function Main() {
    return (
        <div className="containerMain">
            <header className="header">
                <img src={home} />
                <a href='#'> Início</a>
            </header>
            <nav className="">

            </nav>
            <aside className="sideBar">
                
                <div className="itemGeral">
                    <div className="item">
                        <img src={calculadora} />
                        <a href='#'> Calculadora</a>
                    </div>

                    <div className="item">
                        <img src={formulario} />
                        <a href='#'> Abrir Formulário</a>
                    </div>

                    <div className="item">
                        <img src={documento} />
                        <a href='#'> Enviar </a>
                    </div>

                    <div className="item">
                        <img src={CDC} />
                        <a href='#'> CDC</a>
                    </div>

                    <div className="item" style={{ borderBottom: '2px', 'solid:': '#003E9A' }}>
                        <img src={configurações} />
                        <a href='#'> configurações</a>
                    </div>
                </div>



            </aside>
        </div >


    )
}