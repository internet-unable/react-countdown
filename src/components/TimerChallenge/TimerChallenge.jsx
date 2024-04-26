import { useState, useRef } from "react";

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleBtnClick() {
        if (timerStarted) {
            clearTimeout(timer.current);
            setTimerStarted(false);
        } else {
            timer.current = setTimeout(() => {
                setTimerExpired(true);
            }, targetTime * 1000);

            setTimerStarted(true);
        }
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You lost!</p>}
            <p className="challenge-time">{targetTime} second{targetTime > 1 ? 's' : ''}</p>
            <p>
                <button type="button" onClick={handleBtnClick}>
                    {timerStarted ? 'Stop' : 'Start'} Challange
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
    );
}