import React from 'react'
import { useState,useRef } from 'react'
import circle_icon from "../Assets/circle.png"
import cross_icon from "../Assets/cross.png"

let data = ["", "", "", "", "", "", "", "", ""]
function TikTacToe() {

  let [count, setcount] = useState(0)
  let [lock, setlock] = useState(false)
  const titleref = useRef(false)
  const box1 = useRef(false)
  const box2 = useRef(false)
  const box3 = useRef(false)
  const box4 = useRef(false)
  const box5 = useRef(false)
  const box6 = useRef(false)
  const box7 = useRef(false)
  const box8 = useRef(false)
  const box9 = useRef(false)
  let box_array = [box1, box2, box3, box4, box5,box6, box7, box8, box9]
  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src="${cross_icon}">`
      data[num] = "x"
      setcount(++count)
    } else {
      e.target.innerHTML = `<img  src="${circle_icon}">`
      data[num] = "o"
      setcount(++count)
    }
    checkwin()
  }
  const checkwin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2])
    }
    else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5])
    }
    else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8])
    }
    else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6])
    }
    else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7])
    }
    else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8])
    }
    else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8])
    }
    else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2])
    }
    else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6])
    }
    
  }
  const won = (winner) => {
    setlock(true);
    if (winner === "x") {
      titleref.current.innerHTML = "Player 1 Wins!"
    }
    else if (winner === "o") {
      titleref.current.innerHTML = "Player 2 Wins!"
    }
  }
 const reset = ()=>{
   setlock(false)
   data = ["", "", "", "", "", "", "", "", ""]
   titleref.current.innerHTML = "Tik Tac Toe Game in React"
   box_array.map((box) => {
     box.current.innerHTML = ""
   })
 }
  return (
    <>
      <div className='container'>
        <h2 className='text-2xl mb-1' ref={titleref}>Tik Tac Toe Game in <span className='text-blue-700 font-medium '>React</span> </h2>
        {/* Board Div */}
        <div className='Board flex h-[600px] w-[550px] m-auto gap-2 mt-2'>
          {/* Row 1 Div */}
          <div className='Row1'>
            <div className='Boxes h-[180px] w-[180px] flex bg-gray-700 border border-indigo-600 rounded-2xl mb-2'ref={box1} onClick={(e) => { toggle(e, 0) }}></div>
            <div className='Boxes h-[180px] w-[180px] flex bg-gray-700 border border-indigo-600 rounded-2xl mb-2'ref={box2} onClick={(e) => { toggle(e, 1) }}></div>
            <div className='Boxes h-[180px] w-[180px] flex bg-gray-700 border border-indigo-600 rounded-2xl' ref={box3} onClick={(e) => { toggle(e, 2) }}></div>
          </div>
          {/* Row 2 Div */}
          <div className='Row2 '>
            <div className='Boxes h-[180px] w-[180px] flex bg-gray-700 border border-indigo-600 rounded-2xl mb-2'ref={box4} onClick={(e) => { toggle(e, 3) }}></div>
            <div className='Boxes h-[180px] w-[180px] flex bg-gray-700 border border-indigo-600 rounded-2xl mb-2'ref={box5} onClick={(e) => { toggle(e, 4) }}></div>
            <div className='Boxes h-[180px] w-[180px] flex bg-gray-700 border border-indigo-600 rounded-2xl'ref={box6} onClick={(e) => { toggle(e, 5) }}></div>
          </div>
          {/* Row 3 Div */}
          <div className='Row3 '>
            <div className='Boxes h-[180px] w-[180px] flex bg-gray-700 border border-indigo-600 rounded-2xl mb-2'ref={box7} onClick={(e) => { toggle(e, 6) }}></div>
            <div className='Boxes h-[180px] w-[180px] flex bg-gray-700 border border-indigo-600 rounded-2xl mb-2'ref={box8} onClick={(e) => { toggle(e, 7) }}></div>
            <div className='Boxes h-[180px] w-[180px] flex bg-gray-700 border border-indigo-600 rounded-2xl'ref={box9} onClick={(e) => { toggle(e, 8) }}></div>
          </div>
        </div>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-7 border border-blue-500 hover:border-transparent rounded" onClick={()=>{reset()}}>
          Reset
        </button>
      </div>
    </>
  )
}

export default TikTacToe