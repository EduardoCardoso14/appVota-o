import React from 'react';
import { View, Text, Button, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import estilozin from './style/style.js';
import { useNavigation } from '@react-navigation/native';

function Menu() {
    const navigation = useNavigation();
    const handlePress = () => {
        Alert.alert(
            'Avaliação de Palestras - Rivieverson Coach',
            'Dê sua nota para as palestras do Iguinho!',
            [
                { text: 'Avaliar', onPress: () => navigation.navigate("Home") },
            ]
        );
    }
    return (
        <View style={estilozin.menu}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={require('./assets/home.png')} style={estilozin.iconmenu}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Result')}>
                <Image source={require('./assets/list.png')} style={estilozin.iconmenu}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress}>
                <Image source={require('./assets/alert.jpg')} style={estilozin.iconmenu}></Image>
            </TouchableOpacity>
        </View>
    );
}
export default Menu;           