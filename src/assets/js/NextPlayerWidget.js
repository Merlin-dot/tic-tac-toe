import React from "react";

class NextPlayerWidget extends React.Component {

    nextPlayer = () => {
        if (this.props.value === "X") {
            return <p>It's player X's turn</p>;
        }else if(this.props.value === "O"){
            return <p>It's player O's turn</p>;
        }else{
            return <p>The game is over</p>;
        }
    }

    render() {
        return(
            <div className="nextPlayerWidget">
                {this.nextPlayer()}
            </div>
        );
    }
}

export default NextPlayerWidget;