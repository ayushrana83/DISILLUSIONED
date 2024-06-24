import React from 'react';
import Navbar from './components/Navbar';
import Container from './components/Container';

function App ()  {
  return (
    <div className='w-full h-screen text-2xl'>
      <Navbar/>
      <Container/>
    </div>
  );
};

export default App;