import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, AppRegistry } from 'react-native';
import styles from './styles';
import api from '../../services/api';
import style from '../AddMood/style';
import Icon from 'react-native-vector-icons/Ionicons';

const Login = ({ navigation }) => {

  const [hidePass, setHidePass] = useState(true);

  const [Email, setEmail] = useState()

  const [Password, setPassword] = useState()

  const [errado, setErrado] = useState(false)

  function ValidateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {
      return true
    }
    else {
      return false
    }
  }

  function validationInput() {
    if (ValidateEmail()) {
      validationApi()
    }
    else {
      console.log('ta errado')
      setErrado(true)
    }
  }

  async function validationApi() {
    try {
      await api.post('/oauth/token', {
        'grant_type': 'password',
        'email': Email,
        'password': Password,
        'client_id': '3mGWGtxIEKyhq_HGG4cq6hsTOd_zn1SuTD3_cafjUPc',
        'client_secret': '389JLi1Nd6DQ_soCI85C57ueTlMZ_JR7pRq6SJ0GaB0',
      }).then(Response => {
        navigation.navigate('Menu')
        console.log(Response.data.access_token)
        api.defaults.headers.common['Authorization'] = `Bearer ${Response.data.access_token}`

      })
    }
    catch (error) {
      console.log(error)
      setErrado(true)
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
      <View style={styles.input}>
      <TextInput
        placeholder='senha'
        secureTextEntry={hidePass}
        onChangeText={(Text) => setPassword(Text)}
        value={Password}   
      />
      <TouchableOpacity style={style.eye}
          onPress={() => setHidePass(!hidePass)}
        >
          <Icon name={hidePass ? "eye" : 'eye-off'} color='#969696' size={20} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={validationInput}
        style={styles.button}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
      <View style={styles.Error}>
        <Text style={{ display: errado ? 'flex' : 'none', color: '#fff' }}>Seu e-mail ou senha estão incorretos</Text>
      </View>
    </View>
  )
}
export default Login 
