import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === localStorage.getItem("email") && password === localStorage.getItem("password")) {
      setResponse("Login Successful");
      
    } else {
      setResponse("Login Failed");
    }
    
  }
  return (
    <div style={{ height: "100vh",display: "flex", justifyContent: "center",flexDirection: "column", alignContent: "center", margin: "auto",alignItems: "center" }} className='bg-primary-subtle rounded'>
      <Form style={{ width: "50vw" , margin: "auto" }} className='bg-info p-3 rounded'>
        <h1 style={{marginLeft: "40%"}}>Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
        </Button>
        <h1>{response}</h1>
        </Form>
    </div>
  );
}

export default Login;