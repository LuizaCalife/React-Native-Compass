import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserProfile from '../screens/Profile';
import EditProfile from '../screens/EditProfile/telaEdit';

const StackEdit = createNativeStackNavigator();

const StackPerfilRoutes = () => {
    return (
        <StackEdit.Navigator initialRouteName='UserProfile' screenOptions={{ headerShown: false }}>
            <StackEdit.Screen name='UserProfile' component={UserProfile} />
            <StackEdit.Screen name='EditProfile' component={EditProfile} />
        </StackEdit.Navigator>
    )
}
export default StackPerfilRoutes