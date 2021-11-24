import React from "react";
import { Carousel, Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import icon from "../../../images/icon.jpeg";

import "./Header.css";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const {user, logOut} = useAuth();

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <div className="icon d-flex">
            <img src={icon} alt="" />
            <h5 className="text-info fw-bold ps-2">Therapia</h5>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav>
            <Navbar.Text>
              <div className="nav-component">
                <Link to="/home">Home</Link>
                <Link to="/service">Service</Link>
                <Link to="/disorder">Disorder</Link>
                <Link to="/therapist">Therapist</Link>
                {user?.email ?
                <Button onClick={logOut} variant="light">Logout</Button>:
                  <Link to="/login">Login</Link>
                }
               {(!user?.displayName && !user?.email) && <Link to="/registration">Registration</Link>}
                <p className="ms-3">Signed in as: <span className="text-info">{user?.displayName}</span></p>
              </div>
            </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  );
};

export default Header;
