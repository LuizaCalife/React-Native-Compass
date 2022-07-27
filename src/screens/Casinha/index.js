import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Menu = () => {
    return (
        <View style={styles.HomeMenu}>
            <View style={styles.Mensagem}>
                <Icon
                    name='sentiment-neutral'
                    color='#acacac'
                    size={70}
                />
                <Text style={styles.textEmpty}>
                    Você ainda não tem nenhum
                    {'\n'}registro diário.Para
                    começar,
                    {'\n'} toque no ícone de adicionar na tela.
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    HomeMenu: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    Mensagem: {
        height: 149,
        width: 258,
        alignItems: 'center',
        marginTop: 110
    },
    textEmpty: {
        width: 290,
        height: 70,
        lineHeight: 23,
        fontSize: 17,
        color: '#acacac',
        textAlign: 'center',
        marginTop: 32,
        fontFamily: 'SourceSansPro-SemiBold'
    }
}
)
export default Menu