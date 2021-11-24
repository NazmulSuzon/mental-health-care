import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import useAuth from "../../../hooks/useAuth";


const Registration = () => {
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home';
    // const 'signInUsingEmailAndPassword' = useAuth();
    const { CreateEmailAndPassword } = useAuth();
    const [userInfo, setUserInfo] = useState({});

    const handleBlur = (e) =>{
      const newUserInfo = { ...userInfo };
      newUserInfo[e.target.name] = e.target.value;
      setUserInfo(newUserInfo);
    }
    
    const handleRegistration = e =>{
      e.preventDefault();
      CreateEmailAndPassword(userInfo)
      .then(result => {
        history.push(redirect_uri);
        // console.log('hellooo',result.user)
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
      // console.log(userInfo);
      
       
    }

  return (
    <div className="mx-auto border border-danger login-background d-flex justify-content-center align-items-center">
      <div>
        <Form onSubmit={handleRegistration}>
          <h1 className="mb-4 text-info">Please Registration</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleBlur} name='email' type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handleBlur} name='password' type="password" placeholder="Password" required />
          </Form.Group>
          <Button className="bg-info border-0 mb-2" type="submit">
            Registration
          </Button>
          <br />
          <Link to="/login" className="fs-4 create-account">
            Already Have An Account?
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Registration;
