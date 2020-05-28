import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselP.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({once:true});
class CarouselP extends Component {
  constructor(props){
    super(props);
   this.state={
     source:this.props.source1
   }
    
  }

    render() {
    
        return (
          
            <React.Fragment >
              <div className="intro" data-aos="slide-down" data-aos-duration="1300">
                
                <h2 className="h1">Hello World!</h2>
                <p className="h2">My name is <em>Hoàng Minh Tân</em><br/> You are visiting my website!</p>
                <p className="h5">Take a look at my photo first.</p>
             
             </div>
                <Carousel id="Galery">
  <Carousel.Item>
    <img
      className="d-block w-100 imgslide1"
      src={this.state.source[0]}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 imgslide2"
      
      src={this.state.source[1]}
      alt="Third slide"
    />


  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 imgslide3" 
      src={this.state.source[2]}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
            </React.Fragment>
        );
    }
}

export default (CarouselP);