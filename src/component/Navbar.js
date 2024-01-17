import React from 'react';

function Navbar() {
  return (
    <div className='mt-5 flex justify-between items-center mb-10'>
      <div className="logo">
        <img src="/images/logo.png" alt="" />
      </div>

      <div className="nav_links text-nav_link_color flex gap-4 items-center">
        <div className="item1 hover:text-blue-500 hover:underline cursor-pointer">Home</div>
        <div className="item1 hover:text-blue-500 hover:underline cursor-pointer">Flashcard</div>
        <div className="item1 hover:text-blue-500 hover:underline cursor-pointer">Contact</div>
        <div className="item1 hover:text-blue-500 hover:underline cursor-pointer">FAQ</div>

        <button className='bg-gradient-to-r from-blue-800 to-blue-500 hover:from-blue-700 hover:to-blue-400 text-white font-bold pl-8 pr-8 pt-2 pb-2 rounded-full'>
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
