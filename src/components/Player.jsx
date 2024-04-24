import { useState, useRef } from "react";

export default function Player() {
    const playerName = useRef();
    const [enteredPlayerName, setEnteredPlayerName] = useState('');

    function handleBtnClick() {
        setEnteredPlayerName(playerName.current.value);
    }

    return (
        <section id="player">
            <h2>Welcome {enteredPlayerName || 'unknown entity'}</h2>
            <p>
                <input type="text" ref={playerName} />
                <button type="button" onClick={handleBtnClick}>Set Name</button>
            </p>
        </section>
    );
}
