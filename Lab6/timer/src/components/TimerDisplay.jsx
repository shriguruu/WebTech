// TimerDisplay component which displays the current time remaining 

function TimerDisplay({ time, isRunning, isCompleted }) {
    return (
        <div className={`timer-display ${isRunning ? 'running' : ''} ${isCompleted ? 'completed' : ''}`}>
            <div className="time-part">
                <span className="time-number">{time.hours}</span>
                <span className="time-label">H</span>
            </div>
            <span className="separator">:</span>
            <div className="time-part">
                <span className="time-number">{time.minutes}</span>
                <span className="time-label">M</span>
            </div>
            <span className="separator">:</span>
            <div className="time-part">
                <span className="time-number">{time.seconds}</span>
                <span className="time-label">S</span>
            </div>
            {isCompleted && (<div className="completed-msg">Time's Up!</div>)}
        </div>
    );
}

export default TimerDisplay;