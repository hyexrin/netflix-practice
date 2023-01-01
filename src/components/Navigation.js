import React from 'react'
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const Navigation = () => {
    const navigate = useNavigate();

    return (
        <Navbar bg="dark" variant='dark' expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img
                        width={100}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
                        onClick={() => navigate('/')}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to="/" className="nav-item">홈</Link>
                        <Link to="/movies" className="nav-item">영화</Link>

                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-danger">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation