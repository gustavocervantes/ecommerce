// rafce y me crea el componente directo sin escribir todo
import Titulo from "../Titulo/Titulo"
import Formulario from "../Formulario/Formulario"
import ComponenteClase from "../ComponenteClase/ComponenteClase"
// hago la desestructuración directo en el paréntesis de la función, sin necesidad de usar props
const ComponenteContenedor = ({saludo}) => {
    const titulo = "soy titulo de la app"
    let subTitulo= "soy subtítulo de la app" // estado de app
    // son los componentes donde se van a llamar a las APIs externas 
    // const producto = fetch(url...)   
  return (
    <div>
        {/* <Titulo titulo={titulo} subTitulo={subTitulo}/>
        <Titulo titulo={titulo} subTitulo={subTitulo}/>
        <ComponenteClase/>
        <Formulario saludar={saludo}/> */}
        {saludo}
    </div>
  )
}

export default ComponenteContenedor

// a la carpeta que llamamos container se le suele decir page o view, suele haber muchos componentes contenedores
// dependiendo como vas navegando por las páginas