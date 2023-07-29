import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Onboarding, Dashboard } from "./screens"

const AppStackNavigator = () => {

    const AppStack = createNativeStackNavigator();

    return (
        <AppStack.Navigator
            screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="Onboarding" component={Onboarding} />
            <AppStack.Screen name="Home" component={Home} />
            <AppStack.Screen name="Dashboard" component={Dashboard} />
        </AppStack.Navigator>
    )
}

export default AppStackNavigator