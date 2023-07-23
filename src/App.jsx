import { useState } from "react";
import "./App.css";
import GameBoard from "./components/gameBoard/GameBoard";
import LevelChoice from "./components/levelChoice/LevelChoice";

function App() {
  const [level, setLevel] = useState(null);

  const handleClick = ()=>{
    setLevel(null)
  }

  return (
    <>
      <h1>Démineur</h1>
      {level ? (
        <>
          <GameBoard level={level} />
          <button onClick={handleClick}>Changer de niveau</button>
        </>
      ) : (
        <LevelChoice setLevel={setLevel} />
      )}
    </>
  );
}

export default App;
