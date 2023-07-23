import React from "react";

export default React.createContext({
  game: {},
  level:{},
  marked: [],
  clean: [],
  isPaused: Boolean,
  end: Boolean,
  bomb: String,
  setGame: () => {},
  setMarked: () => {},
  setClean: () => {},
  setBomb: ()=>{}
});