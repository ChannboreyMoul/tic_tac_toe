import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TicTacToe from './components/Tictactoe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TicTacToe/>
    </>
  )
}

export default App
