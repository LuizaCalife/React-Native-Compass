import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import happy from '../../assets/humores/happy.png';
import { useNavigation } from "@react-navigation/native";

const EditProfile = () => {
    const Navigation = useNavigation()
    return (
        <View style={style.ViewAll}> 
            <View style={style.viewTop}>
                <Image source={happy} style={style.Image} />
                <TouchableOpacity style={style.ChangePhoto}>
                    <Text style={style.PhotoText}>
                        alterar foto
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={style.Align}>
                <Text style={style.Info}>nome</Text>
                <TextInput style={style.InfoInput}></TextInput>
                <Text style={style.Info}>e-mail</Text>
                <TextInput style={style.InfoInput}></TextInput>
                <Text style={style.Info}>gênero</Text>
                <TextInput style={style.InfoInput}></TextInput>
                <Text style={style.Info}>data de nascimento</Text>
                <TextInput style={style.InfoInput}></TextInput>
            </View>
            <TouchableOpacity style={style.Botton}>
                <Text style={style.BottonText}>salvar</Text>
            </TouchableOpacity>
        </View>
    )
}
const style = StyleSheet.create({

    Image: {
        width: 128,
        height: 128,
        marginBottom: 25
    },
    ViewAll: {
        flex: 1,
        alignItems: 'center',
        marginTop: 45
    },
    ChangePhoto: {
        borderRadius: 6,
        borderWidth: 2,
        backgroundColor: 'rgba(48, 79, 254, 0.14);',
        borderColor: 'rgba(48, 79, 254, 0.3);',
        width: 190,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center'
    },
    PhotoText: {
        fontSize: 15,
        fontWeight: '900',
        color: '#304ffe',
        textTransform: 'uppercase'
    },
    Info: {
        textTransform: 'uppercase',
        fontWeight: '900',
        color: '#000',
    },
    InfoInput: {
        backgroundColor: '#fff',
        marginTop: 7,
        marginBottom: 7,
        width: '100%',
        height:44,
        borderWidth:1,
        borderColor:'#000',
    },
    viewTop: {
        alignItems: 'center',
        marginBottom: 45
    },
    Align: {
        marginEnd: 100,
        width: '100%',
        paddingLeft:100
    },
    Botton: {
        marginTop:20,
        borderRadius: 6,
        backgroundColor: '#304ffe',
        width: 315,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    BottonText: {
        color:'#fff',
        textTransform: 'uppercase',
        fontSize:15,
        fontWeight:'800'
    },
})
export default EditProfile



