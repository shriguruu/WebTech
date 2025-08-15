import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnimalCard from'./AnimalCard.jsx'

const animalData = [
  {id:1, name:'Lion', species: 'Panthera Leo', weight:'140kg', diet:'meat'},
  {id:2, name:'Gorilla', species: 'Gorilla beringei', weight:'205kg', diet:'plants'},
  {id:3, name:'Zebra', species: 'Equus quagga', weight:'322kg', diet:'plants'}
];


function App()
{
  return(
    <div className='app-container'>
      <h1>Animals</h1>
      <div className='animal-Cont'>
        {
          animalData.map((animal)=>(
            <AnimalCard key={animal.id} animal={animal}></AnimalCard>
          ))
        }
      </div>
    </div>
  )
}
export default App
