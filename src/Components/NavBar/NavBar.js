import React from 'react';import {Navbar,Nav} from 'react-bootstrap';
import profile from './profile.jpeg';
import './NavBar.scss';
class NavBar extends React.Component {
    render() {
        return (
            <React.Fragment>
            <Navbar  variant="dark"  expand="lg" style={{position:'fixed',width:'100%',zIndex:'123',backgroundColor:'rgba(85, 91, 110,0.9)'}}>
  <Navbar.Brand style={{overflow: 'hidden'}}><img src={profile} alt="my picture" width="37px" style={{borderRadius:'100%'}}/><p className="hithere">Hi there</p></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto" >
      <Nav.Link  onClick={()=>document.getElementById('Galery').scrollIntoView({behavior:'smooth'})}>Galery</Nav.Link>
      <Nav.Link onClick={()=>document.getElementById('detail').scrollIntoView({behavior:'smooth'})}>Infomation</Nav.Link>
      <Nav.Link href="">Contact</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
            </React.Fragment>
        );
    }
}

export default NavBar;