import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './components/Home';
import Mechanical from './components/Mechanical';
import Mechanical_Projects from './components/mProjects'
import Software from './components/Software';

function App() {
  return (
    <div className='container mx-auto px-20'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/mechanical' element={<Mechanical/>}/>
          <Route exact path='/software' element={<Software/>}/>
          <Route exact path='/mechanical_projects' element={<Mechanical_Projects/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );  
}

export default App;
