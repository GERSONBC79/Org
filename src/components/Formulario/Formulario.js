import './Formulario.css'
import Textfield from '../campo texto/Index'
import ListaOpciones from '../Lista opciones/Index'
import Boton from '../boton/Index'
import { useState } from 'react'
const Formulario = (props) =>{
    
    const [nombre, setNombre] = useState("");
    const [Puesto, setPuesto] = useState("");
    const [Foto, setFoto] = useState("");
    const [Equipo, setEquipo] = useState("");

    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    
    const manejarEnvio = (ev) => {
        ev.preventDefault();
        let datosEnviar = {
            nombre,
            Puesto,
            Foto,
            Equipo
            
        }
       props.registrarColaborador(datosEnviar);
    }

    const manejarEnvioEquipo = (ev) => {
        ev.preventDefault();
        props.crearEquipo({titulo, colorP: color});
    }
    return (
        <section className='form'>
             <form onSubmit={manejarEnvio}>
                <h2>
                    Rellena el formulario para creal el colaborador 
                </h2>
                <Textfield titulo='Nombre'  placeholder='Ingresa Nombre' required valor={nombre} actulizar={setNombre}/>
                <Textfield titulo='Puesto' placeholder='Ingresa Puesto' required valor={Puesto} actulizar={setPuesto}/>
                <Textfield titulo='Foto' placeholder='Ingresa Foto ' required valor={Foto} actulizar={setFoto}/>
                <ListaOpciones valor={Equipo} actulizar={setEquipo} equipos={props.equipos}/>
                <Boton texto='Crear' />
             </form>
             <form onSubmit={manejarEnvioEquipo}>
                <h2>
                    Rellena el formulario para creal el equipo 
                </h2>
                <Textfield titulo='Titulo'  placeholder='Ingresa título' required valor={titulo} actulizar={setTitulo}/>
                <Textfield titulo='Color' placeholder='Ingresa el color en hexadecimal' required valor={color} actulizar={setColor} type='color'/>
                <Boton texto='Registrar' />
            </form>
        </section>
    )
}

export default Formulario