import React from 'react';
import './App.scss';
import NavBar from './Components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselP from './Components/CarouselP/CarouselP'
import landscape1 from './landscape/landscape1.jpg';
import landscape2 from './landscape/landscape2.jpg';
import landscape3 from './landscape/landscape3.jpg';
import Information from './Components/Information/Information';
const landscapepic=[landscape1,landscape2,landscape3];

function App() {
  return (
    <div className="App text-center">
      <NavBar />
      <CarouselP source1={landscapepic}/>
     <Information/>
    </div>

  );
}

export default App;
