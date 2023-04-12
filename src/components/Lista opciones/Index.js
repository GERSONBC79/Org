import './ListaOpciones.css'

const ListaOpciones = (props) => {

    
    const manejarCambio = (e) => {
        props.actulizar(e.target.value);
        console.log(e.target.value);
    }

    return<div className='lista-opciones'>
        <label >Equipos </label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Sellecionar equipo</option>
            { props.equipos.map( (equipo, index) => {
                return <option key={index}> {equipo} </option>
            })}
        </select>
    </div>
}

export default ListaOpciones