import { StyleSheet } from 'react-native';

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
        marginBottom: 30.
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
    },
    ModalStyleTwo: {
        flex: 1,
        backgroundColor: '#rgba(0,0,0,0.6)',
        alignItems: 'center',
    },
    ModalContainer: {
        width: 375,
        height: 180,
        borderRadius: 20,
        marginTop: 260,
        backgroundColor: '#F5F5F5',
    },
    ModalTop: {
        alignItems: 'flex-start',
    },
    CancelYes: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000',
        fontFamily: 'SourceSansPro-Regular'
    },
    Atention: {
        fontSize: 24,
        color: '#000',
        fontWeight: '700',
        marginBottom: 10,
        marginTop: 25,
        paddingLeft: 30,
        fontFamily: 'SourceSansPro-Regular'
    },
    WannaExit: {
        fontSize: 19,
        paddingLeft: 30,
        marginBottom: 35,
        fontFamily: 'SourceSansPro-Regular'
    },
    ModalBottom: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingLeft: 145,
    }
})
export default style

