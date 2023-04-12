import "./Colaborador.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"

const Colaborador= (props) => {
    const {nombre, Puesto, Foto, Equipo, id, fav} = props.datos;
    const {colorP, eliminarColaborador, like } = props;


    return <div className="colaborador" >
       <AiFillCloseCircle className="eliminar" onClick={() => {eliminarColaborador(id)} } /> 
        <div className="encabezado" style={{backgroundColor: colorP }}>
            <img  src={Foto} alt={nombre}/>
        </div>
        <div className='info'>
            <h4>{nombre}</h4>
            <h5>{Puesto}</h5>
            {fav ? <AiFillHeart color='red' onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id) }/>}
            
            
        </div>
    </div>
}

export default Colaborador