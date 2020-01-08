import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



import './FormularioUm.css'

export default function Calculo() {

    const [state, setState] = useState({
        infracao: "",
        MM: 650.28,
        IG: 1,
        SE: 1,
        VA: 1,
        AT: 1,
        AG: 1,
        REI: 1,
        NP: 1,
    })

    const[VM, setVM] = useState(state.MM)
    function handleChange(e) {

        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value

        })
        if(e.target.name !== 'infracao')
        setVM(VM * value)
        
    }

   

    return (

            <div className="blocos">
                <h2>Fórmula aplicável a Processos Administrativos Individual</h2>
                <h2>VM=R${VM.   toFixed(2)}</h2>
                <form className="formulario" >

                    <div className="coluna">
                        <label>MM</label>
                        <input
                            name='MM'
                            type='number'
                            placeholder='650,28'
                            value={state.MM}
                            onChange={handleChange} />
                        <label>IG</label>
                        <select
                            name='IG'
                            value={state.IG}
                            onChange={handleChange}>
                            <option value=""  >Selecione</option>
                            <option value="1" >Grupo I</option>
                            <option value="2" >Grupo II</option>
                            <option value="3" >Grupo III</option>
                        </select>
                        <label>Infração</label>
                        <select
                            name='infracao'
                            value={state.infracao}
                            onChange={handleChange}>
                            <option value=""  >Selecione</option>
                            <option value="homogeneo"  >Infração de carater individual ou individual homogeneo</option>
                            <option value="coletivo"   >Infração de Carater coletivo</option>
                            <option value="difuso" >Infração de Carater Difuso</option>
                        </select>
                        <label>SE</label>
                        {state.infracao === 'homogeneo' &&

                            <select
                                name='SE'
                                value={state.SE}
                                onChange={handleChange}>
                                <option value="1"  >Selecione</option>
                                <option value="1.5" >Microempresa Individual</option>
                                <option value="2"   >Microempresa</option>
                                <option value="2.5" >Empresa de pequeno porte</option>
                                <option value="3"   >Media Empresa</option>
                                <option value="3.5" >Grande Empresa</option>
                            </select>}

                        {state.infracao === 'coletivo' &&
                            <select
                                name='SE'
                                value={state.SE}
                                onChange={handleChange}>
                                <option value="1"  >Selecione</option>
                                <option value="20" >Microempresa Individual</option>
                                <option value="25"   >Microempresa</option>
                                <option value="30" >Empresa de pequeno porte</option>
                                <option value="35"   >Media Empresa</option>
                                <option value="40" >Grande Empresa</option>
                            </select>}

                        {state.infracao === 'difuso' &&
                            <select
                                name='SE'
                                value={state.SE}
                                onChange={handleChange}>
                                <option value="1"  >Selecione</option>
                                <option value="30" >Microempresa Individual</option>
                                <option value="35"   >Microempresa</option>
                                <option value="40" >Empresa de pequeno porte</option>
                                <option value="45"   >Media Empresa</option>
                                <option value="50" >Grande Empresa</option>
                            </select>}

                        <label>VA</label>
                        <select
                            name='VA'
                            value={state.VA}
                            onChange={handleChange}
                        >
                            <option value="1" >Selecione </option>
                            <option value="1.2" >Dano de 0,01 até 100,00         </option>
                            <option value="1.3" >Dano de 100,01 até 1.000,00     </option>
                            <option value="1.4" >Dano de 1.000,01 até 10.000,00  </option>
                            <option value="1.5" >Dano de 10.000,01 até 50.000,00  </option>
                            <option value="1.6" >Dano de 50.000,01 até 100.000,00</option>
                            <option value="1.7" >Dano de 100.000,01 até 300.000,00</option>
                            <option value="1.8" >Dano de 300.000,01 até 700.000,00</option>
                            <option value="1.9" >Acima de 700.000,00              </option>
                            <option value="1"   >Não Quantificável                </option>
                        </select>
                    </div>
                    <div className="coluna">
                        <label>AT</label>
                        <select
                            name='AT'
                            value={state.AT}
                            onChange={handleChange} >
                            <option value="1"    >Nenhum  </option>
                            <option value="0.9" >1        </option>
                            <option value="0.8" >2        </option>
                            <option value="0.7" >3        </option>
                        </select>

                        <label>AG</label>

                        <select
                            name='AG'
                            value={state.AG}
                            onChange={handleChange} >
                            <option value="1" >Nenhum                          </option>
                            <option value="1.1" >1 INCISO  - (Exceto inciso I)  </option>
                            <option value="1.2" >2 INCISOS - (Exceto inciso I)  </option>
                            <option value="1.3" >3 INCISOS - (Exceto inciso I)  </option>
                            <option value="1.4" >4 INCISOS - (Exceto inciso I)  </option>
                            <option value="1.5" >5 INCISOS - (Exceto inciso I)  </option>
                            <option value="1.6" >6 INCISOS - (Exceto inciso I)  </option>
                            <option value="1.7" >7 INCISOS - (Exceto inciso I)  </option>
                            <option value="1.8" >8 INCISOS - (Exceto inciso I)  </option>
                        </select>
                        <label>REI</label>
                        <select
                            name='REI'
                            value={state.REI}
                            onChange={handleChange}>
                            <option value="1"   >Não Reincidente  </option>
                            <option value="1.1" >Número de Reclamações 1-10  </option>
                            <option value="1.2" >Número de Reclamações 11-21  </option>
                            <option value="1.3" >Número de Reclamações 22-32  </option>
                            <option value="1.4" >Número de Reclamações 33-43  </option>
                            <option value="1.5" >Número de Reclamações 44-54  </option>
                            <option value="1.6" >Número de Reclamações 55-65  </option>
                            <option value="1.7" >Número de Reclamações 66-76  </option>
                            <option value="1.8" >Número de Reclamações 77-87  </option>
                            <option value="1.9" >Acima de 88                  </option>
                        </select>

                        <label>NP</label>
                        <input
                            name='NP'
                            type='number'
                            placeholder='Número de processos reunidos no mesmo procedimento'
                            value={state.NP}
                            onChange={handleChange} />

                    </div>
                </form>

                <div className="botao">
                    <button>Salvar</button>
                    <button>Gerar Formulario</button>
                </div>


            </div >)
    }