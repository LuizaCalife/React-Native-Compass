import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import happy from '../../assets/humores/happy.png';
import { useNavigation } from '@react-navigation/native';
import style from './style';

const ModalScreen = () => {
    const Navigation = useNavigation()
    return (
        <View style={style.ViewAll}>
            <TouchableOpacity style={style.Botton} onPress={() => Navigation.goBack()}>
                <Icon name='chevron-left'
                    size={35}
                    color='rgba(48, 79, 254, 0.7)' />
            </TouchableOpacity>
            <View style={style.ViewTop}>
                <View style={style.HourCalendar}>
                    <View style={style.TopHour}><Icon name='schedule'
                        size={12} />
                        <Text>08:35</Text>
                    </View><View style={style.TopDate}>
                        <Icon name='calendar-today'
                            size={12} />
                        <Text>HOJE, 23 DE JANEIRO</Text>
                    </View>
                </View>
                <Image style={style.humorEmote} source={happy} />
                <Text style={style.Feel}>BEM</Text>
            </View>
            <View style={style.actionsNIcons}>
                <View style={style.InsideCard}>
                    <View style={{ alignItems: 'center' }}>
                        <Icon style={style.IconStyle}
                            name='celebration'
                            size={27}
                        />
                        <Text style={style.BoldText}>festa</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Icon style={style.IconStyle}
                            name='sports-soccer'
                            size={27}
                        />
                        <Text style={style.BoldText}>esporte</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Icon style={style.IconStyle}
                            name='restaurant'
                            size={27}
                        />
                        <Text style={style.BoldText}>cozinhar</Text>
                    </View>
                </View>
            </View>
            <View style={style.dailyText}>
                <Text style={style.InsideText}> Hoje foi um dia muito bom. Joguei futebol no parque,
                    cozinhei uma lasanha para minha família. E à noite,
                    fui à festa de aniversário do meu amigo.</Text>
            </View>
        </View>
    )
}
export default ModalScreen