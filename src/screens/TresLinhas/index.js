import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import happy from '../../assets/humores/happy.png';

const Email = (' FULANA@GMAIL.COM');
const Genero = (' FEMININO');
const DataNasc = (' 15/12/1998');

const UserProfile = () => {
    return (
        <View style={style.Profile}>
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
                <TouchableOpacity style={style.EditProf}>
                    <Text style={style.TextProf}>EDITAR PERFIL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.EditExit}>
                    <Text style={style.TextExit}>SAIR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const style = StyleSheet.create({

    image: {
        width: 128,
        height: 128,
        marginBottom: 30
    },
    Profile: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    alignInfo: {
        flexDirection: 'row',
    },
    FontQuestion: {
        fontWeight: '900',
        color: '#000',
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 15,
        lineHeight: 19
    },
    FontAnswer: {
        fontWeight: '600',
        color: '#000',
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 15,
        lineHeight: 19
    },
    Hello: {
        fontSize: 36,
        color: '#000',
        fontWeight: '400',
        fontFamily: 'SourceSansPro-Regular',
        marginBottom:30.
        
    },
    EditProf: {
        marginTop: 30,
        width: 343,
        height: 52,
        borderRadius: 6,
        backgroundColor: '#304ffe',
        alignItems: 'center',
        justifyContent: 'center'
    },
    EditExit: {
        marginTop: 15,
        width: 343,
        height: 52,
        borderRadius: 6,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#000',
        borderWidth: 2
    },
    TextProf: {
        color: '#fff',
        fontWeight: '900',
        fontFamily: 'SourceSansPro-Regular',
    },
    TextExit: {
        color: '#000',
        fontWeight: '900',
        fontFamily: 'SourceSansPro-Regular',
    }
})
export default UserProfile