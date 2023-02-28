import "./App.sass";

function Button() {
  return <button>button</button>;
}

function Cell({ position }) {
  return (
    <div className={`cell cell${position}`}>
      <div className="buttons grid2x2">
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App grid2x2">
      <Cell position={0} />
      <Cell position={1} />
      <Cell position={2} />
      <Cell position={3} />
    </div>
  );
}
