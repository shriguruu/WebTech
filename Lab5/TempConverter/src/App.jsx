// This is the main App component for the temperature converter app

import { useState } from 'react';
import './App.css';
import DisplayTemp from './components/DisplayTemp.jsx';
import Controls from './components/Controls.jsx';
import Header from './components/Header.jsx';



function App() {
  const [temperature, setTemperature] = useState(0);
  const [unit, setUnit] = useState('C');

  //Method for the toggle button
  const handleToggle = () => {
    if(unit==='C')
    {
      const fahrenheit = (temperature * 9/5) + 32
      setUnit('F');
      setTemperature(fahrenheit);
    }
    else
    {
      const celsius = (temperature - 32) * 5/9;
      setUnit('C');
      setTemperature(celsius);
    }
  };

  return (
      <div className='app-container'>
        <Header/>
        
        <div className='temp-display'>
          <DisplayTemp temperature={temperature} unit={unit}/>
        </div>

        <Controls 
          onDecrease={() => setTemperature(temperature - 1)} 
          onIncrease={() => setTemperature(temperature + 1)} 
          handleToggle={handleToggle}
          unit = {unit}
        />

      </div>
  )
}

export default App;
