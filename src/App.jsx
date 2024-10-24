import { useState } from 'react'
import './App.css'
import Board from './components/Board'

function App() {

  return (
    <>
      <div className="head">
        <p style={{margin: "25px 0px 0px 0px"}}>Tic Tac Toe Game</p>
      </div>
      <Board/>
    </>
  )
}

export default App
