import React, { useState } from 'react';
import Logo from '../assets/img/cash.app.png';
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="flex ">
        <div className="flex">
          <img src={Logo} alt="Logo" className="h-8 w-auto mt-5 ml-5 cursor-pointer" />
        </div>
        <nav className='ml-[150vh]'>
          <div className="flex gap-4">
            <div className="border mt-5 bg-white rounded-full">
              <h1 className="text-sm font-bold pl-5 pr-5 pt-3 pb-3">Log In</h1>
            </div>
            <div className="menu relative">
              <button onClick={toggleMenu} className="mt-6 mr-5 text-white rounded-full border-2 p-1 ">
                {menuOpen ? (
                  <ImCross className="h-6 w-6" /> // Close icon
                ) : (
                  <TiThMenu className="h-6 w-6" /> // Hamburger icon
                )}
              </button>
              {menuOpen && (
                <div className="fixed top-0 right-0 h-[500px]  w-[100%]  bg-white shadow-md">
                  
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
