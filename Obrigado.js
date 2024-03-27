import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, TouchableOpacity, Image, TextInput } from 'react-native';
import estilozin from './style/style.js';
import Menu from './Menu';

function Obrigado({ navigation }) {
    return (
        <View style={estilozin.container}>
            <ImageBackground source={require('./assets/bg.jpg')} resizeMode='cover' style={estilozin.bg}>
                <View style={estilozin.main}>
                    <View style={estilozin.viewtitle}>
                        <Text>Avaliação de Palestras - Rivieverson Coach</Text>
                    </View>
                    <View style={estilozin.viewdate}>
                        <Text>26/03/2024</Text>
                    </View>
                    <View style={estilozin.viewselecione}>
                        <Text>Obrigado pelo voto!</Text>
                    </View>
                    <View style={estilozin.votacaoselec}>
                        <View style={estilozin.gridvotacaoselec}>
                            <Image source={require('./assets/joinha.jpg')} style={estilozin.smileiconselec}></Image>
                            <Text style={estilozin.textvotacao}>Voto registrado!</Text>
                        </View>
                    </View>
                    <View style={estilozin.viewobrigado}>
                        <TouchableOpacity style={estilozin.toucavel} onPress={() => navigation.navigate('Home')}>
                        <View style={estilozin.botaoobg}>
                            <Text>Nova Avaliação</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <Menu></Menu>
            </ImageBackground>
            <StatusBar style="auto" />
        </View>
    );
}
export default Obrigado;