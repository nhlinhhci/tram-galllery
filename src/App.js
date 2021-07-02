import './App.css';
import React from 'react';
import Gallery from './Components/Gallery/Gallery';
import LeftNav from './Components/LeftNav/LeftNav';

function App() {
  return (
    <>
      <div className='relative min-h-screen sm:flex'>
        <div className='leftNav'>
          <LeftNav />
        </div>
        <div className='rightGallery'>
          <Gallery />
        </div>
      </div>
    </>
  );
}

export default App;
