import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false)

  const navBarEffect = () => {
    if (window.scrollY >= 50) {
      setNavBackground(true)
    } else {
      setNavBackground(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', navBarEffect)
    return () => {
      window.removeEventListener('scroll', navBarEffect)
    }
  }, [])

  return (
    <nav className={`flex justify-between p-5 fixed w-full z-10 ${navBackground ? 'bg-gray-900 transition-opacity duration-500' : 'bg-transparent transition-opacity duration-500'}`} style={navBackground ? {opacity: 0.9} : {opacity: 1}}>
      <div className="text-xl justify-center">
        <a href="/" className="hover:text-purple-700 font-alex-brush">Brows By Dino</a>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-around items-center text-xl space-x-4">
        <a href="/home" className="hover:text-purple-700 font-lato">Home</a>
        <a href="/services" className="hover:text-purple-700 font-lato">Services</a>
        <a href="/faq" className="hover:text-purple-700 font-lato">FAQ</a>
        <a href="/contact" className="hover:text-purple-700 font-lato">About</a>
        <button><a href="/book" className="hover:text-purple-700 font-lato p-3 bg-purple-500 rounded-md">Book</a></button>
      </div>
    </nav>
  );
}

export default Navbar;
