import React from "react";

class PlayerWon extends React.Component {

    refreshPage() {
        window.location.reload(false);
    }


    render() {
        if (this.props.value != null && this.props.value !== "tie"){
            return (
                <div className={"player-won"}>
                    <p>Player {this.props.value} won!🎆</p>
                    <button className={"player-won-refresh"} onClick={this.refreshPage}>New Game</button>
                </div>
            );
        }
        else if (this.props.value === "tie"){
            return (
                <div className={"player-won"}>
                    <p>It's a tie</p>
                    <button className={"player-won-refresh"} onClick={this.refreshPage}>New Game</button>
                </div>
            )
        }
    }
}

export default PlayerWon;