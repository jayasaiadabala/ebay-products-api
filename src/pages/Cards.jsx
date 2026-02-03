import React,{useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const  Cards = (props) => {

    const [count,setCount] = useState(parseInt(sessionStorage.getItem(props.id)) || 0)

    const handleIncrement = () => {
        setCount(count + 1);
        props.setCart((cart)=>cart+1);
        sessionStorage.setItem(props.id, count+1); //JSON.stringify(props)
    };
    const handleDecrement = () => {
        setCount(count - 1);
        props.setCart((cart)=>cart-1);
        sessionStorage.setItem(props.id, count-1);
        
    };
    
    return (
        <div id='cards' style={{ display: "flex", justifyContent: "center", margin: "2vw" }}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imgSrc} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text><b>₹{props.price}</b></Card.Text>

        <Button variant="primary" onClick={handleDecrement} disabled={count===0}>-</Button>

        <Button variant="" >{sessionStorage.getItem(props.id) ? sessionStorage.getItem(props.id) : 0}</Button>

        <Button variant="primary" onClick={handleIncrement}>+</Button>

        <Button variant="primary" >{(props.price*count).toFixed(2)}</Button>

        
        {/* <Button variant="primary" onClick={()=>{props.setCart((cart)=>cart+1),sessionStorage.setItem(props.title,props.title)}}>Add to cart</Button> */}
       
      </Card.Body>
    </Card>
        </div>
    );
}


export default Cards;