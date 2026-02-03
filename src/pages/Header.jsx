import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import logosvg from "../assets/svgs/ebay.svg";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";


const Header = (props) => {
  const navigate = useNavigate();
  return (
    <div>
        <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"><img src={logosvg}/></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" style={{ display: "flex", gap: "1vw" }}> 
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/cards">Cards</Nav.Link>
          <Navbar.Text onClick={()=>{navigate("/login")}}>Login</Navbar.Text>
          <Navbar.Text onClick={()=>{navigate("/register")}}>Register</Navbar.Text>

          <div>
            <PiShoppingCartSimpleDuotone style={{ fontSize: "2rem" }} onClick={()=>{navigate('/cart')}}/>
            <Navbar.Text>{props.count}</Navbar.Text>

          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;