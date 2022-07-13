// import "./Menu.css"

function Menu({children}) {
  return (
    <>
        {/* <nav>
            <p>Hola</p>
            <p>Hola</p>
            <p>Hola</p>
        </nav> */}
        {children}
    </>
  )
}

export default Menu

// -----------------------------------------
// BOOTSTRAP
// instalación de bootstrap
// npm run dev (vite)- npm start (create-react-app)
// se puede instalar bootstrap o react-bootstrap que permite instalar componentes
// react-bootstrap.github.io
// npm-install react-bootstrap bootstrap
// se verifica la instalación en el package.json
//import 'bootstrap/dist/css/bootstrap.min.css'; - lo importamos en App.jsx
// import "App.css"
// creo el componente rafce con el snippet, puedo pegar el bootrstrap tradicional en html
// cambiamos class por className y ver que todas las etiquetas tienen que tener un cierre
// ej hr, input..en react todo tiene que tener un cierre
// poner el componente ej <NavBar/> en App.jsx e importarlo
// si uso esta opción de bootstrap normal tengo que importar en el index.html los
// scripts de bootstrap
// la otra opción:react-bootstrap devuelve los componentes con los estilos
// copio y pego en el código-son componentes ya hechos por bootstrap
// hay que importar los componentes:
// import{Navbar, Container, Nav, NavDropdown} from "react-bootstrap"
// import Navbar from 'react-bootstrap/Navbar'; - recomienda traerlo así porque
// en el primero importas todo, en el último solo la carpeta de NavBar
// en este modelo funciona js sin hacer nada más
// el index.html con create-react-app está en la carpeta "public"