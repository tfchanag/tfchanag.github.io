import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './components/Home';
import Mechanical from './components/Mechanical';
import Mechanical_Projects from './components/mProjects';
import Software from './components/Software';
import TKST from './components/projects/TKST';
import Galaxy from './components/projects/Galaxy';
import WR128 from './components/projects/WR128';

function App() {
  return (
    <div className='sm:container sm:mx-auto sm:px-20 px-6 pb-10'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/mechanical' element={<Mechanical/>}/>
          <Route exact path='/software' element={<Software/>}/>
          <Route exact path='/mechanical_projects' element={<Mechanical_Projects/>}/>
          <Route exact path='/tkst' element={<TKST/>}/>
          <Route exact path='/galaxy' element={<Galaxy/>}/>
          <Route exact path='/wr128' element={<WR128/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );  
}

export default App;
