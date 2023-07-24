import React from "react";

export default React.createContext({
  game: {},
  level: {},
  marked: [],
  asked: [],
  clean: [],
  bomb: String,
  handleClick: () => {},
  handleContextMenu: () => {},
  setMarked: () => {},
  setAsked: () => {},
});
