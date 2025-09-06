// This is the DisplayTemp Component for thermostat which displays the temperature

function DisplayTemp({temperature, unit})
{
    return(
        <div className="temp-display">
            <p>{temperature.toFixed(1)}°{unit}</p>
        </div>
    )
}

export default DisplayTemp;