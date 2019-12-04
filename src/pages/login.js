import React, { useState } from 'react';
import api from '../services/api'


import './login.css'

import logo from '../assets/logo_procon.png'
import fundo from '../assets/tela_fundo.png'



export default function Login({ history }) {
    const [user, setUser] = useState('');
    const [userExist,setuserExist] = useState('')
 

    async function HandleSubmit(e) {
        e.preventDefault();
        
        const response = await api.post('/login', { 
            user 
        });
        
        if(!await response.json === 1)
            setuserExist(true);

        
        }

    function Warning(e){
        console.log(e.warn)
        if (!e.warn) {
            return null;
          }
        
          return (
            <div className="warning">
              Usuário não existe
            </div>
          );
        }
    
    return (
        <div>
            <div>
                <div className='container'>
                    <div className='grid-container'>
                        <div style={{
                            background: 'url(' + fundo + ')',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '100% auto',
                            
                        }}>
                            <div style={{
                                backgroundColor: 'rgba(34, 139, 34, 0.281)',
                                width: '100%',
                                height: '100vh',
                            }}>
                            </div>
                        </div>

                    </div>

                    <div className='logo'>
                      
                            <form onSubmit={HandleSubmit} >
                                <img src={logo} alt="logo" width='30%' />
                                <div className='formInput'>
                                    <input placeholder="Digite seu login"
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                        className='textInputSubmit' />
                                    <button className='buttonSubmit' type="submit">Próximo</button>
                                    <a href='#'>Esqueci minha senha</a>
                                </div>
                            </form>
            
                    </div>
                </div>




                <footer>

                </footer>
            </div>

        </div>
    )

}
