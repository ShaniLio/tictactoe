import { useState } from 'react'
import './App.css'
import TikTacToe from './Components/tiktactoe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TikTacToe/>
    </>
  )
}

export default App
