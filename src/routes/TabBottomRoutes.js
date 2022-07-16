import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from '../screens/Home';
import TresLines from '../screens/TresLinhas';
import Bottonadd from '../componentesB/Bottonadd';
import Bottontres from '../componentesB/Bottontreslines';
import Bottonhouse from '../componentesB/Bottonmenu';
import StackModalScreen from './StackModal';

const Tab = createBottomTabNavigator();

function MyTabs() {
   return (
      <Tab.Navigator screenOptions={{
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
            component={Menu}
            options={{
               tabBarIcon: () => (
                  <Bottonadd></Bottonadd>
               )
            }}
         />
         <Tab.Screen
            name='TresLinhas'
            component={TresLines}
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