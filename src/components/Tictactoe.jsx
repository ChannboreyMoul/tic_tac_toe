import React, { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');

  const handleSquareClick = (index) => {
    const updatedBoard = [...board];
    updatedBoard[index] = currentPlayer;
    setBoard(updatedBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const renderSquare = (index) => {
    return (
      <button
        className="w-16 h-16 border border-gray-400 flex items-center justify-center text-4xl font-bold text-gray-600 focus:outline-none"
        onClick={() => handleSquareClick(index)}
        disabled={board[index] !== null}
      >
        {board[index]}
      </button>
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Tic Tac Toe</h1>
        <div className="grid grid-cols-3 gap-4">
          {board.map((_, index) => (
            <div key={index}>{renderSquare(index)}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;