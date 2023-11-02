import React from "react";
import { Link } from "react-router-dom";
import { Container,Row,Col,Form,Button } from "react-bootstrap";


const ResultComponent=()=>{
    return(
        <Container className="my-3">
            <Link to='/home' className="btn btn-dark">
                Go Back
            </Link>

            <Row className="justify-content-center my-3">
                <Col md={6}>
                    <h3 style={{textAlign:'center'}}>Check ur Results</h3>
                    <Form className="my-3">
                        <Form.Group controlId="register">
                            <Form.Label>Enter Ur Register No:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Registration number"></Form.Control>
                        </Form.Group>
                        <Button className="my-3" type='submit'>submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};
export default ResultComponent;
