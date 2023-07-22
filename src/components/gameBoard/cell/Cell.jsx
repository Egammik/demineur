import { useContext } from "react";
import "./cell.css";
import Context from "../../../contexts/Context";

const Cell = ({ rowIndex, index }) => {
  const { game, clean, setClean, level, bomb, setMarked, setBomb, marked } =
    useContext(Context);
  const rowId = parseInt(rowIndex);
  const cellId = parseInt(index);

  let className = "";

  let value = "";

  if (clean.includes(`${rowId}-${cellId}`)) {
    className += "clean ";
    value = game[rowId][cellId];
  }

  if (marked.includes(`${rowId}-${cellId}`)) {
    className += "marked ";
    value = "?";
  }

  if (bomb && game[rowId][cellId] === -1) {
    className += "fail ";
    value = "X";
  }

  const checkAround = (y, x, tmp) => {
    let voidCell = [];
    for (let j = x - 1; j <= x + 1; j++) {
      if (j !== -1 && j !== level.columns) {
        if (!clean.includes(`${y}-${j}`) && !tmp.includes(`${y}-${j}`)) {
          tmp.push(`${y}-${j}`);
          !game[y][j] && voidCell.push({ y: y, x: j });
        }
        for (let k = y - 1; k <= y + 1; k++) {
          if (k !== -1 && k !== level.lines) {
            if (!clean.includes(`${k}-${j}`) && !tmp.includes(`${k}-${j}`)) {
              tmp.push(`${k}-${j}`);
              !game[k][j] && voidCell.push({ y: k, x: j });
            }
          }
        }
      }
    }
    return { tmp, voidCell };
  };

  const checkCleanBorad = (y, x, tmp) => {
    let voidCell = [{ y: y, x: x }];

    while (voidCell.length > 0) {
      let arr = [];
      for (let i = 0; i < voidCell.length; i++) {
        let cell = voidCell[i];
        let result = checkAround(cell.y, cell.x, tmp);
        tmp = [...result.tmp];
        arr = [...arr, ...result.voidCell];
      }
      voidCell = arr;
    }
    setClean((prev) => [...prev, ...tmp]);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (bomb || clean.includes(`${rowId}-${cellId}`)) {
      return;
    }
    if (game[rowId][cellId] !== -1) {
      const cell = `${rowId}-${cellId}`;
      if (!game[rowId][cellId]) {
        checkCleanBorad(rowId, cellId, [cell]);
      } else {
        setClean((prev) => [...prev, cell]);
      }
    } else {
      setBomb(`${rowId}-${cellId}`);
    }
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    if (bomb) {
      return;
    }
    if (marked.includes(`${rowId}-${cellId}`)) {
      setMarked(marked.filter((e) => e !== `${rowId}-${cellId}`));
    } else {
      setMarked([...marked, `${rowId}-${cellId}`]);
    }
  };

  return (
    <td
      className={className}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
    >
      {value}
    </td>
  );
};

export default Cell;
