import Square from './Square.js';
import PlayerWon from './PlayerWon.js';
import NextPlayerWidget from './NextPlayerWidget.js';
import {checkOverride, checkTie, checkWinner} from './CheckGameMoves.js';
import {timeline_load, timeline_add, timeline_get_user} from './Timeline.js';
import Timeline from './Timeline.js';
import React from 'react';

// producing the game as well as logic
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      nextPlayer: 'X',
      winner: null,
      timeline:  []
    };
  }

    //rendering a 3 x 3 grid of squares
    render() {
        return <div className={"game_body"}>
            <div className={"headline_next_player"}>
                <NextPlayerWidget value={this.state.nextPlayer} />
            </div>
            <div className={"grid_tic_tac_toe"}>
                <div className={"grid_field"} >
                    <Square value={this.state.squares[0]} onClick = { () => this.handleClick(0)}/>
                </div>
                <div className={"grid_field"}>
                    <Square value={this.state.squares[1]} onClick = { () => this.handleClick(1)} />
                </div>
                <div className={"grid_field"}>
                    <Square value={this.state.squares[2]} onClick = { () => this.handleClick(2)}/>
                </div>
                <div className={"grid_field"}>
                    <Square value={this.state.squares[3]} onClick = { () => this.handleClick(3)}/>
                </div>
                <div className={"grid_field"}>
                    <Square value={this.state.squares[4]} onClick = { () => this.handleClick(4)}/>
                </div>
                <div className={"grid_field"}>
                    <Square value={this.state.squares[5]} onClick = { () => this.handleClick(5)}/>
                </div>
                <div className={"grid_field"}>
                    <Square value={this.state.squares[6]} onClick = { () => this.handleClick(6)}/>
                </div>
                <div className={"grid_field"}>
                    <Square value={this.state.squares[7]} onClick = { () => this.handleClick(7)}/>
                </div>
                <div className={"grid_field"}>
                    <Square value={this.state.squares[8]} onClick = { () => this.handleClick(8)}/>
                </div>
            </div>
            <Timeline value ={this.state.timeline} handler={this.setStateSquares} />
            <PlayerWon value={this.state.winner} handler={this.resetGame}/>
        </div>;
    }

    // handling the return of a timeline call event
    // updating the state of timeline, squares, nextPlayer and winner
    setStateSquares = (counter) => {
        this.setState({squares: timeline_load(this.state.timeline,counter)});
        if (counter + 1 !== this.state.timeline.length) {
            this.setState({timeline: this.state.timeline.slice(0, counter + 1)});
            this.setState({nextPlayer: timeline_get_user(this.state.timeline[counter])});
            this.setState({winner: null});
        }
    }

    //handling reset of the game
    resetGame = () =>{
        this.setState({squares: Array(9).fill(null)});
        this.setState({timeline: []});
        this.setState({nextPlayer: 'X'});
        this.setState({winner: null});
    }

    // updating the state of NextPlayer
    setStateNextPlayer() {
      if (this.state.nextPlayer === 'X') {
        this.setState({nextPlayer: 'O'});
      } else {
        this.setState({nextPlayer: 'X'});
      }
    }

    //handling the click event on a square
    handleClick(number) {

        //if the square is empty, the player can click on it
        let squares = [];
        if (checkOverride(this.state.squares, number) && this.state.winner === null) {
            squares = this.state.squares.slice();
            squares[number] = this.state.nextPlayer;
            this.setState({squares: squares});
            this.setStateNextPlayer();
            timeline_add(this.state.timeline,squares);
            console.log(this.state.timeline);
        }

        // checking if the game is a tie
        if (checkTie(squares) && this.state.winner === null && checkOverride(this.state.squares, number)) {
            this.setState({winner: 'tie'});
            this.setState({nextPlayer: 'tie'});
        }

        // checking if the player has won
        if (checkWinner(squares) && this.state.winner === null) {
            this.setStateNextPlayer();
            this.setState({winner: this.state.nextPlayer});
            this.setState({nextPlayer: 'winner'});
        }

    }
}
export default Game;