import { useState } from 'react';
import './Org.css'

const Org = (props) => {

   /*  const [mostrar, setMostrar] = useState(true);
    
    const manejarClick = () => {
       // console.log('mostrar / ocultar elementos');
        setMostrar(!mostrar);
        //console.log(mostrar);
    } */

    return <section className="orgSection">
        <h3 className='titulo '>Mi Organización</h3>
        <img src="/img/add.png" alt="add"  onClick={ () => props.cambiarMostrar() }/>
    </section>
}

export default Org