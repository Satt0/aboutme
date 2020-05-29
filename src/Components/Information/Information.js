import React, { Component } from 'react';

import {Card,Button,Container,Nav,ButtonGroup} from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './Information.scss'

class Information extends Component {
    constructor(props){
        super(props);
        this.state={
            

        }
        
    }
    handleToggle(e){
        e.preventDefault();
       
    }
    render() {
       
        return (
            <div className="containertext" >
               <div className="textcontainer"><div id="detail" className="h3" ><p>All about me</p></div></div>
                
               <div className="textitem">
                   
               <li className="h4"  >Detail</li>
                       <li><strong>Name: Hoàng Minh Tân</strong></li>
                       <li>date of birth: 06.06.2001</li>
                       <li>Gender: Male</li>
                       <li>Height: 1.73m</li>
                       <li>Weight: 65kg</li>
                  
               </div>
               <div className="textitem" >
               <li className="h4"  >Study at</li>
               <li>Hanoi University of Science and Technology</li>
                       <li>Field: Computer Engineer</li>
                       <li>Academic year: 64th</li>
                       <li>Bachelor Degree</li>
                       
               </div>
               <div className="textitem" >
               <li className="h4"  > Hobby</li>
               <li>Coding and Solving Algorithms</li>
                       <li>Street Workout</li>
                       <li>Playing Games</li>
                       <li>Reading Books</li>
               </div>
  
            </div>
        );
    }
}

export default (Information);