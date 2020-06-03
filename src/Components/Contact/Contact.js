import React, { Component } from 'react';
import './Contact.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({once:true});
class Contact extends Component {
    render() {       
        return (
            <React.Fragment>
                <div className="socialmedia"><h2>Social Media</h2></div>
            <div className="contact-container" id="contact">
                <div className="contact-item" data-aos="fade-in" >                 
                    <div className="button-container fb">
                       <a href="https://www.facebook.com/hoangminhtan6601/" target="_blank" rel="noopener noreferrer"> <button className="fb-bt">Follow Facebook</button></a>
                    </div>
                </div>
                <div className="contact-item " data-aos="fade-in" data-aos-delay="50">              
                    <div className="button-container gh">
                    <a href="https://github.com/Satt0" target="_blank" rel="noopener noreferrer">   <button className="gh-bt">Follow Github</button></a>
                    </div>
                </div>
                <div className="contact-item " data-aos="fade-in" data-aos-delay="100">               
                    <div className="button-container ig">
                    <a href="https://www.instagram.com/minh_taan/" target="_blank" rel="noopener noreferrer">     <button className="ig-bt">Folow Instagram</button></a>
                    </div>
                </div>
            </div>
            <div className="copyright"><em>Email: minhtanbg6601@gmail.com</em></div>
            </React.Fragment>
        );
    }
}

export default (Contact);