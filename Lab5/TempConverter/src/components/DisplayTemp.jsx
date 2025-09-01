// This is the DisplayTemp Component which displays the temperature

function DisplayTemp({temperature, unit})
{
    return(
        <div className="temp-display">
            <p>{temperature.toFixed(1)}°{unit}</p>
        </div>
    )
}

export default DisplayTemp;