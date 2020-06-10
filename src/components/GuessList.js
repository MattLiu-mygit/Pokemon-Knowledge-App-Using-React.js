import React from 'react';
import Pokemon from './Pokemon';

const GuessList = (props) => {
    return <div className = 'PokeSearch'>
        Your guesses:
        <div>
            {props.pokeList.map(pokeList => <Pokemon key = {Pokemon.id} {...pokeList} setScore = {props.setScore}/>)}
        </div>
    </div>
}

export default GuessList;