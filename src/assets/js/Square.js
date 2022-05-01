import React from 'react';
import X from "./../symbols/X.svg";
import O from"./../symbols/O.svg";

class Square extends React.Component {

    // changing the symbol in the square to X or O
    current_symbol = () => {
        console.log(this.props.value);
        if (this.props.value === "X") {
            return <div><img className={"symbol"} src={X} alt="X" /></div>;
        }else if (this.props.value === "O") {
            return <div><img className={"symbol"} src={O} alt="O" /></div>;
        } else {
            return "";
        }
    }
    // returning the square with the current symbol
    render() {
        return (<div className={"inner_field"} onClick={() => this.props.onClick()}>
            {this.current_symbol()}
        </div>)
    }
}

export default Square;