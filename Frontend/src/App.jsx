import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Photo from './components/Photo.jsx';
import Homecards from './components/Homecards.jsx';
import Salephoto from './components/Salephoto.jsx';

function App() {
 
  return<>
  <div className='heading'>
    <i>Welcome To Our E-Commerce Platform. We will provide you a very smooth experience.</i>
  </div>
  <Navbar/>
  <Photo/>
  <Homecards/>
  <Salephoto/>
  <Footer/>
    </>
}

export default App;


/* 

   */