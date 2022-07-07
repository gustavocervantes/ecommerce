// función que crea componente
// en lugar del props entre paréntesis, se podría poner({titulo, subTitulo}) y hacer ahí directamente la
// desestructuración=
// const Titulo = ({titulo, subTitulo}) =>{
const Titulo = (props) =>{
    //desestructuración
    const {titulo, subTitulo} = props
    // cuando tengo un retorno el contenido tiene que estar en la misma línea sino agregar paréntesis
    return (
        // <> fragment es una propiedad de react que no crea un nodo como el div</>
    <>
        {/* voy anidando componentes */}
        {/* al hacer la desestructuración arriba, no es necesario poner props.titulo */}
        <h2>{titulo}</h2>
        <h5>{subTitulo}</h5>
    </>
    )
}

export default Titulo
