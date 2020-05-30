import React from 'react';
import profile from './profile.jpeg';
import './NavBar.scss';
class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      target:'galery'
    }
  }
 
    render() {
        return (
            <div className="nav">
              <a href="#galery"><li>Galery</li></a>
              <a href="#detail"> <li >Detail</li></a> 
              <a href="#contact"> <li>Contact</li></a>
  

            </div>
        );
    }
}

export default NavBar;