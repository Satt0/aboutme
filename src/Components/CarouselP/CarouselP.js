import React from 'react';
import {useSelector} from 'react-redux'
import './CarouselP.scss';
const CarouselP=()=>  {
  const src=useSelector(state=>state.language)
  const display=useSelector(state=>state.display)
  const lang=src[display].carousel;
  
    return ( 
            <div className="Galery">
                            
              
            </div>
        );
    }

export default (CarouselP);