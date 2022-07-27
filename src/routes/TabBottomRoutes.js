import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserProfile from '../screens/TresLinhas';
import Bottonadd from '../componentesB/Bottonadd';
import Bottontres from '../componentesB/Bottontreslines';
import Bottonhouse from '../componentesB/Bottonmenu';
import StackModalScreen from './StackModal';
import StackAddRoutes from './StackAddRoutes';

const Tab = createBottomTabNavigator();

const Placeholder = () => <View />

function MyTabs() {
   return (
      <Tab.Navigator 
      initialRouteName='Home'
       screenOptions={{
         headerShown: false,
         tabBarShowLabel: false,
         tabBarActiveTintColor: 'white',
         tabBarInactiveTintColor: '#304ffe',
         tabBarStyle: {
            height: 90,
            borderTopColor: '#c4c4c4',
            borderTopWidth: 2,
            backgroundColor: '#ffff',
         },
      }}>
         <Tab.Screen
            name='Home'
            component={StackModalScreen}
            options={{
               tabBarIcon: ({ focused, color }) => (
                  <Bottonhouse focused={focused} color={color} />
               )
            }}
         />
         <Tab.Screen
            name='Adicionar'
            component={Placeholder}
            options={{
               tabBarIcon: () => (
                  <Bottonadd></Bottonadd>
               )
            }}
            listeners={({ navigation }) => ({
               tabPress: (e) => {
                 e.preventDefault()
                 navigation.navigate('AddMood')
               },
             })}
         />
         <Tab.Screen
            name='TresLinhas'
            component={UserProfile}
            options={{
               tabBarIcon: ({ focused, color }) => (
                  <Bottontres focused={focused} color={color} />
               )
            }}
         />
      </Tab.Navigator>
   )
}
export default MyTabs