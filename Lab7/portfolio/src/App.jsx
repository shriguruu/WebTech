// This is a portfolio of myself created using React
 
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import './App.css'
import Experience from './pages/Experience';
import Achievements from './pages/Achievements';
import Thermostat from './pages/Thermostat';
import Timer from './pages/Timer';

function App() {

  return (
      <>
        <BrowserRouter>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/education" Component={Education} />
            <Route path="/skills" Component={Skills} />
            <Route path="/projects" Component={Projects} />
            <Route path="/experience" Component={Experience} />
            <Route path="/achievements" Component={Achievements} />
            <Route path="/thermostat" Component={Thermostat} />
            <Route path="/timer" Component={Timer} />
          </Routes>
        </div>
        </BrowserRouter>
      </> 
  )
}

export default App;
