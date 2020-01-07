import React, { useState } from 'react';
import api from '../services/api'
import { useHistory} from 'react-router-dom';


import './login.css'

import logo from '../assets/logo_procon.png'
import fundo from '../assets/tela_fundo.png'



export default function Login(props) {
    const [user, setUser] = useState('');
    const [senha, setSenha] = useState('');
    const [userExist, setuserExist] = useState(false);
    const [isLogged, setisLogged] = useState(false);
    const [isCorrectPassword, setisCorrectPassword] = useState(false);
    const history = useHistory();
    
    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/login', {
            user
        });
        console.log(response)

        if (response.data === "") {
            setuserExist(true)
        } else {
            setuserExist(false)
            setisLogged(true)      
        }

    }

    async function HandleSubmitSenha(e) {
        e.preventDefault();
        const response = await api.post('/login', {
            user,
            senha
        });

        console.log(response)
      
        if (response.data === "") {
            setisCorrectPassword(true);

        

        } else {
            setisCorrectPassword(false);
            history.push("/main");
            console.log(response.status)
        }


        
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

                        <form onSubmit={handleSubmit}>
                            <img src={logo} alt="logo" />


                            {userExist && (
                                <div className="warning">
                                    Usuário não existe
                                        </div>
                            )}

                           


                            {!isLogged &&
                                (<div className='logo'>
                                    <input placeholder="Digite seu login"
                                        value={user}
                                        onChange={e => setUser(e.target.value)} />
                                    <button type="submit">Próximo</button>
                                    <a href='#'>Esqueci meu usuário</a> 

                                </div>
                                )}

                        </form>

                        <form onSubmit={HandleSubmitSenha}>
                        {isCorrectPassword && (
                                <div className="warning">
                                    Senha Incorreta
                                        </div>
                            )}
                            {isLogged &&
                                (<div className='logo'>
                                    <input placeholder="Digite sua senha"
                                        type="password"
                                        value={senha}
                                        onChange={e => setSenha(e.target.value)} />
                                    <button type="submit">Entrar</button>

                                    <a href='#'>Esqueci minha senha</a>

                                </div>
                                )}
                            
                        </form>
                    </div>
                </div>

                <footer >
                                 
                </footer>
            </div>

        </div>
    )

}
