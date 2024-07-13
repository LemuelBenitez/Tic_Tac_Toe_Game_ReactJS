export default function GameOver({winner, handleRestart, turns}){

    return(
        <div id="game-over">
         <h2>Game Over!</h2>
        {winner ? <p>{winner} Won !</p> 
          :
          <p>It's A Draw !</p> 
        }
         <p><button onClick={handleRestart}>Rematch ?</button></p>
        </div>
    )
}