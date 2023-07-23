import { useMemo, useState } from "react";
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
  const [clean, setClean] = useState([]);
  const [bomb, setBomb] = useState(null);

  


  let contextValue = {
    game,
    marked,
    level,
    clean,
    bomb,
    setGame,
    setMarked,
    setClean,
    setBomb
  };

  return (
    <Context.Provider value={contextValue}>
      <Timer />
      <table className={bomb && "fail"}>
        <tbody>
          {game.map((row, i) => (
            <Row index={i} key={`row-${i}`} />
          ))}
        </tbody>
      </table>
    </Context.Provider>
  );
};

export default GameBoard;
