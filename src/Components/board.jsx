import React from "react";
import Square from "./square";
import { useState } from "react";
// import { createLogicalAnd } from "typescript";

//                                                                first function  
const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [Xturn, setXturn] = useState(true);
  const CheckWinner = () => {
    const isWinner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of isWinner) {
      const [a, b, c] = logic;

      if (state[a] !== null && state[a] == state[b] && state[a] == state[c]) {
        return state[a];
      } else if (
        state[a] && state[b] && state[c] !== null &&
        state[a] !== state[b] &&
        state[a] !== state[c])
       {
        return "NoBody";
      }
    }
    return false;
  };
  const youWin = CheckWinner();

  // console.log(youWin);                                 second Function
  
  const HandleClick = (index) => {
    if (state[index] !== null) return;
    //  if (Xturn !== "x" && "o") return;
    const copyState = [...state];
    // console.log(copyState);
    copyState[index] = Xturn ? "x" : "o";
    setState(copyState);
    setXturn(!Xturn);
  };
  return (
    <div className="Board">
      {/* <h1>hello</h1> */}
      {youWin ? (
        <> 
        <div className="playagain">
          <h1>
            <spane>{youWin}</spane> won the match.
          </h1>
          <button onClick={() => setState(Array(9).fill(null))}>
            <p> play again</p>
          </button>
          </div>
        </>
      ) : (
        <> 
          <h1>
            Its <spane> {Xturn ? "X" : "O"}</spane>'s turn.
          </h1>
          <div>
          <div className="Row">
            <Square onClick={() => HandleClick(0)} value={state[0]} />
            <Square onClick={() => HandleClick(1)} value={state[1]} />
            <Square onClick={() => HandleClick(2)} value={state[2]} />
          </div>
          <div className="Row">
            <Square onClick={() => HandleClick(3)} value={state[3]} />
            <Square onClick={() => HandleClick(4)} value={state[4]} />
            <Square onClick={() => HandleClick(5)} value={state[5]} />
          </div>
          <div className="Row">
            <Square onClick={() => HandleClick(6)} value={state[6]} />
            <Square onClick={() => HandleClick(7)} value={state[7]} />
            <Square onClick={() => HandleClick(8)} value={state[8]} />
          </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Board;