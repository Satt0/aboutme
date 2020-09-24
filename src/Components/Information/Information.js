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
         <li className="h4"  >{lang.study.title}</li>
               <li>{lang.study.school}</li>
         <li>{lang.study.major}</li>
         <li>{lang.study.year}</li>
         <li>{lang.study.degree}</li>                     
               </div>
               <div className="textitem" >
         <li className="h4"  > {lang.hobby.title}</li>
         <li>{lang.hobby.hobby}</li>
              
         <li>{lang.hobby.reading}</li>
          <li>{lang.hobby.sport}</li>
         <li>{lang.hobby.game}</li>
               </div>  
            </div></React.Fragment>
        );
    }

export default (Information);