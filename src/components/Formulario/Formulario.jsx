import Titulo from "../Titulo/Titulo"

const Formulario = ({saludar})=>{
    const titulo = "soy titulo del input"
    let subTitulo= "soy subtítulo del input"
    return(
      <>
          <Titulo titulo={titulo} subTitulo={subTitulo}/>
          <input type="text" placeholder='Nombre'/>
          {/* evento onClick */}
          <button onClick={saludar}>Click</button>
      </>
    )
}

export default Formulario