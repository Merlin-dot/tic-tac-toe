

// checking weather or not the requested field is empty
export function checkOverride(square, position) {
    return square[position] === null;
}

// checking if someone won
export function checkWinner(square) {
    const winPossibilities = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6]
    ];
    // iterate through all the possible winning combinations
    for (let counter = 0; counter < winPossibilities.length; counter++) {
        const winPositions = winPossibilities[counter];
        const winPosition0 = winPositions[0];
        const winPosition1 = winPositions[1];
        const winPosition2 = winPositions[2];

        // checking if first is filled and the same as the second and the third
        if (square[winPosition0] != null && square[winPosition0] === square[winPosition1] && square[winPosition0] === square[winPosition2]){
            return square[winPosition0];
        }
    }
    return null;
}

// checking if the game is over
export function checkTie(square) {
    return !square.includes(null);

}


