import React from 'react'
import {  AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {
   const [isMenuOpen, setIsMenueOpen]=useState(false)
   const toggleMenu = ()=>{
      setIsMenueOpen(!isMenuOpen)
   }
  return (
    <div className='container pt-8'>
    <div className='flex justify-between items-center'>
    <div className='text-xl font-medium'>Saima Salar</div>
    {/* Large Screen Navbar Links */}
    <ul className='gap-10 lg:gap-16 hidden md:flex'>
     <li className='menuLink'>
        <a href="#hero">Home</a>
     </li>
     <li className='menuLink'>
        <a href="#about">About</a>
     </li>
     <li className='menuLink'>
        <a href="#projects">Projects</a>
     </li>
     <li className='menuLink'>
        <a href="#skills">Skills</a>
     </li>
     <li className='menuLink'>
        <a href="#contact">Contact</a>
     </li>
    </ul>
   <div className='md:hidden' onClick={toggleMenu}>
      {isMenuOpen ? <AiOutlineClose size={30} /> :
      <AiOutlineMenu size={30} />
      }
   </div>
    </div>
    { isMenuOpen && (
     <ul className='flex flex-col gap-4 mt-4 md:hidden'>
      <li className='menuLink'>
         <a href="#hero" onCanPlay={toggleMenu}>Home</a>
      </li>
      <li className='menuLink'>
         <a href="#about" onCanPlay={toggleMenu}>About</a>
      </li>
      <li className='menuLink'>
         <a href="#projects" onCanPlay={toggleMenu}>Projects</a>
      </li>
      <li className='menuLink'>
         <a href="#skills" onCanPlay={toggleMenu}>Skills</a>
      </li>
      <li className='menuLink'>
         <a href="#contact" onCanPlay={toggleMenu}>Contact</a>
      </li>
     </ul>
    )
    }
</div>

  )
}

export default Navbar