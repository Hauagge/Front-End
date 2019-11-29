import React, { useState } from 'react';
import api from '../services/api'


import './login.css'

import logo from '../assets/logo_procon.png'
import fundo from '../assets/tela_fundo.png'



export default function Login({ history }) {
    const [username, setUsername] = useState('');



    async function HandleSubmit(e) {
        e.preventDefault();

        const response = await api.get('/auth', { username })

        const { user } = response.data;
        console.log(user);

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
                      
                            <form onSubmit={HandleSubmit}>
                                <img src={logo} alt="logo" />

                                <input placeholder="Digite seu login"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)} />
                                <button type="submit">Próximo</button>

                            </form>
            
                    </div>
                </div>




                <footer>

                </footer>
            </div>

        </div>
    )

}
