// Main Timer Page

import React, { useState, useEffect } from 'react';
import TimerDisplay from '../components/TimerDisplay';
import TimeSetter from '../components/TimeSetter';
import ControlButtons from '../components/ControlButtons';
import './Timer.css';


export default function Timer() {
    const [time, setTime] = useState({ hours: 0, minutes: 1, seconds: 30 });
    const [timeLeft, setTimeLeft] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    // Calculate total seconds from time object
    const totalSeconds = time.hours * 3600 + time.minutes * 60 + time.seconds;

    // Countdown effect
    useEffect(() => {
        if (!isRunning || timeLeft <= 0) return;

        const interval = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    setIsRunning(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning, timeLeft]);

    // Format seconds to time object
    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return {
            hours: h.toString().padStart(2, '0'),
            minutes: m.toString().padStart(2, '0'),
            seconds: s.toString().padStart(2, '0')
        };
    };

    const displayTime = timeLeft > 0 ? formatTime(timeLeft) : formatTime(totalSeconds);

    const handleStart = () => {
        if (totalSeconds > 0) {
            // Only set timeLeft if timer hasn't been started yet
            if (timeLeft === 0) {
                setTimeLeft(totalSeconds);
            }
            setIsRunning(true);
            setHasStarted(true);
        }
    };

    const handlePause = () => setIsRunning(false);
    
    const handleReset = () => {
        setIsRunning(false);
        setTimeLeft(0);
        setHasStarted(false);
    };

    const handleTimeChange = (unit, value) => {
        if (!isRunning) {
            setTime(prev => ({ ...prev, [unit]: value }));
        }
    };

    return (
        <div className="app">
            <div className="timer-container">
                <h1 className="title">Countdown Timer</h1>
                
                <TimerDisplay 
                    time={displayTime} 
                    isRunning={isRunning}
                    isCompleted={hasStarted && timeLeft === 0 && !isRunning}
                />
                
                <TimeSetter 
                    time={time}
                    onChange={handleTimeChange}
                    disabled={isRunning}
                />
                
                <ControlButtons
                    isRunning={isRunning}
                    onStart={handleStart}
                    onPause={handlePause}
                    onReset={handleReset}
                    canStart={totalSeconds > 0}
                    canReset={timeLeft > 0 || isRunning}
                />
            </div>
        </div>
    );
}