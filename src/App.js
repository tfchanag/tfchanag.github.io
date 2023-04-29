import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React, { useEffect } from "react";

import Home from './components/Home';
import About from './components/About';
import Mechanical from './components/Mechanical';
import Mechanical_Projects from './components/MProjects';
import TKST from './components/projects/TKST';
import Galaxy from './components/projects/Galaxy';
import WR128 from './components/projects/WR128';
import KokoHills from './components/projects/KokoHills';
import FYP from './components/projects/FYP';

function App() {
	useEffect(() => {
		document.title = "Richie Chan's Page";  
	  }, []);

  return (
    <div className='sm:container sm:mx-auto sm:px-20 px-6 pb-10'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/mechanical' element={<Mechanical/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/mechanical_projects' element={<Mechanical_Projects/>}/>
          <Route exact path='/tkst' element={<TKST/>}/>
          <Route exact path='/galaxy' element={<Galaxy/>}/>
          <Route exact path='/wr128' element={<WR128/>}/>
          <Route exact path='/kokohills' element={<KokoHills/>}/>
          <Route exact path='/fyp' element={<FYP/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );  
}

export default App;
