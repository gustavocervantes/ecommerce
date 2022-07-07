import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/Navbar';
import Titulo from './components/Titulo/Titulo';
import ComponenteClase from './components/ComponenteClase/ComponenteClase';
import { Form } from 'react-bootstrap';
import Formulario from './components/Formulario/Formulario';
import ComponenteContenedor from './components/container/ComponenteContenedor';
import Menu from './components/Menu/Menu';
import CartWidget from "./components/Img/CartWidget.svg";

function App() {
  // paso datos desde App el componente padre a los hijos
  const titulo = "soy titulo de la app"
  let subTitulo= "soy subtítulo de la app" // estado de app
  const styleApp = {backgroundColor:"blue", fontSize:22}
  const saludo = ()=>{
      alert("Hola Mundo")
  }  
  // llamadas a las apis (fetch) -componente contenedor

  return (
    
    <div className="App">
      {/* <header className="App-header"> */}
        <NavBar/>
        <img src={CartWidget} className="App-logo" alt="logo" />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <h2>Titulo de App</h2> */}
      {/* es lo mismo a llamar la función Titulo() en javascript */}
      {/* estas de abajo son funciones que son propiedades del componente padre App() 
      las funciones pueden recibir parámetros*/}
      {/* {Titulo({titulo:"soy titulo de app", subTitulo:"subtítulo de app"})} 
      si es equivalente a esto, va a ser un objeto */}
      {/* las propiedades me sirven para pasar parámetros de un componente padre a un hijo */}
      {/* <Titulo titulo={titulo} subTitulo={subTitulo}/>
      <Titulo titulo={titulo} subTitulo={subTitulo}/>
      <ComponenteClase/>
      <Formulario saludar={saludo}/> */}
      {/* todo lo anterior se fue al componente contenedor para modularizar */}
      {/* el componente lo inyecto como una prop, pasó a ser una prop de menu */}
      <Menu>
        <ComponenteContenedor saludo="Bienvenido a mi ecommerce"/>
      </Menu>
      {/* en App.js solo vamos a dejar en enrutado */}
      {/* si metiera el ComponenteContenedor dentro del NavBar, el componente dejaría de ser hijo de App()
      pasando a ser hijo de NavBar. React lo inyecta en una prop que se llama por defecto children */}

    </div>
  );
}

export default App;

// componentes: construir todo de manera modular
// al final la aplicación será un conjunto de componentes que trabajan entre sí
// en react existen tipos de componentes y patrones
// las propiedades son la forma que tiene react de pasar parámetros de un componente superior a su children
// es una manera de implementar flujo de datos unidireccional
// componentes de presentación o funcionales: aspecto visual, no tienen dependencia con fuente de datos
// reciben callback por medio de props no tienen estados-se limita a mostrar algo en pantalla
// componentes contenedores:tienen como propósito encapsular a otros componentes, como el div de arriba
// y proporcionarles las propiedades que necesitan. Además se encargan de modificar el estado de la aplicación 
// para que el usuario vea cambios en los datos