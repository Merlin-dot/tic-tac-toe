import './assets/style/board.css';
import Headline from './assets/js/Headline.js';
import Game from './assets/js/Game.js';
import React from 'react';

class Board extends React.Component{

    // rendering the game site
    render() {
        return (
            <div className={'tic_tac_toe_game'}>
                <Headline/>
                <Game/>
            </div>
        )
    }
}
export default Board;