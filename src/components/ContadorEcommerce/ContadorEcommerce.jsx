import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import{useState, useEffect} from "react";





function CardContador() {
    const [contador, actualizarContador] = useState(1)
    

    const aumentar =()=>{
    actualizarContador(contador+1)
    }

    const decrementar=()=>{
        actualizarContador(contador-1)
    }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Producto1</Card.Title>
        <Card.Text>
            {contador}
        </Card.Text>
        <Button onClick={aumentar}>+</Button>
        <Button onClick={decrementar}>-</Button>
      </Card.Body>
    </Card>
  );
}

export default CardContador;