import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {useSelector} from 'react-redux'
import './CarouselP.scss';
const CarouselP=()=>  {
  const src=useSelector(state=>state.language)
  const display=useSelector(state=>state.display)
  const lang=src[display].carousel;
  
    return ( 
            <React.Fragment >
              <div className="intro" >               
                <h2 >{lang.title}</h2>
    <h4>{lang.content}</h4>
    <h6>{lang.comment}</h6>             
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

export default (CarouselP);