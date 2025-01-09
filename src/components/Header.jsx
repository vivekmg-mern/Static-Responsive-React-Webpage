import React from 'react'
import { Container, Nav, Navbar, } from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';





function Header() {
  return (
    <div>
        <div>
    <Navbar style={{zIndex:1}} expand="lg" className="bg-body-light">
      <Container>
        <Link to={'/'} ><Navbar.Brand href="#home"><img src={'./src/assets/Icon Final.png'} alt="" srcset="" width={'120px'} /></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link style={{textDecoration:'none'}} to={'/Home'}><Nav.Link href="#home" ><span style={{color:'#FF10F0'}}>Home</span></Nav.Link></Link> 
            <Link style={{textDecoration:'none'}} to={'/Home'}><Nav.Link href="/Home" ><span style={{color:'#FF10F0'}}>Contact Us</span></Nav.Link></Link>
            
          </Nav>
        </Navbar.Collapse>
        <Link style={{textDecoration:'none'}} to={'/Home'}><Nav.Link href="/Home" ><span style={{color:'black'}}><i class="fa-solid fa-cart-shopping fa-2xl"></i></span></Nav.Link></Link>
      </Container>
    </Navbar>
    </div>
    </div>
    
  )
}

export default Header