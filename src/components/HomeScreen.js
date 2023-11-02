import React from "react";
import { Container,Row,Col,Carousel } from "react-bootstrap";
import {Link} from 'react-router-dom';

const HomeScreen =()=>{
    return(
        <>
        <marquee className='my-3'>
            <h3>
                {''}VTU Results 2023 Out-Check Exam Result!!!
                <Link to='/result'>Click here...</Link>Best of Luck!!!
            </h3>
        </marquee>

        <Container>
            <Carousel>
            <Carousel.Item>
                <img className="d-block w-100"
                src='images/img1.jpg' style={{height:'500px'}}
                alt='First slide'
                />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"
                 src='images/img2.jpg' style={{height:'500px'}}
                 alt='Second slide'
                 />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"
                 src='images/img3.jpg' style={{height:'500px'}}
                 alt='Third slide'
                 />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"
                 src='images/img4.jpg' style={{height:'500px'}}
                 alt='Fourth slide'
                 />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"
                 src='images/img5.jpg' style={{height:'500px'}}
                 alt='Fifth slide'
                 />
            </Carousel.Item>
            </Carousel>

            <Row className="my-3">
                <Col md={4}>
                    <Link to='/vision'><h3>Vision</h3></Link>
                    <p>
                    As a leader in providing high-quality learning, Vancouver Island University supports the well being
                     of the people of Vancouver Island and coastal British Columbia
                    </p>
                    <p>
                    As a leader in providing high-quality learning, Vancouver Island University supports the well being of
                     the people of Vancouver Island and coastal British Columbia
                    </p>
                        <Link to='/About'className="btn btn-warning">Readmore</Link>
                </Col>
                <Col md={4}>
                    <Link to='/mission'><h3>Mission</h3></Link>
                    <p>
                    As a leader in providing high-quality learning, Vancouver Island University supports the well being
                     of the people of Vancouver Island and coastal British Columbia
                    </p>
                    <p>
                    As a leader in providing high-quality learning, Vancouver Island University supports the well being of
                     the people of Vancouver Island and coastal British Columbia
                    </p>
                    <Link to='/About'className="btn btn-warning">Readmore</Link>

                </Col>
                <Col md={4}>
                    <Link to='/About'><h3>Mandate</h3></Link>
                    <p>
                    As a leader in providing high-quality learning, Vancouver Island University supports the well being
                     of the people of Vancouver Island and coastal British Columbia
                    </p>
                    <p>
                    As a leader in providing high-quality learning, Vancouver Island University supports the well being of
                     the people of Vancouver Island and coastal British Columbia
                    </p>
                    <Link to='/About'className="btn btn-warning">Readmore</Link>
                </Col>
            </Row>

        </Container>
        </>
    );
};
export default HomeScreen;


