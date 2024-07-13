import { useState } from "react"

// const initialGameBoard = [
//     [null,null,null],
//     [null,null,null],
//     [null,null,null]
// ]
export default function GameBoard({onSelectSquare, turn,board}){
//    let gameBoard = initialGameBoard;

//    for(const turns of turn){
//     const{square, player} = turns;
//     const{row, col} = square;

//     gameBoard[row][col]= player;
//    }
    // const[gameBoard, setBoard] = useState(initialGameBoard);

    // function handleSelectField(rowIndex,colIndex){
    //  onSelectSquare(); 
    //  setBoard((prevGameBoard)=>{
    //    const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray] )]
    //        updatedBoard[rowIndex][colIndex] = activePlayer;
    //        return updatedBoard;
    //   })
    // }

    return(
        <ol id="game-board">
            {board.map((row,rowIndex) =>(
            <li key={rowIndex} >
            <ol>
            {row.map((col, colIndex) => <li key={colIndex}>
            <button onClick={() => onSelectSquare(rowIndex,colIndex)} disabled={col !== null}>{col}</button>
            </li>)}

            </ol>
            </li>
           ) )}
        </ol>
    )
}