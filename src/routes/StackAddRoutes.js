import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from '../screens/Casinha/index.js';
import AddMood from '../screens/AddMood/index.js';

const StackAdd = createNativeStackNavigator();

const StackAddRoutes = () => {
    return (
        <StackAdd.Navigator initialRouteName='Menu' screenOptions={{ headerShown: false }}>
            <StackAdd.Screen name='AddMood' component={AddMood} />
        </StackAdd.Navigator>
    )
}
export default StackAddRoutes