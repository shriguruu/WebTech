import './App.css'

function AnimalCard({animal})
{
    return(
        <div className='animal-data'>
            <h2>{animal.name}</h2>
            <p>{animal.species}</p>
            <p>{animal.weight}</p>
            <p>{animal.diet}</p>
        </div>
    )
}

export default AnimalCard;