import React from 'react';
import './styles.scss';
import { Navbar as Navb, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <Navb collapseOnSelect expand="lg" bg="primary" variant="dark" className="main-nav">
            <Navb.Brand as={NavLink} to="/">TechTrade</Navb.Brand>
            <Navb.Toggle aria-controls="responsive-navbar-nav" />
            <Navb.Collapse id="responsive-navbar-nav">
                <Nav className="m-auto offset-5 menu-nav">
                    <Nav.Link as={NavLink} to="/" exact>
                        Início
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/products">
                        Catálogo
                    </Nav.Link>

                </Nav>
                <Nav className="menu-nav">
                    <Nav.Link as={NavLink} to="/admin">
                        Login
                    </Nav.Link>
                </Nav>
            </Navb.Collapse>
        </Navb>
    );
};

export default Navbar;