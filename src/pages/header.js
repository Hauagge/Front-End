import React from 'react'
import { NavLink } from 'react-router-dom';
import home from '../assets/Home.svg';
import notificacoes from '../assets/Notificacoes.svg';

import './header.css';


const Menu = () => (
    
                        <header className="headerContent">
                                <div className="itensHeader">
                                        <ul style={{display:'Flex', alignItems:'center'}}>
                                                <img src={home} className='imagem' />
                                                <NavLink to='/main'> Início</NavLink>
                                        </ul>
                                        <ul>
                                                <img src={notificacoes} />
                                        </ul>
                                </div>
                        </header>
   
)

export default Menu;