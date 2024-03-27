import React from 'react';
import { View, Text, Button, ImageBackground, Image, TouchableOpacity } from 'react-native';
import estilozin from './style/style.js';
import { useNavigation } from '@react-navigation/native';

function Menu() {
    const navigation = useNavigation();
    return (
        <View style={estilozin.menu}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={require('./assets/home.png')} style={estilozin.iconmenu}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Result')}>
                <Image source={require('./assets/list.png')} style={estilozin.iconmenu}></Image>
            </TouchableOpacity>
        </View>
    );
}
export default Menu;           