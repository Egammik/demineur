import { useContext } from "react";
import Context from "../../../contexts/Context";
import Cell from "../cell/Cell";

const Row = ({index}) => {
  const { game } = useContext(Context);
  const rowId = parseInt(index);

  return (
    <tr>
      {game[rowId].map((cell, i) => (
        <Cell rowIndex={rowId} index={i} key={`cell${rowId}-${i}`}/>
      ))}
    </tr>
  );
};

export default Row;
