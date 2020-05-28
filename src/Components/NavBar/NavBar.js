import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';


class NavBar extends React.Component {
  
    render() {
        return (
            <React.Fragment>
            <Navbar  bg="light"  expand="lg" style={{position:'fixed',width:'100%',zIndex:'123'}}>
  <Navbar.Brand>Just a website</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="m-auto" >
      <Nav.Link  onClick={()=>document.getElementById('Galery').scrollIntoView({behavior:'smooth'})}>Galery</Nav.Link>
      <Nav.Link href="#Information">Link</Nav.Link>
      <Nav.Link href="">Contact</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
            </React.Fragment>
        );
    }
}

export default NavBar;