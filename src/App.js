import React from 'react';
import './App.scss';
import NavBar from './Components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselP from './Components/CarouselP/CarouselP'
import Information from './Components/Information/Information';
import Game from './Components/Game/Game';
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <div className="App text-center">
      <NavBar />
      <CarouselP />
     <Information/>
     <Contact/>
    </div>

  );
}

export default App;
