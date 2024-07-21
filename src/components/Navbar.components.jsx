import React from "react";
import { useFirebase } from "../context/firebase.context";
import NavLink from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Button } from "react-bootstrap";

import brandImage from "../Assests/flight.png";


const MyNavbar = () => {

    const firebase = useFirebase();

    return (

        <Navbar style={{ backgroundColor: '#112D58' }} data-bs-theme="dark" sticky="top" collapseOnSelect expand="md">
            <Container className="d-flex justify-content-between">
                <Navbar.Brand href="/"><img
                    src={brandImage}
                    height="30"
                    className="d-inline-block align-top my-100px"
                    alt="safarnama"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto ">
                        <Nav.Link href="/destination" style={{fontWeight: "bold"}}>Destination</Nav.Link>
                        <Nav.Link href="/gallery" style={{fontWeight: "bold"}}>Gallery</Nav.Link>
                        <Nav.Link href="/blog" style={{fontWeight: "bold"}}>Write</Nav.Link>
                    </Nav>

                    <Nav.Link href="/login">
                    {firebase.isLoggedIn ? 
                        <Button variant="outline-light" style={{ height: "38px", fontWeight: "bold", borderRadius: "20px" }}> Logout </Button> : <Button variant="outline-light" style={{ height: "38px", fontWeight: "bold", borderRadius: "20px" }}> Login </Button>
                    }</Nav.Link>

                </Navbar.Collapse>
            </Container>
        </Navbar >


    )

}

export default MyNavbar;