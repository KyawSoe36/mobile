import React, { createContext, useState, useEffect } from 'react';
import Toast from 'react-native-toast-message';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [state, setState] = useState({
    stage: 1,
    players: ['Test1', 'Test2', 'Test3'],
    result: ''
  });

  const addPlayerHandler = (name) => {
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
    const { players } = state;
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

  generateLooser = () => {
    const { players } = state;
    setState((prevState) => ({
      ...prevState, result: players[Math.floor(Math.random() * players.length)]
    }));
  }

  useEffect(() => {
    if (state.stage === 2) {
      generateLooser();
    }
  }, [state.stage]);

  resetGame = () => {
    setState({
      stage: 1,
      players: ['Test1', 'Test2', 'Test3'],
      result: ''
    })
  }

  return (
    <MyContext.Provider value={{
      state,
      addPlayer: addPlayerHandler,
      removePlayer: removePlayerHandler,
      nextHandler: nextHandler,
      resetGame: resetGame,
      getNewLooser: generateLooser,
    }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContextProvider, MyContext };
