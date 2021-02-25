import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
    {props.value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isNext, setIsNext] = useState('X')

  function toggleIsNext() {
    setIsNext(isNext === 'X' ? 'O' : 'X');
  }

  function clickBtn(i) {
    if(squares[i] === null){
      var tmp = squares.slice();
      toggleIsNext()
      tmp[i] = isNext;
      setSquares(tmp)
    }
  }

  function renderSquare(i) {
    return <Square value={squares[i]} onClick={ ()=>clickBtn(i) } />;
  }


  const status = 'Next player: ' + isNext;

  return (
    <div>
    <div className="status">{status}</div>
    <div className="board-row">
    {renderSquare(0)}
    {renderSquare(1)}
    {renderSquare(2)}
    </div>
    <div className="board-row">
    {renderSquare(3)}
    {renderSquare(4)}
    {renderSquare(5)}
    </div>
    <div className="board-row">
    {renderSquare(6)}
    {renderSquare(7)}
    {renderSquare(8)}
    </div>
    </div>
  );
}

function Game() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
 
