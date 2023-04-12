import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario/Formulario.js';
import Header from './components/Header/Header';
import Org from './components/Org/Index';
import Equipo from './components/equipo/Equipo';
import Footer from './components/Footer/Footer';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [mostrarForm, setMostrarForm] = useState(false);
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuidv4(),
      Equipo:"Front End",
      Foto:"https://github.com/GERSONBC79.png",
      Puesto:"Desarrollador",
      nombre:"Gerson Baron",
      fav: true
    },
    {
      id: uuidv4(),
      Equipo:"Data Science",
      Foto:"https://github.com/GERSONBC79.png",
      Puesto:"Desarrollador",
      nombre:"Gerson Baron",
      fav: false
    },
    {
      id: uuidv4(),
      Equipo:"Devops",
      Foto:"https://github.com/GERSONBC79.png",
      Puesto:"Desarrollador",
      nombre:"Gerson Baron",
      fav: false
    },
    {
      id: uuidv4(),
      Equipo:"Móvil",
      Foto:"https://github.com/GERSONBC79.png",
      Puesto:"Desarrollador",
      nombre:"Gerson Baron",
      fav: false
    },
    {
      id: uuidv4(),
      Equipo:"Front End",
      Foto:"https://github.com/GERSONBC79.png",
      Puesto:"Desarrollador",
      nombre:"Juan alfafoS",
      fav: true
    },
    {
      id: uuidv4(),
      Equipo:"Front End",
      Foto:"https://github.com/GERSONBC79.png",
      Puesto:"Desarrollador",
      nombre:"pepe lopez",
      fav: false
    },
    ]);

    
    const [equipos, setEquipos] = useState([

      {
        id: uuidv4(),
        titulo: "Programación",
        colorP: "#57c278",
        colorS: "#d9f7e9"
      },
      {
        id: uuidv4(),
        titulo: "Front End",
        colorP: "#82cffa",
        colorS: "#e8f8ff"
      },
      {
        id: uuidv4(),
        titulo: "Data Science",
        colorP: "#a6d157",
        colorS: "#f0f8e2"
      },
      {
        id: uuidv4(),
        titulo: "Devops",
        colorP: "#e06b69",
        colorS: "#fde7e8"
      },
      {
        id: uuidv4(),
        titulo: "UX y Diseño",
        colorP: "#d86ebf",
        colorS: "#fae9f5"
      },
      {
        id: uuidv4(),
        titulo: "Móvil",
        colorP: "#ffba05",
        colorS: "#fff5d9"
      },
      {
        id: uuidv4(),
        titulo: "Innovación y Gestión",
        colorP: "#ff8a29",
        colorS: "#ffeedf",
      },
  
  ])
  
  const cambiarMostrar = () => {
    setMostrarForm(!mostrarForm);
  }

  const registrarColaborador = (colaborador) => {
      console.log('nuevo colab', colaborador);
      setColaboradores([...colaboradores, colaborador]);
  }

  const actualizarColor = (color, id ) => {
    console.log('act', color, id);
    const equiposActualizados = equipos.map((equipo) => {
        if(equipo.id === id){
          equipo.colorP = color
        }
        return equipo
    })
    setEquipos(equiposActualizados);
  }

  const eliminarColaborador = (id) => {
    console.log('eliminar colab');
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id )
    setColaboradores(nuevosColaboradores);
  }

  const crearEquipo = (nuevoEquipo) => {
      setEquipos([...equipos, {...nuevoEquipo, id: uuidv4() }])
  }

  const like = (id) => {
      const nuevoLike = colaboradores.map((c) => {
          if(c.id === id){
            c.fav = !c.fav;
          }
          return c
      })
      setColaboradores(nuevoLike)
  }
  return (
    <div >
      <Header />
      {mostrarForm && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)} 
        registrarColaborador={registrarColaborador} 
        crearEquipo={crearEquipo}/> }
      
      
      
      <Org cambiarMostrar={cambiarMostrar}/>
      {   
        equipos.map( (equipo) => {
          return <Equipo key={equipo.titulo} datos={equipo} 
            colaboradores={colaboradores.filter(
              colaborador => colaborador.Equipo === equipo.titulo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            like={like}/>
        })
      }

      <Footer />
    </div>
  );
}

export default App;
