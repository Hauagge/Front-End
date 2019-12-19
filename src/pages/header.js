import React from 'react'

import home from '../assets/Home.svg';
import notificacoes from '../assets/Notificacoes.svg';

import './header.css';


const Menu = () => (
    
                        <header className="headerContent">
                                <div className="itensHeader">
                                        <ul style={{display:'Flex', alignItems:'center'}}>
                                                <img src={home} className='imagem' />
                                                <a href='#'> Início</a>
                                        </ul>
                                        <ul>
                                                <img src={notificacoes} />
                                        </ul>
                                </div>
                        </header>
   
)

export default Menu;