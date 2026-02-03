import React,{ useState,useEffect } from 'react';
import Header from './Header';
import About from './About';
import Cards from './Cards';
const Home = () => {

    let [api,setApi] = useState([]);
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products`).then((response) => response.json()).then(data=> setApi(data))
    });

    let [cart,setCart] = useState(parseInt(sessionStorage.getItem("cart")) || 0);
    let [totalPrice,setTotalPrice] = useState(parseInt(sessionStorage.getItem("totalPrice")) || 0);

    useEffect(() => {
        sessionStorage.setItem("cart", cart);
        sessionStorage.setItem("totalPrice", totalPrice);
    }, [cart]);
    
    return (
        <div id='home'>

            <Header count={cart}/>
            <About/>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                {api.map((item) => {
                return (
                    <Cards
                    setCart={setCart}
                    key={item.id}
                    id={item.id}
                    imgSrc={item.image}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    />
                );
                })}
            </div>
        </div>
    );
    }

export default Home;