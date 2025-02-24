import { useState } from 'react'
import './App.css'
import TikTacToe from '../Components/TikTacToe'
// import TikTacToe from './Components/TikTacToe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TikTacToe/>
    </>
  )
}

export default App
