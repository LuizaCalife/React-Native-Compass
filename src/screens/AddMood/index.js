import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import happy from '../../assets/humores/happy.png';
import radiant from '../../assets/humores/radiant.png';
import ok from '../../assets/humores/ok.png';
import sad from '../../assets/humores/sad.png';
import terrible from '../../assets/humores/terrible.png';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const AddMood = () => {
    const Navigation = useNavigation()
    const [id, setId] = useState(null)
    const clickActiveEmoji = (key) => {
        if (key == id) {
            setId(null)
        }
        else {
            setId(key)
        }
    };
    const [click, setClick] = useState(false)
    const [arrayAction, setArrayAction] = useState([])
    const clickActiveAction = (key) => {
        setClick(true)
        if (arrayAction.indexOf(key) !== -1) {
            setArrayAction(arrayAction.filter(item => item !== key))
        }
        else if (arrayAction.length < 3) {
            setArrayAction([...arrayAction, key])
        }
    }
    return (
        
        <ScrollView>
            <SafeAreaView style={style.tresLinhas}>
                <TouchableOpacity style={style.bottomClose}
                onPress={() => Navigation.goBack()}
                >
                    <Icon name='close'
                        size={33}
                        color='#697FFF' />
                </TouchableOpacity>
                <View style={style.HowStyle}>
                    <Text style={style.TextHow}>Como você está?</Text>
                </View>
                <View style={style.date}>
                    <View style={style.day}>
                        <Icon name='calendar-today'
                            size={10} />
                        <Text style={style.TextDate}>
                            HOJE, 23 DE JANEIRO</Text>
                    </View>
                    <View style={style.hour}>
                        <Icon name='schedule'
                            size={12} />
                        <Text style={style.TextDate}>
                            08:35</Text>
                    </View>
                </View>
                <View style={style.HumorChoose}>
                    <View style={style.IconsStyle}>
                        <TouchableOpacity onPress={() => clickActiveEmoji(0)} style={[style.IconsTop, { backgroundColor: id === 0 ? '#304ffe' : 'white' }]}>
                            <Image source={radiant} style={style.humorEmote} />
                        </TouchableOpacity>
                        <Text style={[style.HumorFont, { color: id === 0 ? '#C801FA' : null }]}>RADIANTE</Text>
                    </View>
                    <View style={style.IconsStyle}>
                        <TouchableOpacity onPress={() => clickActiveEmoji(1)} style={[style.IconsTop, { backgroundColor: id === 1 ? '#304ffe' : 'white' }]}>
                            <Image source={happy} style={style.humorEmote} />
                        </TouchableOpacity>
                        <Text style={[style.HumorFont, { color: id === 1 ? '#E24B4B' : null }]}>FELIZ</Text>
                    </View>
                    <View style={style.IconsStyle}>
                        <TouchableOpacity onPress={() => clickActiveEmoji(2)} style={[style.IconsTop, { backgroundColor: id === 2 ? '#304ffe' : 'white' }]}>
                            <Image source={ok} style={style.humorEmote} />
                        </TouchableOpacity>
                        <Text style={[style.HumorFont, { color: id === 2 ? '#FFD700' : null }]}>OK</Text>
                    </View>
                    <View style={style.IconsStyle}>
                        <TouchableOpacity onPress={() => clickActiveEmoji(3)} style={[style.IconsTop, { backgroundColor: id === 3 ? '#304ffe' : 'white' }]}>
                            <Image source={sad} style={style.humorEmote} />
                        </TouchableOpacity>
                        <Text style={[style.HumorFont, { color: id === 3 ? '#4BE263' : null }]}>TRISTE</Text>
                    </View>
                    <View style={style.IconsStyle}>
                        <TouchableOpacity onPress={() => clickActiveEmoji(4)} style={[style.IconsTop, { backgroundColor: id === 4 ? '#304ffe' : 'white' }]}>
                            <Image source={terrible} style={style.humorEmote} />
                        </TouchableOpacity>
                        <Text style={[style.HumorFont, { color: id === 4 ? '#4B75E2' : null }]}>ACABADO</Text>
                    </View>
                </View>
                <View style={style.IconSelect}>
                    <View style={style.IconsOne}>
                        <View style={style.alignIcons}>
                            <TouchableOpacity onPress={() => clickActiveAction(0)} style={[style.iconsAlign, { backgroundColor: click && arrayAction.indexOf(0) !== -1 ? '#304ffe' : 'white' }]}>
                                <Icon name='king-bed'
                                    size={48}
                                    style={style.IconsBorder}
                                    color={click && arrayAction.indexOf(0) !== -1 ? '#fff' : '#000'}
                                />
                            </TouchableOpacity>
                            <Text style={style.Actions}>descanso</Text>
                        </View>
                        <View style={style.alignIcons}>
                            <TouchableOpacity onPress={() => clickActiveAction(1)} style={[style.iconsAlign, { backgroundColor: click && arrayAction.indexOf(1) !== -1 ? '#304ffe' : 'white' }]}>
                                <Icon name='favorite-border'
                                    size={48}
                                    style={style.IconsBorder}
                                    color={click && arrayAction.indexOf(1) !== -1 ? '#fff' : '#000'}
                                />
                            </TouchableOpacity>
                            <Text style={style.Actions}>encontro</Text>
                        </View>
                        <View style={style.alignIcons}>
                            <TouchableOpacity onPress={() => clickActiveAction(2)} style={[style.iconsAlign, { backgroundColor: click && arrayAction.indexOf(2) !== -1 ? '#304ffe' : 'white' }]}>
                                <Icon name='movie'
                                    size={48}
                                    style={style.IconsBorder}
                                    color={click && arrayAction.indexOf(2) !== -1 ? '#fff' : '#000'}
                                /></TouchableOpacity>
                            <Text style={style.Actions}>filmes e séries</Text>
                        </View>
                    </View>
                    <View style={style.IconsTwo}>
                        <View style={style.alignIcons}>
                            <TouchableOpacity onPress={() => clickActiveAction(3)} style={[style.iconsAlign, { backgroundColor: click && arrayAction.indexOf(3) !== -1 ? '#304ffe' : 'white' }]}>
                                <Icon name='shopping-cart'
                                    size={48}
                                    style={style.IconsBorder}
                                    color={click && arrayAction.indexOf(3) !== -1 ? '#fff' : '#000'}
                                /></TouchableOpacity>
                            <Text style={style.Actions}>compras</Text>
                        </View>
                        <View style={style.alignIcons}>
                            <TouchableOpacity onPress={() => clickActiveAction(4)} style={[style.iconsAlign, { backgroundColor: click && arrayAction.indexOf(4) !== -1 ? '#304ffe' : 'white' }]}>
                                <Icon name='ramen-dining'
                                    size={48}
                                    style={style.IconsBorder}
                                    color={click && arrayAction.indexOf(4) !== -1 ? '#fff' : '#000'}
                                /></TouchableOpacity>
                            <Text style={style.Actions}>boa refeição</Text>
                        </View>
                        <View style={style.alignIcons}>
                            <TouchableOpacity onPress={() => clickActiveAction(5)} style={[style.iconsAlign, { backgroundColor: click && arrayAction.indexOf(5) !== -1 ? '#304ffe' : 'white' }]}>
                                <Icon name='celebration'
                                    size={48}
                                    style={style.IconsBorder}
                                    color={click && arrayAction.indexOf(5) !== -1 ? '#fff' : '#000'}
                                /></TouchableOpacity>
                            <Text style={style.Actions}>festa</Text>
                        </View>
                    </View>
                    <View style={style.IconsThree}>
                        <View style={style.alignIcons}>
                            <TouchableOpacity onPress={() => clickActiveAction(6)} style={[style.iconsAlign, { backgroundColor: click && arrayAction.indexOf(6) !== -1 ? '#304ffe' : 'white' }]}>
                                <Icon name='sports-soccer'
                                    size={48}
                                    color={click && arrayAction.indexOf(6) !== -1 ? '#fff' : '#000'}
                                    style={style.IconsBorder} />
                            </TouchableOpacity>

                            <Text style={style.Actions}>esporte</Text>
                        </View>
                        <View style={style.alignIcons}>
                            <TouchableOpacity onPress={() => clickActiveAction(7)} style={[style.iconsAlign, { backgroundColor: click && arrayAction.indexOf(7) !== -1 ? '#304ffe' : 'white' }]}>
                                <Icon name='restaurant'
                                    size={48}
                                    color={click && arrayAction.indexOf(7) !== -1 ? '#fff' : '#000'}
                                    style={style.IconsBorder} />
                            </TouchableOpacity>
                            <Text style={style.Actions}>cozinhar</Text>
                        </View>
                        <View style={style.alignIcons}>
                            <TouchableOpacity onPress={() => clickActiveAction(8)} style={[style.iconsAlign, { backgroundColor: click && arrayAction.indexOf(8) !== -1 ? '#304ffe' : 'white' }]}>
                                <Icon name='sports-esports'
                                    size={48}
                                    color={click && arrayAction.indexOf(8) !== -1 ? '#fff' : '#000'}
                                    style={style.IconsBorder} />
                            </TouchableOpacity>
                            <Text style={style.Actions}>jogos</Text>
                        </View>
                    </View>
                </View>
                <View style={style.Happend}>
                    <TextInput style={style.Digit}
                        placeholder='Escreva aqui o que aconteceu hoje...' />
                </View>
                <TouchableOpacity style={style.bottomConfirm}>
                    <Text style={style.SaveColor}>SALVAR</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>
    )
}
const style = StyleSheet.create({
    tresLinhas: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    TextHow: {
        fontWeight: '800',
        color: 'black',
        fontSize: 23,
        fontFamily: 'SourceSansPro-Black',
        marginBottom: 9
    },
    IconSelect: {
        borderRadius: 20,
        backgroundColor: 'white',
        marginTop: 10,
        padding: 10,
        width: '90%',
        height: 450,
        borderWidth: 1,
        justifyContent: 'space-evenly',
    },
    date: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    TextDate: {
        fontSize: 13,
        color: '#969696',
        fontWeight: '500',
        fontFamily: 'SourceSansPro-SemiBold'
    },
    bottomClose: {
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        marginTop: 15,
        marginLeft: 20,
        backgroundColor: 'rgba(48, 79, 254, 0.1)',
        borderRadius: 8,
    },
    HowStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35
    },
    humorEmote: {
        width: 43,
        alignItems: 'center',
        flexDirection: 'row',
        height: 43,
    },
    HumorChoose: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: 150,
        alignItems: 'center'
    },
    HumorName: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    HumorFont: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#969696',
        fontFamily: 'SourceSansPro-SemiBold'
    },
    day: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '58%'
    },
    hour: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '20%'
    },
    Happend: {
        borderRadius: 22,
        backgroundColor: 'white',
        marginTop: 25,
        padding: 10,
        width: '90%',
        height: 98,
        borderWidth: 1,
        marginBottom: 3
    },
    Digit: {
        marginBottom: 40
    },
    bottomConfirm: {
        borderRadius: 7,
        backgroundColor: '#304ffe',
        marginBottom: 35,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        width: 380,
        height: 52,
    },
    SaveColor: {
        color: 'white',
        fontSize: 16,
        fontWeight: '900',
        fontFamily: 'SourceSansPro-SemiBold'
    },
    IconsOne: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    IconsTwo: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    IconsThree: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    IconsBorder: {
        borderRadius: 35,
        borderWidth: 1,
        width: 65,
        height: 65,
        paddingLeft: 9,
        paddingTop: 9,
    },
    Actions: {
        fontWeight: '600',
        color: 'black',
        fontSize: 12,
        textAlign: 'center',

    },
    iconsAlign: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 59,
        width: 67,
        height: 67,

    },
    IconsStyle: {
        alignItems: 'center',
        height: 80,
        width: 60,
        justifyContent: 'center'
    },
    IconsTop: {
        alignItems: 'center',
        height: 53,
        width: 52,
        justifyContent: 'center',
        borderRadius: 52,
    },
    alignIcons: {
        alignItems: 'center'
    }
})
export default AddMood