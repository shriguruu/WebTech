// Thermostat page

import { useState } from 'react';
import './Thermostat.css';
import DisplayTemp from '../components/DisplayTemp';
import Controls from '../components/Controls';
import Header from '../components/Header';



function Thermostat() {
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
    <div className='page-container'>
      
        <Header textContent={"Thermostat"}/>
        
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

export default Thermostat;