// This is the Controls component which has the '+', '-' and toggle buttons.

function Controls({onIncrease, onDecrease, handleToggle, unit})
{
    return(
        <div className="controls">
            <div className="control-button">
                <button onClick={onDecrease} className="decrease">-</button>
                <button onClick={onIncrease} className="increase">+</button>
            </div>
            <button onClick={handleToggle} className="toggle">
                Convert to °{unit === 'C' ? 'F':'C'}
            </button>
        </div>
    );
}

export default Controls;