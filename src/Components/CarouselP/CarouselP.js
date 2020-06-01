import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselP.scss';
class CarouselP extends Component {
    render() {
    return ( 
            <React.Fragment >
              <div className="intro" >               
                <h2 >Hello World!</h2>
                <h4>My name is <em>Tân</em><br/> You are visiting my website!</h4>
                <h6>Take a look at my photo first.</h6>             
             </div>
                <Carousel id="galery">
                    <Carousel.Item>
                      <div className="w-100 imgslide1"></div>                      
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="w-100 imgslide2"></div>                      
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="w-100 imgslide3"> </div>
                    </Carousel.Item>
                  </Carousel>
            </React.Fragment>
        );
    }
}
export default (CarouselP);