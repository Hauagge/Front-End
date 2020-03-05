import React, {useState} from 'react'
import { Modal, Button } from 'react-bootstrap';
import Checkbox from './Checkbox'
import checkboxes from './Checkboxes'


export default function Module (props) {
    const [checkedItems, setcheckedItems] = useState(new Map());
    const [searchKey,setSearchKey]= useState("")

    function onClose(e) {
        
        props.onClose(e)
        
    }

    function onCheck(event){
        console.log(event.target)
        props.Onchecked(event) 
    }

    function handleChange(e) {
        const item = e.target.getAttribute('label');        //algumas props não estão disponivel para determinado input, para input do tipo checkbox a props label não está disponível por isso usa-se o .getAttribute para acessar a props label 
        const isChecked = e.target.checked;
        setcheckedItems(checkedItems.set(item, isChecked));
        onCheck(e)       
    }

    function Check() {
        let Result = checkboxes.filter(item =>{
            return item.label
            .toLowerCase()
            .includes(searchKey.toLowerCase());
        });

        return(
        <div>
             <h6>GRUPO I – INFRAÇÕES CONSIDERADAS  GRAVES</h6>
        {Result.map(item => (
            <div key={item.key}>       
            {item.value===1 && 
            <>
           
                <label >
                <Checkbox
                    name='IG'
                    value={item.value}
                    label={item.label}
                    checked={checkedItems.get(item)}
                    onChange={e => handleChange(e)}
                    checkedItems={checkedItems}
                />
            </label>
            </>
            }
        }
            
            <h6>GRUPO II – INFRAÇÕES CONSIDERADAS MUITO GRAVES</h6>
            {Result.map(item => (
            <div key={item.key}> 
            {item.value===2 && 
                <>
                  
                <label>
                <Checkbox
                     name='IG'
                    value={item.value}
                    label={item.label}
                    checked={checkedItems.get(item)}
                    onChange={e => handleChange(e)}
                    checkedItems={checkedItems}
                />
            </label>
            </>
            
        } </div>
        )
        )}
           
            
            
            {item.value===3 && 
                <>
               <h6>GRUPO III – INFRAÇÕES CONSIDERADAS GRAVÍSSIMAS</h6>
                <label>
                <Checkbox
                    name='IG'
                    value={item.value}
                    label={item.label}
                    checked={checkedItems.get(item)}
                    onChange={e => handleChange(e)}
                    checkedItems={checkedItems}
                />
            </label>
            </>
            }</div>))}</div>);
    }
    function Search(e){
        setSearchKey( e.target.value )
    }
   
    if (!props.show) {
        return null;
    }

    return(
        <div>
        <Modal
               
                backdrop='static'
                size="lg"
                show={props.show}
                onHide={e => {onClose(e)}}
                aria-labelledby="example-modal-sizes-title-lg"
            >
              
                <Modal.Header >
                
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Indice de Gravidade
          </Modal.Title>
          <Button
          
          className='close'
          name='modalIG' 
          onClick= {e => {onClose(e)}}>x</Button>


                </Modal.Header >
                <input
                        type="text"
                        className="input"
                        defaultValue={searchKey}
                        placeholder="Search..."
                        onChange={e => {Search(e)}}
                    />
                <Modal.Body>
                    
                    <div className="form-check" id="search"  >
                     <p><strong>Classificação das infrações ao Código de Defesa do Consumidor</strong></p>   
                    <Check/>
                    <p> Curitiba, 23 de novembro de 2017.</p>
                    <p> CLAUDIA FRANCISCA SILVANO</p>
                    <p> Diretora do Departamento Estadual de Proteção e Defesa do Consumidor.</p>
                       
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button name='modalIG' onClick= {e => {onClose(e)}}>Close</Button>
                </Modal.Footer>
            </Modal>
            </div>
    )

}

