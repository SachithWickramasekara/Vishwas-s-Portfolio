import React from 'react'
import {Routes, Route} from 'react-router-dom';

import Home from './Home';
import ImageGallery from './ImageGallery';
import ImageLoader from './ImageLoader';

import About from './About';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contactus';
function Pageorder (){
return (
 <>
  
  <Routes>
  <Route path="/" element={ <Home/>}/>
  <Route path="/About" element={<About/>} />
  <Route path="/Skills" element={<Skills/>} />
  <Route path='/Work' element={<Work/>} />
  <Route path="/Contact" element={<Contact/>} />
  <Route path='/View-more' element={ <ImageLoader/>}></Route>
  <Route path='/Work/View-more' element={ <ImageLoader/>}></Route>
  </Routes>   
 </>
);
}
export default Pageorder;