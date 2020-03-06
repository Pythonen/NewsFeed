import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

const Header = () => {
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Tuoreimmat uutiset</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#link">Helsingin-Sanomat</Nav.Link>
                    <Nav.Link href="#link">Iltalehti</Nav.Link>
                    <Nav.Link href="#link">Ilta-Sanomat</Nav.Link>
                    <Nav.Link href="#link">Yle Uutiset</Nav.Link>
                    <Nav.Link href="#link">Kauppalehti</Nav.Link>             
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;