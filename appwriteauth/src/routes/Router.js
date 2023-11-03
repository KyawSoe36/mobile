
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Loading from '../components/Loading';

//Routes
import { AuthStack } from './AuthStack';
import { AppStack } from './AppStack';

export const Router = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    if (isLoading) {
        return <Loading />
    }

    return (
        <NavigationContainer>
            {isLoggedIn ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}

