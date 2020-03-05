import React, {useState} from 'react'
import { Modal, Button } from 'react-bootstrap';
import Checkbox from './Checkbox'
import checkboxes from './CheckboxesAT'


export default function Module (props) {
    const [checkedItems, setcheckedItems] = useState(new Map());
    const [searchKey,setSearchKey]= useState("")

    function onClose(e) {
        
        props.onClose(e)
        
    }

    function onCheck(event){
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

        return Result.map(item => (
            <div key={item.key}>  
                <Checkbox
                    name='AT'
                    value={item.value}
                    label={item.label}
                    checked={checkedItems.get(item)}
                    onChange={e => handleChange(e)}
                    checkedItems={checkedItems}
                />     
            </div>));
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
                name={props.name}
                size="lg"
                show={props.show}
                onHide={e => {onClose(e)}}
                aria-labelledby="example-modal-sizes-title-lg"
            >
              
                <Modal.Header className='ModalHeader'>
                
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Atenuantes   
          </Modal.Title>
          <Button
          className='close'
          name='modalAT' 
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
                <p><strong>Decreto nº 2.181 de 20 de Março de 1997</strong><br/> Dispõe sobre a organização do Sistema Nacional de Defesa do Consumidor -
                     SNDC, estabelece as normas gerais de aplicação das sanções administrativas
                      previstas na Lei nº 8.078, de 11 de setembro de 1990, revoga o Decreto Nº 861,
                       de 9 julho de 1993, e dá outras providências.<br/>
                        <strong>Art. 25.</strong> Consideram-se circunstâncias atenuantes:</p>    
                    <Check/>
                </Modal.Body>
                <Modal.Footer>
                    <Button name='modalAT' onClick= {e => {onClose(e)}}>Close</Button>
                </Modal.Footer>
            </Modal>
            </div>
    )

}

