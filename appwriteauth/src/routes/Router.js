
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Loading from '../components/Loading';

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Login from '../screens/Login'
import Signup from '../screens/Signup'


const Stack = createNativeStackNavigator();

export const Router = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    if (isLoading) {
        return <Loading />
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login"
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerBackTitleVisible: false,
                }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name='Home' component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

