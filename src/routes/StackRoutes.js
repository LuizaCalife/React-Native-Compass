import React from 'react';
import Login from '../screens/Login/index.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from '../routes/TabBottomRoutes';
import AddMood from '../screens/AddMood/index.js';

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='Menu' component={MyTabs}/>
                <Stack.Screen name='AddMood' component={AddMood}
                options={{presentation:'modal',animation:'slide_from_bottom'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default StackRoutes