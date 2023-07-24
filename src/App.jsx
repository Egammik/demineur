import { useEffect, useState } from "react";
import "./App.css";
import GameBoard from "./components/gameBoard/GameBoard";
import LevelChoice from "./components/levelChoice/LevelChoice";

function App() {
  const [level, setLevel] = useState(null);
  const [reset, setreset] = useState(null);

  useEffect(() => {
    if (reset) {
      setLevel({ ...reset });
      setreset(null);
    }
  }, [reset, level]);

  const handleClick = () => {
    setLevel(null);
  };

  const handleReset = () => {
    setreset({ ...level });
    setLevel(null);
  };

  return (
    <>
      <h1>Démineur</h1>
      {level ? (
        <>
          <GameBoard level={level} />
          <div>
            <button onClick={handleClick}>Changer de niveau</button>
            <button onClick={handleReset} className="reset">
              &#10227;
            </button>
          </div>
        </>
      ) : (
        !reset && <LevelChoice setLevel={setLevel} />
      )}
    </>
  );
}

export default App;
