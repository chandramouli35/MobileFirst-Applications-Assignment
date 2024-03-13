import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormText from "react-bootstrap/FormText";
import { useNavigate } from "react-router-dom";
import Typewriter from 'typewriter-effect';

import './Login.css'

function Login({ setLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const[show,setShow]=useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError(true);
      return false;
    }
    if (username === "Chandramouli" && password === "chandra@2001") {
      setError(false);
      setLoggedIn(true);
      navigate("/");
    } else {
      setError(true);
    }
  };

  return (
    <Container className="main d-flex justify-content-center align-items-center ">
      <Row>
        <Col>
        <div className="typewriter-text">
        <Typewriter 
          options={{
            autoStart:true,
            loop:true,
            delay:50,
            strings:["Login Here"]
          }}
         />
          </div>
          <Form onSubmit={handleSubmit} className="mt-2">
            <div className="mb-3 d-flex">
              <Form.Label className="mr-3 text-white">User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Chandramouli"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {error && !username && (
                <FormText className="text-danger">
                  Enter valid user name
                </FormText>
              )}
            </div>

            <div className="mb-3 d-flex justify-content-space-between  w-100">
              <Form.Label className="mr-3 text-white">Enter Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="chandra@2001"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && !password && (
                <FormText className="text-danger">
                  Enter valid password
                </FormText>
              )}
            </div>

            <Button variant="primary" type="submit" className="w-50" >
              ➡️Login⬅️
            </Button>
            
          </Form>
          <div>
          <Button type="button" variant="primary" className="crediantialsBtn" onClick={()=>setShow(!show)}>⬇️Click To See Credentials⬇️</Button>
            {show && <div className="card mt-4 p-4 d-flex flex-column justify-content-start">
            <h3> ⬇️Please Use Below Credentials⬇️ </h3>
            <p>UserName : Chandramouli</p>
            <p>Password : chandra@2001</p>
          </div>}
         
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
