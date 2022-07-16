import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Bottontres({ focused, color }) {
  return (
    <View style={[styles.Iconezinho, { backgroundColor: focused ? '#304ffe' : 'rgba(48,79,254,0.1)' }]}>
      <Icon
        name='menu'
        color={color}
        size={35}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  Iconezinho: {
    backgroundColor: '#304ffe',
    height: 50,
    width: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12
  }
}
)
