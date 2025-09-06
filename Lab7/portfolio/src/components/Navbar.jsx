// Navigation bar component

import { Link } from 'react-router-dom';

function Navbar() {
  
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/education" className="nav-link">Education</Link>
      <Link to="/skills" className="nav-link">Skills</Link>
      <Link to="/projects" className="nav-link">Projects</Link>
      <Link to="/experience" className="nav-link">Experience</Link>
      <Link to="/achievements" className="nav-link">Achievements</Link>
      <Link to="/thermostat" className="nav-link">Thermostat</Link>
      <Link to="/timer" className="nav-link">Timer</Link>
    </nav>
  );
}

export default Navbar;