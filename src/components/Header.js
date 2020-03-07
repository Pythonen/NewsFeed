import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <Navbar bg="light" expand="lg">
            <Link to='/'>
                <Navbar.Brand>Tuoreimmat uutiset</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link ><Link to='/hs'><li>Helsingin-Sanomat</li></Link></Nav.Link>
                <Nav.Link ><Link to='/il'><li>Iltalehti</li></Link></Nav.Link>
                <Nav.Link ><Link to='/is'><li>Ilta-Sanomat</li></Link></Nav.Link>
                <Nav.Link ><Link to='/yle'><li>Yle Uutiset</li></Link></Nav.Link>
                <Nav.Link ><Link to='/kl'><li>Kauppalehti</li></Link></Nav.Link>          
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;