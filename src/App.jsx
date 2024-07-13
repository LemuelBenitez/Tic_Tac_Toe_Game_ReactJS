import { useState } from "react";
import { WINNING_COMBOS } from "./components/data";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player"
import Log from "./components/Log";
import GameOver from "./components/GameOver";



const initialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

function activePlayerWho(turn){
  let currPlayer = 'X';
  if(turn.length > 0 && turn[0].player === 'X'){
    currPlayer ='O'
  }

  return currPlayer;
}

function App() {
  //const[activePlayer, setPlayer] = useState('X');
  const[turn, setTurn] = useState([]);
  const[p1, setP1] = useState("Player 1");
  const[p2,setP2] = useState("Player 2");

  let s1 = "X";
  let s2 = "O";

  let bv= "Edit"

  let activePlayer = activePlayerWho(turn)
  let gameBoard = [...initialGameBoard.map(array =>[...array])];
  let winner = false;

     for(const turns of turn){
    const{square, player} = turns;
    const{row, col} = square;

    gameBoard[row][col]= player;
   }

   for( const combo of WINNING_COMBOS){ //checking to see winner
    const firstSQCombo = gameBoard[combo[0].row][combo[0].col]
    const secondSQCombo = gameBoard[combo[1].row][combo[1].col]
    const thirdSQCombo = gameBoard[combo[2].row][combo[2].col]
  
    if(firstSQCombo && firstSQCombo === secondSQCombo
       && firstSQCombo === thirdSQCombo){
        winner = true;
       }
  }
  function changePlayer(rowIndex, colIndex){
  //  setPlayer(currPlayer => currPlayer === 'X' ? 'O':'X')
   setTurn(prev => {
    let currPlayer = activePlayerWho(prev);
    if(prev.length > 0 && prev[0].player === 'X'){
      currPlayer ='O'
    }
    const updatedTurn = [
      {square:{row: rowIndex, col: colIndex},
      player: currPlayer},...prev]
    return updatedTurn;
   })
  }

  function handleRestart(){
    setTurn([]);
  }

  return(
    <>
    <main>
      <div id="game-container">
      <ol id="players" className="highlight-player">
       <Player name={p1} symbol={s1} buttonValue={bv} isActive={activePlayer == 'X'}/>
       <Player name={p2} symbol={s2} buttonValue={bv} isActive={activePlayer == 'O'}/>
       </ol>
       {(winner) && <GameOver winner={turn ? turn[0].player : "z"} handleRestart= {handleRestart} turns={turn}/>}
         <GameBoard  
         onSelectSquare={changePlayer} 
        //  activePlayer={activePlayer}
         turn ={turn}
         board ={gameBoard}
         />
      </div>
      <Log turns={turn}/>
    </main>
    </>
  )
}

export default App
