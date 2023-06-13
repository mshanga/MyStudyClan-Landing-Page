import React from 'react';
import { Features, Footer, Header, About } from './containers';
import { Brand, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <Features />
        <About />
        <Footer />
    </div>
    
  )
}

export default App