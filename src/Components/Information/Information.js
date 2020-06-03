import React, { Component } from 'react';
import './Information.scss'
class Information extends Component {
    render() {
         return (
            <React.Fragment>
                <div className="textcontainer"><div id="detail" className="h3" ><p>All about me</p></div></div>
            <div className="containertext" id="detail"> 
               <div className="textitem">              
               <li className="h4"  >Detail</li>
                       <li><strong>Name: Hoàng Minh Tân</strong></li>
                       <li>date of birth: 06.06.2001</li>
                       <li><strong>Now: Single</strong></li>
                       <li>Height: 1.73m</li>
                       <li>Weight: 65kg</li>                 
             </div>
               <div className="textitem" >
               <li className="h4"  >Study at</li>
               <li>Hanoi University of Science and Technology</li>
                       <li>Major: Computer Engineer</li>
                       <li>Academic year: 64th</li>
                       <li>Bachelor Degree</li>                     
               </div>
               <div className="textitem" >
               <li className="h4"  > Hobbies</li>
               <li>Coding and Solving Algorithms</li>
                       <li>Street Workout</li>
                       <li>Playing Games</li>
                       <li>Reading Books</li>
               </div>  
            </div></React.Fragment>
        );
    }
}
export default (Information);