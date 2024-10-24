import React, {useState, useEffect} from 'react'
import Square from './Square'
import Winner from './Winner'

const Board = () => {
    const [state, setstate] = useState(Array(9).fill(null))
    const [player, setplayer] = useState(true)
    const [win, setwin] = useState(false)
    const [draw, setdraw] = useState(true)
    const handleClick= (index) =>{
        if (win === true || state[index] !== null) {
            return;
        }
        const copystate = [...state]
        copystate[index] = player ? "O" : "X"
        setplayer(!player)
        setstate(copystate)
    }
    
    const checkWinner= () =>{
        const logic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]
        setwin(false)
        logic.forEach(element => {
            const [a,b,c] = element;
            if (state[a] !== null && state[a] === state[b] && state[b]===state[c]) {
                setwin(true)
                return;
            }   
        });
        setdraw(true)
        for (let i = 0; i < 9; i++) {
            // const element = array[i];
            if (state[i] === null) {
                setdraw(false)
                return;
            }
        }
    }
    const reset = () =>{
        setstate(Array(9).fill(null))
        setplayer(true)
    }
    useEffect(() => {
      checkWinner();
    }, [player])
    return (
        <>
        <div className="turn">
            <h2 style={{color:"#198754", padding: "10px 0 5px 0"}}>{player ? "Player1" : "Player2"} to move</h2>
        </div>
        <div className='board'style={{padding:"1.6vw"}}>
            <div className="board-row">
                <Square onClick={()=> handleClick(0)} value={state[0]}/>
                <Square onClick={()=> handleClick(1)} value={state[1]}/>
                <Square onClick={()=> handleClick(2)} value={state[2]}/>
            </div>
            <div className="board-row">
                <Square onClick={()=> handleClick(3)} value={state[3]}/>
                <Square onClick={()=> handleClick(4)} value={state[4]}/>
                <Square onClick={()=> handleClick(5)} value={state[5]}/>
            </div>
            <div className="board-row">
                <Square onClick={()=> handleClick(6)} value={state[6]}/>
                <Square onClick={()=> handleClick(7)} value={state[7]}/>
                <Square onClick={()=> handleClick(8)} value={state[8]}/>
            </div>
            {/* <button className="play btn btn-outline-success" onClick={() => reset()}>Play Again</button> */}
        </div>

            {win ?<div className="draw"> <h1>Congratulations, {player ? "Player2" : "Player1"} is the Winner!</h1> <button className="play btn btn-outline-success" onClick={() => reset()}>Play Again</button> </div>: ""}
            {draw && (!win) ? <div className="draw"><h1>It is a Draw</h1><button className="play btn btn-outline-success" onClick={() => reset()}>Play Again</button></div> : ""}
        </>

    )
}

export default Board
