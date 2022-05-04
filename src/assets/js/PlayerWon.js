import React from "react";

class PlayerWon extends React.Component {

    render() {
        if (this.props.value != null && this.props.value !== "tie"){
            return (
                <div className={"player-won"}>
                    <p>Player {this.props.value} won!🎆</p>
                    <button className={"player-won-refresh"} onClick={()=>this.props.handler()}>New Game</button>
                </div>
            );
        }
        else if (this.props.value === "tie"){
            return (
                <div className={"player-won"}>
                    <p>It's a tie</p>
                    <button className={"player-won-refresh"} onClick={()=>this.props.handler()}>New Game</button>
                </div>
            )
        }
    }
}

export default PlayerWon;