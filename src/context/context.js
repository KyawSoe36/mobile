import React, { createContext } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {

     state = {
        stage:1,
        players:[],
        result:''
    }

    return (
        <MyContext.Provider value={{stateContext:this.state}}>
          { children }
        </MyContext.Provider>
      );

  };

export { MyContextProvider,MyContext };