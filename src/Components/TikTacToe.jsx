import React from 'react';
import { useState, useRef } from 'react';
import circle_icon from "../Assets/circle.png";
import cross_icon from "../Assets/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];

function TikTacToe() {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  const titleRef = useRef(null);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);
  let boxArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src="${cross_icon}" alt="X">`;
      data[num] = "x";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src="${circle_icon}" alt="O">`;
      data[num] = "o";
      setCount(++count);
    }
    checkWin();
  };

  const checkWin = () => {
    const winningConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (let condition of winningConditions) {
      const [a, b, c] = condition;
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        won(data[a]);
        return;
      }
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = "Player 1 Wins!";
    } else if (winner === "o") {
      titleRef.current.innerHTML = "Player 2 Wins!";
    }
  };

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = "Tik Tac Toe Game in React";
    boxArray.forEach((box) => {
      box.current.innerHTML = "";
    });
  };

  return (
    <div className="container p-4">
      <h2 className="text-2xl mb-4 text-center" ref={titleRef}>
        Tik Tac Toe Game in <span className="text-blue-700 font-medium">React</span>
      </h2>
      <div className="board grid grid-cols-3 gap-0 max-w-md mx-auto"> {/* Set gap to 0 */}
        {boxArray.map((box, index) => (
          <div
            key={index}
            className="box bg-gray-700 border border-indigo-600 flex items-center justify-center h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40"
            ref={box}
            onClick={(e) => toggle(e, index)}
          ></div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-7 border border-blue-500 hover:border-transparent rounded"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default TikTacToe;