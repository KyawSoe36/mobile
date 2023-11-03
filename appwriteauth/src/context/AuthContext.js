import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react';

import AppwriteService from '../services/AppwriteService'

// Create a context
const MyContext = createContext();

const MyProvider = ({ children }) => {

    console.log("Check auth service", AppwriteService().getCurrentUser());

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const value = {
        appwrite: AppwriteService(),
        isLoggedIn,
        setIsLoggedIn: () => { }
    }


    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    );
}

export { MyProvider, MyContext }