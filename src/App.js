import logo from './logo.svg';
import './App.css';
import React from 'react';
import Testimonials from './components/Testimonials';
import reviews from './data';

function App() {
  return (
    <div className=" h-[100vh] flex flex-col justify-center items-center bg-OffWhite">
      <div className="Heading">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="bg-violet h-[4px] w-1/2 mt-2 mx-auto"></div>
      </div>
      <Testimonials reviews={reviews}/>
    </div>
  )
}

export default App;
