
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    InsideCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    humorEmote: {
        width: 75,
        height: 75,
    },
    ViewTop: {
        marginTop: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    IconStyle: {
        color: 'white',
        width: 45,
        height: 45,
        paddingHorizontal: 9,
        paddingVertical: 9,
        borderRadius: 100,
        backgroundColor: '#304ffe',
    },
    ViewAll: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    HourCalendar: {
        marginBottom: 40,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    dailyText: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        paddingLeft: 25,
        paddingRight: 25,
        width: '100%',
        height: 89,
    },
    Feel: {
        marginTop: 10,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#e24b4b'
    },
    TopHour: {
        flexDirection: 'row'
    },
    TopDate: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    actionsName: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    actionsNIcons: {
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 25,
        padding: 10,
        width: '100%',
        height: 158,
        marginBottom: 15,
        justifyContent: 'space-evenly',
    },
    BoldText: {
        fontWeight: 'bold',
        color: 'black'
    },
    Botton: {
        alignSelf: 'flex-start',
        marginTop: 15,
        backgroundColor: 'rgba(48, 79, 254, 0.1)',
        borderRadius: 10
    },
    InsideText: {
        fontSize: 13,
        fontWeight: '400',
        color: 'black'
    }

})
export default style