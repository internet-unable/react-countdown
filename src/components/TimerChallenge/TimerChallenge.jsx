import { useState, useRef } from "react";
import ResultModal from "../ResultModal/ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();
    const [timerStarted, setTimerStarted] = useState(false);
    // const [timerExpired, setTimerExpired] = useState(false);

    function handleBtnClick() {
        if (timerStarted) {
            clearTimeout(timer.current);
            setTimerStarted(false);
        } else {
            timer.current = setTimeout(() => {
                // setTimerExpired(true);
                dialog.current.open();
            }, targetTime * 1000);

            setTimerStarted(true);
        }
    }

    return (
        <>
            <ResultModal ref={dialog} result="lost" targetTime={targetTime} />

            <section className="challenge">
                <h2>{title}</h2>
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
        </>
    );
}