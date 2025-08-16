// This is a simple React web application which displays some animal data
import './App.css'
import AnimalCard from'./AnimalCard.jsx'
import {animalData} from './data/animal.js' 



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
