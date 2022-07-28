import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Add from '../screens/CardMood/index.js';
import ModalScreen from '../screens/QuartaTela/index.js';

const StackModal = createNativeStackNavigator();

const StackModalScreen = () => {
    return (
        <StackModal.Navigator initialRouteName='AddScreen' screenOptions={{ headerShown: false }}>
            <StackModal.Screen name='AddScreen' component={Add} />
            <StackModal.Screen name='ModalScreen' component={ModalScreen} />
        </StackModal.Navigator>
    )
}
export default StackModalScreen