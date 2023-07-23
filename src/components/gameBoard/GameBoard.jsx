import { useEffect, useMemo, useState } from "react";
import "./GameBoard.css";
import Timer from "../timer/Timer";
import { dataGameBoard } from "../../utils/gameBoardUtils";
import Context from "../../contexts/Context";
import Row from "./row/Row";

/**
 *
 * @param {Object} level
 * @returns
 */
const GameBoard = ({ level }) => {
  const [game, setGame] = useState(useMemo(() => dataGameBoard(level), [level]));
  const [marked, setMarked] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const [end, setEnd] = useState(false);
  const [clean, setClean] = useState([]);
  const [bomb, setBomb] = useState(null);

  useEffect(()=> {
    if (bomb || (clean.length + level.bombs ) === (level.columns * level.lines)) {
      setEnd(true)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bomb, clean])


  let contextValue = {
    game,
    marked,
    level,
    clean,
    isPaused,
    end,
    bomb,
    setGame,
    setMarked,
    setClean,
    setBomb
  };

  return (
    <Context.Provider value={contextValue}>
      <Timer end={end} isPaused={isPaused} setIsPaused={setIsPaused}/>
      <table className={bomb && "fail"}>
        <tbody className={isPaused ? "tablePause" : ""}>
          {game.map((row, i) => (
            <Row index={i} key={`row-${i}`} />
          ))}
        </tbody>
      </table>
    </Context.Provider>
  );
};

export default GameBoard;
