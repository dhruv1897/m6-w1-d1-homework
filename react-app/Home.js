import React, { Component } from 'react';
import AppNavbar from 'Navbar.js';
import { Link } from 'react-router-dom';
import { Button , Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

class Home extends Component {

    rernder() {
        return (
            <div>
                <AppNavbar />
                <Container fluid>
                    <Button className="m-5 nav bg-light">
                        <Link 
                            to="/inventories"
                            className="Nav-link">Manage Inventory List</Link>
                    </Button>
                </Container>
            </div>
        );
    }
}

export default Home;