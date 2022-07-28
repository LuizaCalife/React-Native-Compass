import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, Modal } from 'react-native';
import happy from '../../assets/humores/happy.png';
import { useNavigation } from '@react-navigation/native';
import style from './style';

const Email = (' FULANA@GMAIL.COM');
const Genero = (' FEMININO');
const DataNasc = (' 15/12/1998');

const UserProfile = () => {
    const [modalActive, setModalActive] = useState(false)
    const Navigation = useNavigation()
    return (
        <View style={style.Profile}>
            <Modal animationType='fade'
                transparent={true}
                visible={modalActive}>
                <View style={style.ModalStyleTwo} >
                    <View style={style.ModalContainer}>
                        <View style={style.ModalTop}>
                            <Text style={style.Atention}>Atenção</Text>
                            <Text style={style.WannaExit}>Deseja mesmo sair?</Text>
                        </View>
                        <View style={style.ModalBottom}>
                            <TouchableOpacity onPress={() => setModalActive(false)}>
                                <Text style={style.CancelYes}>CANCELAR</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => Navigation.navigate('Login')}>
                                <Text style={style.CancelYes}>SIM</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <View>
                <Image source={happy} style={style.image} />
            </View>
            <Text style={style.Hello}>Olá, Fulana</Text>
            <View style={style.BottomView}>
                <View style={style.alignInfo}>
                    <Text style={style.FontQuestion}>E-MAIL:</Text>
                    <Text style={style.FontAnswer}>{Email}</Text>
                </View>
                <View style={style.alignInfo}>
                    <Text style={style.FontQuestion}>GÊNERO:</Text>
                    <Text style={style.FontAnswer}>{Genero}</Text>
                </View>
                <View style={style.alignInfo}>
                    <Text style={style.FontQuestion}>DATA DE NASCIMENTO:</Text>
                    <Text style={style.FontAnswer}>{DataNasc}</Text>
                </View>
                <TouchableOpacity style={style.EditProf} onPress={() => Navigation.navigate('EditProfile')}>
                    <Text style={style.TextProf}>EDITAR PERFIL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.EditExit} onPress={() => setModalActive(true)}>
                    <Text style={style.TextExit}>SAIR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default UserProfile