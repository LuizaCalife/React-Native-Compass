import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

const Login = ({ navigation }) => {

  const [Email, setEmail] = useState()

  function ValidateEmail() 
  {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email))
    {
      navigation.navigate('Menu')
    }
    else{
      alert("Você inseriu um e-mail inválido")
    }
  }
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
        onChangeText={(Text) => setEmail(Text)}
        value={Email}
      />
      <TextInput
        style={styles.input}
        placeholder='senha'
        secureTextEntry
      />
      <TouchableOpacity
        onPress={ValidateEmail}
        style={styles.button}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Login 
