import React from 'react';
import './calculadora.css';
import { useHistory} from 'react-router-dom';
export default function Calc(props) {
        const history = useHistory();

         function HandleClickIndividual() {
                history.push( '/calculadora/formularioUm');
        }

       function HandleClickPorAto() {
                history.push('/AdmPorAtoDeOficio');
        }
        return (
               <div>    
                        <main>

                                <div className="blocks">
                                        <h2>FÓRMULAS DE CALCULO </h2>
                                        <div className="boxes">
                                                <div className="box">
                                                        <p>Fórmula aplicável a Processos Administrativos instaurado por Ato de Ofício VM = (MM X IF X SE X VA) X (AT) X (AG) X (REI)</p>
                                                        <div className="bordaFooter"></div>
                                                        <button onClick={HandleClickPorAto} >Iniciar</button>
                                                </div>

                                                <div className="bordaLateral"></div>
                                                <div className="box">
                                                        <p>Fórmula aplicável a Processos Administrativos Individual VM = (MM X IF X SE X VA) X (AT) X (AG) X (REI) X (NP)</p>
                                                        <div className="bordaFooter"></div>
                                                        <button type="submit" onClick={HandleClickIndividual}>Iniciar</button>
                                                </div>
                                        </div>

                                </div>
                        </main>

                </div>




        )
}

