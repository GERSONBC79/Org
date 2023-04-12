import { useState } from 'react'
import './Textfield.css'

const Textfield = (props) => {
    
    const modificador = `${props.placeholder}...`

    const { type = "text" } = props

    const manejarCambio = (e) => {
        props.actulizar(e.target.value);
       
    }

    return (
        <div className={`campo campo-${type}`}>
            <label> {props.titulo.toUpperCase()}</label>
            <input 
                placeholder={modificador}  required={props.required} 
                value={props.valor} onChange={manejarCambio}
                type={type}/>
                
        </div>
    )
}

export default Textfield