import React, { useEffect, useState } from 'react';
import calendar from '../Icons/calendar.svg';


const Navbar = () => {
  const [navOpacity, setNavOpacity] = useState(0)

  const navBarEffect = () => {
    // Calculate the opacity based on scroll position and view height
    // Max value is 1, the higher the scrollY the higher the opacity
    const calculatedOpacity = Math.min(window.scrollY / window.innerHeight, 1);
    setNavOpacity(calculatedOpacity);
  }

  useEffect(() => {
    window.addEventListener('scroll', navBarEffect)
    return () => {
      window.removeEventListener('scroll', navBarEffect)
    }
  }, [])

  return (
    <nav className={`flex justify-between p-5 fixed w-full z-10 text-white transition-opacity duration-1000`} style={{backgroundColor: `rgba(26, 32, 44, ${navOpacity})`}}>
      <div className="text-xl justify-center">
        <a href="/" className="hover:text-purple-700 font-alex-brush text-3xl">Brows By Dino</a>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-around items-center text-xl space-x-4">
        <a href="/home" className="hover:text-purple-700 font-lato">Home</a>
        <a href="/services" className="hover:text-purple-700 font-lato">Services</a>
        <a href="/faq" className="hover:text-purple-700 font-lato">FAQ</a>
        <a href="/contact" className="hover:text-purple-700 font-lato">About</a>
        <button className="min-w-12 min-h-8">
          <a href="/book" className="hover:text-purple-700 font-lato p-2 bg-purple-500 rounded-md flex items-center whitespace-nowrap overflow-hidden">
          <img src={calendar} alt="Calendar" className="w-5 h-auto mr-2" />
          Book
          </a>
        </button>



      </div>
    </nav>
  );
}

export default Navbar;
