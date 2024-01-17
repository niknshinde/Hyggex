import React from 'react';
import Navigation from './Navigation';
import Main from './Main';

function Home() {
  return (
    <div>
      <Navigation />
      <h1 className='text-4xl font-bold mb-4'>
        <span className='bg-gradient-to-r from-blue-800 to-blue-500 hover:from-blue-700 hover:to-blue-400 text-transparent bg-clip-text'>
          Relations and Functions ( Mathematics )
        </span>

         <Main/>
      </h1>
    </div>
  );
}

export default Home;
