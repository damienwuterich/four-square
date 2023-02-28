import React, { useState } from "react";
import "./App.sass";

function Button({ cell, targetCell, onClick }) {
  return (
    <button
      className={`cell${targetCell} ${cell === targetCell ? "invisible" : ""}`}
      onClick={() => onClick(cell, targetCell)}
    />
  );
}

const cellNumbers = [0, 1, 2, 3];

function Cell({ cell, selectedCell, onButtonClick }) {
  return (
    <div className={`cell cell${cell}`}>
      <div
        className={`buttons grid2x2 ${
          cell === selectedCell ? "" : "invisible"
        }`}
      >
        {cellNumbers.map((targetCell) => (
          <Button cell={cell} targetCell={targetCell} onClick={onButtonClick} />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [selectedCell, setSelectedCell] = useState(0);

  function handleClick(cell, targetCell) {
    if (cell === targetCell) return;
    setSelectedCell(targetCell);
  }

  return (
    <div className="App grid2x2">
      {cellNumbers.map((cell) => (
        <Cell
          cell={cell}
          selectedCell={selectedCell}
          onButtonClick={handleClick}
        />
      ))}
    </div>
  );
}
