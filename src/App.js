import "./App.sass";

function Cell({ position }) {
  return <div className={`cell cell${position}`}></div>;
}

export default function App() {
  return (
    <div className="App">
      <Cell position={0} />
      <Cell position={1} />
      <Cell position={2} />
      <Cell position={3} />
    </div>
  );
}
