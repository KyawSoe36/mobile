import React, { createContext, useState } from 'react';
import Toast from 'react-native-toast-message';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [state, setState] = useState({
    stage: 1,
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

  nextHandler = () => {
    const players = state.players;
    if (players.length < 2) {
      Toast.show({
        type: 'success',
        text1: 'Hello',
        text2: 'This is some something 👋'
      });
    } else {
      setState((prevState) => ({ ...prevState, stage: 2 }));
    }

  }

  return (
    <MyContext.Provider value={{
      state,
      addPlayer: addPlayerHandler,
      removePlayer: removePlayerHandler,
      nextHandler: nextHandler
    }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContextProvider, MyContext };
