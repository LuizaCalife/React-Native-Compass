import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { emojis } from '../CardMood/emoji';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import style from './style';
import api from '../../services/api';

const AddMood = () => {
    const Navigation = useNavigation()
    const [id, setId] = useState(5)
    const [click, setClick] = useState(false)
    const [arrayAction, setArrayAction] = useState([])
    const [description, setDescription] = useState('')
    const [mood, setMood] = useState('')
    const clickActiveEmoji = (key, id) => {
        if (key == id) {
            setId(5)
        }
        else {
            setMood(emojis[key].nome)

            setId(key)
        }
        console.log(mood)
    };
    const clickActiveAction = (key) => {
        setClick(true)
        if (arrayAction.indexOf(key) !== -1) {
            setArrayAction(arrayAction.filter(item => item !== key))
        }
        else if (arrayAction.length < 3) {
            setArrayAction([...arrayAction, key])
        }
        console.log(arrayAction)

    }
    const postCreateDailyEntry = async () => {
        try {
            await api.post('/daily_entries', {
                "daily_entry": {
                    "mood": mood,
                    "activity_ids": arrayAction,
                    "description": description
                }
            }).then(Response => {
                console.log(Response)
            })
        } catch (error) {
            console.log(description, arrayAction, mood, error)
        }
    }
    return (
        <ScrollView>
            <SafeAreaView style={style.tresLinhas}>
                <TouchableOpacity style={style.bottomClose}
                    onPress={() => Navigation.goBack()}>
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
                    {emojis.map((item, index) => (
                        <View style={style.IconsStyle} key={index}>
                            <TouchableOpacity onPress={() => clickActiveEmoji(index, id)} style={[style.IconsTop, { backgroundColor: id === index ? '#304ffe' : 'white' }]}>
                                <Image source={item.image} style={style.humorEmote} />
                            </TouchableOpacity>
                            <Text style={[style.HumorFont, { color: id === index ? item.color : null }]}>{item.name}</Text>
                        </View>
                    ))
                    }
                </View>
                <View>
                <Text style={style.ChooseThree}>Escolha até 3 ações:</Text>
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
                        placeholder='Escreva aqui o que aconteceu hoje...'
                        onChangeText={(Acontecimento) => setDescription(Acontecimento)} />
                </View>
                <TouchableOpacity style={style.bottomConfirm} onPress={() => postCreateDailyEntry()}>
                    <Text style={style.SaveColor}>SALVAR</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>
    )
}
export default AddMood