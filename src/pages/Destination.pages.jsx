import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import searchIcon from "../Assests/search.png";
// import Cards from '../components/Card.components'
import DestinationSection from '../components/Destination.componenets';
// import SkeletonLoader from '../components/SkeletonLoader.components'

const DestinationPage = () => {

    const bookImage = "https://firebasestorage.googleapis.com/v0/b/safarnama-c075f.appspot.com/o/Assets%2F79011dcca5aaa78c13b0e0c9245e0aa0%201.png?alt=media&token=90e817e9-a05f-46d8-8816-5cc44d2f3334"

    const heroStyle = {
        background: `url(${bookImage}) no-repeat center center/cover`,
        color: 'black',
        height: '100vh',
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const textStyle = {
        textAlign: 'center'
    };

    return (
        <>
        <div style={heroStyle}>
            <Container className="d-flex flex-column justify-content-center align-items-center h-100">
                <Row>
                    <Col style={textStyle}>
                        <h1 className="display-3" style={{ fontWeight: "bold" }}>SEARCH YOU NEXT TRAVEL </h1>
                        <h1 className="display-3"  style={{ fontWeight: "bold" }}>Destination</h1>

                        
                            <InputGroup className="mb-3" size="lg" style={{ width: '840px',}}>
                                <Form.Control
                                    placeholder="Enter Your Destination"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                    <img src={searchIcon} alt="Search" style={{ width: '28px', height: '28px' }} />
                                </Button>
                            </InputGroup>
                        
                    </Col>
                </Row>
            </Container>
            
        </div>
        <DestinationSection />
        </>

    );
};

export default DestinationPage;
