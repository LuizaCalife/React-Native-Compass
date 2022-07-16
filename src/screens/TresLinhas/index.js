import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TresLines = () => {
    return (
        <View style={style.tresLinhas}>
            <Text> ... </Text>
        </View>
    )
}
const style = StyleSheet.create({
    tresLinhas: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default TresLines