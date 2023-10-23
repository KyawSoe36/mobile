import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [state, setState] = useState({
    stage: 2,
    players: [],
    result: ''
  });

  const addPlayerHandler = (name) => {
    console.log("Add player handler", name);
    setState((prevState) => ({
      ...prevState,
      players: [...prevState.players, name]
    }));
  };

  removePlayerHandler = (idx) => {
    let newArray = state.players;
    newArray.splice(idx, 1);
    setState({ players: newArray });
  }

  return (
    <MyContext.Provider value={{ state, addPlayer: addPlayerHandler, removePlayer: removePlayerHandler }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContextProvider, MyContext };
