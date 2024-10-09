import React, { Component, component } from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

export default class AppNavbar extends Component {
    render() {
        return (
            <Navbar cassName="navbar-dark bg-dark px-5" expand="md">
                <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
            </Navbar>
        )
    }
}