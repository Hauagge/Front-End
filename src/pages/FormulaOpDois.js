import React, { useState, useEffect } from 'react'
import CurrencyInput from 'react-currency-input'
import Modals from '../modules/Modal';
import ModalsAT from '../modules/ModalAT'
import ModalsAG from '../modules/ModalAG'
import { Button } from 'react-bootstrap';



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
    const [lgShowIG, setLgShowIG] = useState();
    const [lgShowAT, setLgShowAT] = useState();
    const [lgShowAG, setLgShowAG] = useState();
    
    useEffect(() => formula(), [state.IG, state.SE, state.VA, state.AT, state.AG, state.REI, state.NP]);
    const [VM, setVM] = useState(state.MM)

    function handleChange(e) {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value


        })


    }
    function formula() {

        let { MM, IG, SE, VA, AT, AG, REI, NP } = state
        setVM(MM * IG * SE * VA * AT * AG * REI * NP)

    } 
    function onToggle(e) {
        const modal = e.target.name;
        console.log(modal)
        if(modal==='modalIG'){
         setLgShowIG(!lgShowIG);
        }

        if(modal==='modalAT'){
            setLgShowAT(!lgShowAT);
           }

        if(modal==='modalAG'){
            setLgShowAG(!lgShowAG);
        }
    }
    return (

        <div className="blocos">
            <h4 >Fórmula aplicável a Processos Administrativos instaurado por Ato de Ofício</h4  >
            <h4 >VM= <CurrencyInput className="inputVM" disabled="disabled" decimalSeparator="," thousandSeparator="." precision="2" prefix="R$" value={VM} /> </h4 >
            <form className="formulario" >

                <div className="coluna">
                    <label>MM</label>
                    <input
                        style={{ backgroundColor: "#fff", borderBottom: "1px solid rgba(0, 0, 0, 0.26)" }}
                        name='MM'
                        type='number'
                        placeholder='650,28'
                        value={state.MM}
                        onChange={handleChange}
                    />
                    <Button className='btnModal'
                        variant='Link'
                        name='modalIG'
                        onClick={e => {
                            onToggle(e);
                        }}
                    >
                        {" "}
                        IG = {state.IG}{" "}
                    </Button>
                    <Modals onClose={e => onToggle(e)} show={lgShowIG} Onchecked={e =>handleChange(e)} />
                    <select
                        name='IG'
                        value={state.IG}
                        onChange={handleChange}>
                        <option value="1" >Grupo I</option>
                        <option value="2" >Grupo II</option>
                        <option value="3" >Grupo III</option>
                    </select>

                    <label>Extensão do Dano</label>
                    <select
                        name='infracao'
                        value={state.infracao}
                        onChange={handleChange}>
                        <option value=""  >Selecione</option>
                        <option value="homogeneo"  >Infração de carater individual ou individual homogeneo</option>
                        <option value="coletivo"   >Infração de Carater coletivo</option>
                        <option value="difuso" >Infração de Carater Difuso</option>
                    </select>

                    {state.infracao === 'homogeneo' &&
                        <>
                            <label>SE</label>
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
                            </select> </>}

                    {state.infracao === 'coletivo' &&
                        <>
                            <label>SE</label>
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
                            </select></>}

                    {state.infracao === 'difuso' &&
                        <>
                            <label>SE</label>
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
                            </select></>}

                    <label>VA</label>
                    <select
                        name='VA'
                        value={state.VA}
                        onChange={handleChange}
                    >
                        <option value="1"   >Não Quantificável                </option>
                        <option value="1.2" >Dano de 0,01 até 100,00         </option>
                        <option value="1.3" >Dano de 100,01 até 1.000,00     </option>
                        <option value="1.4" >Dano de 1.000,01 até 10.000,00  </option>
                        <option value="1.5" >Dano de 10.000,01 até 50.000,00  </option>
                        <option value="1.6" >Dano de 50.000,01 até 100.000,00</option>
                        <option value="1.7" >Dano de 100.000,01 até 300.000,00</option>
                        <option value="1.8" >Dano de 300.000,01 até 700.000,00</option>
                        <option value="1.9" >Acima de 700.000,00              </option>

                    </select>
                </div>
                <div className="coluna">
                <Button className='btnModal'
                        name='modalAT'
                        variant='Link'
                        onClick={e => {
                            onToggle(e);
                        }}
                    >
                        {" "}
                        AT = {state.AT}{" "}
                    </Button>
                    <ModalsAT onClose={(e) => onToggle(e)} show={lgShowAT} Onchecked={e =>handleChange(e)} />
                    <select
                        name='AT'
                        value={state.AT}
                        onChange={handleChange} >
                        <option value="1"    >Nenhum  </option>
                        <option value="0.9" >1        </option>
                        <option value="0.8" >2        </option>
                        <option value="0.7" >3        </option>
                    </select>

                    <Button className='btnModal'
                        name='modalAG'
                        variant='Link'
                        onClick={e => {
                            onToggle(e);
                        }}
                    >
                        {" "}
                        AG = {state.AG}{" "}
                    </Button>
                    <ModalsAG onClose={(e) => onToggle(e)} show={lgShowAG} Onchecked={e =>handleChange(e)} />

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



                </div>
            </form>

            <div className="botao">
                <button>Salvar</button>
                <button>Gerar Formulario</button>
            </div>


        </div >)
}