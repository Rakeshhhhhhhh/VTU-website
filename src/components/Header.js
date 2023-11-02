import React from "react";
import {Navbar,NavDropdown,Nav,Container,Image} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header =() => {
    return(
        <header>
            <Navbar className="navbar-style" expand="lg">
                <Container>

                    <LinkContainer to='/home'>
                    <Navbar.Brand href="#home">
                        <Image src="images/logo.jpg" className="logo-img" rounded/>
                        <h6 className="logo_name">Visvesvaraya Technological University,Belagaum</h6>

                    </Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">

                        <LinkContainer to='/home'>
                            <Nav.Link href="#home">Home</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/about'>
                            <Nav.Link href="#link">About VTU</Nav.Link>
                        </LinkContainer>
                       
                        <NavDropdown title='Acadamic' id='baic-nav-dropdown'>
                            <LinkContainer to='circular'>
                                <NavDropdown.Item href='#'>Circular& Notification</NavDropdown.Item>
                            </LinkContainer>
                           
                            <NavDropdown.Item href="#">Admission</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Certificate Issued</NavDropdown.Item>
                        </NavDropdown>


                        <NavDropdown title="Examination" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Examination & guidlines</NavDropdown.Item>
                            <NavDropdown.Item href="#">Examination Application</NavDropdown.Item>

                            <LinkContainer to='/result'>
                            <NavDropdown.Item href="#">Result</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        <NavDropdown title='VTU Departments'id="basic-nav-dropdown" >
                            <NavDropdown.Item href='#'>civil Engineering</NavDropdown.Item>
                            <NavDropdown.Item href='#'>Information technology</NavDropdown.Item>
                            <NavDropdown.Item href='#action/3.3'>Electrical& Electronics</NavDropdown.Item>



                        </NavDropdown>

                    </Nav>
                   </Navbar.Collapse>
                </Container>    
            </Navbar>   

            
        </header>
    );
};
export default Header;
