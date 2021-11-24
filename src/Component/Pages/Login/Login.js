
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import './Login.css'
const Login = () => {
  const { signInUsingGoogle, SignInWithUserEmailAndPassword } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/';

  const [userInfo, setUserInfo] = useState([]);

  const handleBlur = (e) =>{
    const newUserInfo = { ...userInfo };
    newUserInfo[e.target.name] = e.target.value;
    setUserInfo(newUserInfo);
  }
  
  const handleSignIn = e =>{
    e.preventDefault();
    SignInWithUserEmailAndPassword(userInfo)
    .then (result => {
      history.push(redirect_uri)
      console.log('login info',result);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
  }




  
  const handleGoogleLogin = () =>{
    signInUsingGoogle()
    .then(result => {
      console.log(redirect_uri?.pathname)
      history.push(redirect_uri?.pathname);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
  }

  return (
    <div className="mx-auto login-background d-flex justify-content-center align-items-center">
      <div>
      <Form className="login-form">
      <h1 className="mb-4 text-danger">Please Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handleBlur} name='email' type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control  onBlur={handleBlur} name='password' type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button onClick={handleSignIn} variant="info" type="submit">
          Login
        </Button>
        <br />
        <br />
        <Button onClick={handleGoogleLogin} className="bg-info border-0">Google SignIn</Button>

        <p className="fs-5 text-dark my-2">---------------------------------------New To <span className="text-info">Therapia</span>?---------------------------------------</p>
        <Link to="/registration" className=" fs-4 create-account">Create Your Account</Link>

      </Form>
      </div>
    </div>
  );
};

export default Login;
