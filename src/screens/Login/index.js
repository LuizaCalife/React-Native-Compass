import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

const Login = ({ navigation }) => {
  return (
    <View style={styles.Home}>
      <Image
        source={require('./login.png')
        }
        style={styles.Logo}
      />
      <TextInput
        style={styles.input}
        placeholder='e-mail'
      />
      <TextInput
        style={styles.input}
        placeholder='senha'
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Menu')}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>

    </View>
  )
}
export default Login 
