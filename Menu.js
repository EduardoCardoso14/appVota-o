import React from 'react';
import { View, Text, Button, ImageBackground, Image, TouchableHighlight } from 'react-native';
import estilozin from './style/style.js';
import { useNavigation } from '@react-navigation/native';

function Menu() {
    const navigation = useNavigation();
    return (
        <View style={estilozin.menu}>
            <TouchableHighlight onPress={() => navigation.navigate('Home')}>
                <Image source={require('./assets/home.png')} style={estilozin.iconmenu}></Image>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('Result')}>
                <Image source={require('./assets/list.png')} style={estilozin.iconmenu}></Image>
            </TouchableHighlight>
        </View>
    );
}
export default Menu;   