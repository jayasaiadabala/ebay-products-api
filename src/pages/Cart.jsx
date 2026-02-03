import React,{useState,useEffect} from "react"
import Header from "./Header";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cart=()=>{

    let [api,setApi] = useState([]);
        useEffect(()=>{
            fetch(`https://fakestoreapi.com/products`).then((response) => response.json()).then(data=> setApi(data))
        });

    let [cart,setCart] = useState(parseInt(sessionStorage.getItem("cart")) || 0);

    useEffect(() => {
        sessionStorage.setItem("cart", cart);
    }, [cart]);

   
    return(

        <div>
            <Header count={cart}/>
            <div style={{width:'100%',height:'5vh',margin:'3% 0',textAlign:'center'}}><h1>Total: {parseInt(sessionStorage.getItem('totalPrice')) || 0}</h1></div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                {api.map((product) => {
                    if (sessionStorage.getItem(product.id)>0) {
                        return (
                            <Card key={product.id} style={{ width: '18rem' }}>
                                {/* <Card.Img variant="top" src={product.image} /> */}
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    {/* <Card.Text>{product.description}</Card.Text> */}
                                    <Card.Text><b>₹{product.price}</b></Card.Text>
                                    <Button variant="primary" 
                                        onClick={()=>{sessionStorage.setItem(product.id, 
                                        parseInt(sessionStorage.getItem(product.id))-1),setCart((cart)=>cart-1)}} 
                                        disabled={parseInt(sessionStorage.getItem(product.id))===0}>-</Button>
                                    
                                    <Button variant="" >{sessionStorage.getItem(product.id)}</Button>

                                    <Button variant="primary" onClick={()=>{sessionStorage.setItem(product.id,
                                         parseInt(sessionStorage.getItem(product.id))+1),setCart((cart)=>cart+1)}}>+</Button>

                                    <Button variant="primary" >{(product.price*(sessionStorage.getItem(product.id))).toFixed(2)}</Button>
                                
                                </Card.Body>
                            </Card>
                        );
                    }
                
                })}
            </div>
        </div>
    )
}

export default Cart;