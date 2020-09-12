import React from 'react';
import './App.scss';
import NavBar from './Components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselP from './Components/CarouselP/CarouselP'
import Information from './Components/Information/Information';
import Contact from './Components/Contact/Contact'
import Toggle from './Components/Toggle/Toggle'
function App() {
  return (
    <div className="App text-center">
      <NavBar />
      <CarouselP />
      <Information/>
      <Contact/>
      <Toggle/>
    </div>
  );
}
export default App;
