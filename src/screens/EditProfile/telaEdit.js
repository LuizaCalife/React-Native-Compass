import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import happy from '../../assets/humores/happy.png';
import { useNavigation } from "@react-navigation/native";
import { photos } from "./photos";

const EditProfile = () => {
    const [visible, setVisible] = useState(false)
    const Navigation = useNavigation()
    return (
        <View style={style.ViewAll}> 
            <View style={style.viewTop}>
                <Image source={happy} style={style.Image} />
                <TouchableOpacity style={style.ChangePhoto} onPress={ () => setVisible(true) }>
                    <Text style={style.PhotoText}>
                        alterar foto
                    </Text>
                </TouchableOpacity>
            </View>
            <Modal visible={visible} animationType='slide'>
               <View style={style.ModalAll}>
                <TouchableOpacity onPress={() => setVisible(false)} style={style.BottonClose}>
                <Icon name='close'
                        size={33}
                        color='#697FFF' />
                </TouchableOpacity>
                <View style={style.viewModal}>
                     <Text style={style.textPhoto}>Selecione a foto de perfil</Text>
                     <View style={style.photoIcon}>
                        {photos.map( (item, index) => (
                         <View key={index} style={style.viewSize}>
                            <Image source={item} style={style.emote}/>
                            </View>  
                        ))}
                     </View>
                </View>
                <View style={style.confirm}>
                     <TouchableOpacity>
                        <Text style={style.confirmText} onPress={() => setVisible(false)}>CONFIRMAR</Text>
                     </TouchableOpacity>
                </View>
               </View>
            </Modal>
            <View style={style.Align}>
                <Text style={style.Info}>nome</Text>
                <TextInput style={style.InfoInput}></TextInput>
                <Text style={style.Info}>e-mail</Text>
                <TextInput style={style.InfoInput}></TextInput>
                <Text style={style.Info}>gênero</Text>  
                <TouchableOpacity style={style.InfoInput}>
                    <Text style={style.gender}>selecione o gênero</Text>
                <Icon style={style.expand}name='expand-more' size={35}/>
                </TouchableOpacity>
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
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:10,
        flexDirection:'row'
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
    expand: {
       alignSelf:'flex-end'
    },
    gender: {
        textTransform:'uppercase',
        fontWeight:'700'
    },
    BottonClose: {
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        marginTop: 15,
        marginLeft: 20,
        backgroundColor: 'rgba(48, 79, 254, 0.1)',
        borderRadius: 8,
    },
    emote: {
        width:92,
        height:92,
    },
    photoIcon: {
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        flexWrap:'wrap',
    },
    viewSize: {
       width:120,
       height:110,
       alignItems:'center'
    },
    viewModal: {
        width:'100%',
        alignItems:'center'
    },
    ModalAll: {
        flex:1,
        alignItems:'center',
    },
    textPhoto: {
        fontWeight:'bold',
        fontSize:24,
        color:'#000',
        marginBottom:50,
        marginTop:50,
        fontWeight:'700'
    },
    confirm: {
        marginTop:250,
        borderRadius: 7,
        backgroundColor: '#304ffe',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 60,
    },
    confirmText: {
        color:'#fff',
        fontWeight:'bold',
        fontSize:17
    }
})
export default EditProfile



