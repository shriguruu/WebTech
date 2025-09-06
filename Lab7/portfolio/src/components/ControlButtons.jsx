// ControlButtons Component which provides start/pause and reset controls

function ControlButtons({ isRunning, onStart, onPause, onReset, canStart, canReset }) {
    return (
        <div className="controls">
            {!isRunning ? (
                <button 
                    className="btn start-btn" 
                    onClick={onStart}
                    disabled={!canStart}
                >
                    Start
                </button>
            ) : (
                <button 
                    className="btn pause-btn" 
                    onClick={onPause}
                >
                    Pause
                </button>
            )}
            
            <button 
                className="btn reset-btn" 
                onClick={onReset}
                disabled={!canReset}
            >
                Reset
            </button>
        </div>
    );
}

export default ControlButtons;