import React from 'react';
import './Information.scss';
import {useSelector} from 'react-redux'

const Information =()=> {
    const src=useSelector(state=>state.language)
    const display=useSelector(state=>state.display)
    const lang=src[display].detail;
    console.log(lang);
         return (
            <React.Fragment>
                <div id="infor" className="textcontainer"><div id="detail" className="h3" ><p>All about me</p></div></div>
            <div className="containertext" id="detail"> 
               <div className="textitem">              
         <li className="h4"  >{lang.detail.title}</li>
         <li><strong>{lang.detail.name}</strong></li>
                       <li>{lang.detail.dateOfBirth}</li>
                       <li><strong>{lang.detail.now}</strong></li>
                       <li>{lang.detail.weight}</li>
                       <li>{lang.detail.height}</li>                 
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

export default (Information);