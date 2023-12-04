import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar bg="primary" data-bs-theme="dark" style={{ marginBottom: 50 }} className='shadowBox'>
            <Container>
                <Navbar.Brand href="#home" style={{ fontWeight: 'bolder' }}> REACT STATE </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login"> Guest </a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar