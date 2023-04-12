import hexToRgba from "hex-to-rgba";
import Colaborador from "../Colaborador/Colaborador";
import "./Equipo.css"


const Equipo = (props) => {

    const {colorP, colorS, titulo, id} = props.datos;
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props;
   
     
    return  <>
        {colaboradores.length > 0 && <section className="equipo" style={{ backgroundColor: hexToRgba(colorP, 0.6)}}>
            <input type="color" 
            className="input"
            value={colorP} 
            onChange={(ev) => {
                actualizarColor(ev.target.value, id)
            }}/>
            
            <h3 style={{borderBottom: `4px solid ${colorP}`}}> {titulo} </h3>
            <div className="colaboradores">
                {
                    colaboradores.map( (colaborador,index ) => {
                        return <Colaborador key={index} datos = {colaborador} 
                        colorP={colorP}  eliminarColaborador={eliminarColaborador}
                        like ={like}/>
                    })
                }
            </div>
        </section>}
    </>
}

export default Equipo