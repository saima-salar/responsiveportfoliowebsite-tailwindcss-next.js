import React from 'react';
import Navbar from './Navbar';


const Hero = () => {
  return (
    <div id="hero" className=" min-h-screen bg-no-repeat bg-[url(/pic-01.png)] bg-left bg-cover  "
    style={{backgroundSize: "25%", backgroundPosition: "left 100px top 180px "}}
    >
      <Navbar />
      <div className='p-12 container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='p-10 text-[80px]  sm:text-[100px] font-bold leading-tight flex justify-end justify-items-end'>
          <div>
            <p>I am</p>
            <p>Saima</p>
            <p>Salar</p>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Hero;