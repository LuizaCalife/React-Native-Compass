import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Bottonadd() {
  return (
    <View style={styles.Icone}>
      <Icon
        name='add-circle'
        color="#304ffe"
        size={60}
      />
    </View>
  )
}
const styles = StyleSheet.create({

  Icone: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}
)
