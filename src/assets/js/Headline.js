import React from 'react';

class Headline extends React.Component {
    render(){
        return <div className={"headline"}>
            <h1 className={"tic_tac_toe_headline"}>Tic Tac Toe</h1>
            <div className={"underline_header"}/>
        </div>;
    }
}

export default Headline;