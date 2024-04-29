import { useState, useRef } from "react";
import ResultModal from "../ResultModal/ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }
    
    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }

    function handleBtnClick() {
        if (timerIsActive) {
            clearInterval(timer.current);
            dialog.current.open();
        } else {
            timer.current = setInterval(() => {
                setTimeRemaining(prevTimeRemainig => prevTimeRemainig - 10);
            }, 10);
        }
    }

    return (
        <>
            <ResultModal
                ref={dialog}
                targetTime={targetTime}
                remainingTime={timeRemaining}
                onReset={handleReset}
            />

            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">{targetTime} second{targetTime > 1 ? 's' : ''}</p>
                <p>
                    <button type="button" onClick={handleBtnClick}>
                        {timerIsActive ? 'Stop' : 'Start'} Challange
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}