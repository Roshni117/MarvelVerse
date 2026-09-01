import { useState } from "react";

function HeroVoting() {

    const [votes, setVotes] = useState({
        ironman: 0,
        thor: 0,
        spiderman: 0
    });

    function vote(hero) {

        setVotes({
            ...votes,
            [hero]: votes[hero] + 1
        });

    }

    return (

        <div>

            <h2>⚛️ REACT HERO VOTING</h2>

            <button onClick={() => vote("ironman")}>
                Iron Man - {votes.ironman}
            </button>

            <button onClick={() => vote("thor")}>
                Thor - {votes.thor}
            </button>

            <button onClick={() => vote("spiderman")}>
                Spider-Man - {votes.spiderman}
            </button>

        </div>

    );
}

export default HeroVoting;