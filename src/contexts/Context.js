import React from "react";

export default React.createContext({
  game: {},
  level:{},
  marked: [],
  clean: [],
  bomb: String,
  setGame: () => {},
  setMarked: () => {},
  setClean: () => {},
  setBomb: ()=>{}
});