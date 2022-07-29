import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import happy from '../../assets/humores/happy.png';
import { useNavigation, useRoute } from '@react-navigation/native';
import style from './style';
import { humorItens } from '../CardMood/humor';
import { activities } from '../CardMood/actions';
import api from '../../services/api';
import { months } from '../CardMood/mes';

const ModalScreen = () => {
    const Navigation = useNavigation()
    const Route = useRoute()
    const [data, setData] = useState()
    const dateValue = new Date(data?.created_at);
    const getCards = async () => {
        try {
            await api.get(`/daily_entries/${Route.params.id}`)
                .then(res => {
                    setData(res?.data);
                    //setLoading(true);
                })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getCards();
    }, [data])

    return (

        <View style={style.ViewAll}>
            {data &&
                <>
                    <TouchableOpacity style={style.Botton} onPress={() => Navigation.goBack()}>
                        <Icon name='chevron-left'
                            size={35}
                            color='rgba(48, 79, 254, 0.7)' />
                    </TouchableOpacity>
                    <View style={style.ViewTop}>
                        <View style={style.HourCalendar}>
                            <View style={style.TopHour}><Icon name='schedule'
                                size={12} />
                                <Text>{`${String(dateValue.getHours()).padStart(2, '0')}:${String(dateValue.getMinutes()).padStart(2, '0')}`}</Text>
                            </View><View style={style.TopDate}>
                                <Icon name='calendar-today'
                                    size={12} />
                                <Text>{`${String(dateValue.getDate()).padStart(2, '0')} DE ${months[dateValue.getMonth()]}`}</Text>
                            </View>
                        </View>
                        <Image style={style.humorEmote} source={humorItens[data.mood].image} />
                        <Text style={[style.Feel, { color: humorItens[data.mood].color }]}>{humorItens[data.mood].name}</Text>
                    </View>
                    <View style={style.actionsNIcons}>
                        {data.activities.map((item, index) => (
                            <View key={index}
                                style={style.InsideCard}>
                                    <Icon style={style.IconStyle}
                                        name={activities[item.name].icon}
                                        size={27}
                                    />
                                    <Text style={style.BoldText}>{activities[item.name].name}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={style.dailyText}>
                        <Text style={style.InsideText}>{data.description}</Text>
                    </View>
                </>
            }
        </View>
    )
}
export default ModalScreen