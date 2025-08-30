// TimeSetter Component which allows users to set hours, minutes, and seconds

function TimeSetter({ time, onChange, disabled }) {
    
    const handleChange = (unit, value) => {
        const num = parseInt(value) || 0;
        
        // Validate limits
        if (unit === 'hours' && num > 99) return;
        if ((unit === 'minutes' || unit === 'seconds') && num > 59) return;
        if (num < 0) return;
        
        onChange(unit, num);
    };

    return (
        <div className="time-setter">
            <div className="input-group">
                <label>Hours</label>
                <input
                    type="number"
                    value={time.hours}
                    onChange={(e) => handleChange('hours', e.target.value)}
                    disabled={disabled}
                    min="0"
                    max="99"
                />
            </div>
            
            <div className="input-group">
                <label>Minutes</label>
                <input
                    type="number"
                    value={time.minutes}
                    onChange={(e) => handleChange('minutes', e.target.value)}
                    disabled={disabled}
                    min="0"
                    max="59"
                />
            </div>
            
            <div className="input-group">
                <label>Seconds</label>
                <input
                    type="number"
                    value={time.seconds}
                    onChange={(e) => handleChange('seconds', e.target.value)}
                    disabled={disabled}
                    min="0"
                    max="59"
                />
            </div>
        </div>
    );
}

export default TimeSetter;