import React, { Component } from 'react';
import './Contact.scss';


const Contact =()=> {
         
        return (
            <React.Fragment>
                <div className="socialmedia"><h2>Social Media</h2></div>
            <div className="contact-container" id="contact">
                <div className="contact-item">                 
                    <div className="button-container fb">
                       <a href="https://www.facebook.com/hoangminhtan6601/" target="_blank" rel="noopener noreferrer"> <button className="fb-bt">Follow Facebook</button></a>
                    </div>
                </div>
                <div className="contact-item " >              
                    <div className="button-container gh">
                    <a href="https://github.com/Satt0" target="_blank" rel="noopener noreferrer">   <button className="gh-bt">Follow Github</button></a>
                    </div>
                </div>
                <div className="contact-item " >               
                    <div className="button-container ig">
                    <a href="https://www.instagram.com/minh_taan/" target="_blank" rel="noopener noreferrer">     <button className="ig-bt">Follow Instagram</button></a>
                    </div>
                </div>
            </div>
            <div className="copyright"><em>Email: minhtanbg6601@gmail.com</em></div>
            </React.Fragment>
        );
    }


export default (Contact);