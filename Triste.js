import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, TouchableOpacity, Image, TextInput } from 'react-native';
import estilozin from './style/style.js';
import Menu from './Menu';
import DateComponent from './DateComponent.js';

function Triste({ navigation }) {
    return (
        <View style={estilozin.container}>
            <ImageBackground source={require('./assets/bg.jpg')} resizeMode='cover' style={estilozin.bg}>
                <View style={estilozin.main}>
                    <View style={estilozin.viewtitle}>
                        <Text>Avaliação de Palestras - Rivieverson Coach</Text>
                    </View>
                    <View style={estilozin.viewdate}>
                        <Text><DateComponent /></Text>
                    </View>
                    <View style={estilozin.viewselecione}>
                        <Text>Você selecionou:</Text>
                    </View>
                    <View style={estilozin.votacaoselec}>
                        <View style={estilozin.gridvotacaoselec}>
                            <Image source={require('./assets/triste.png')} style={estilozin.smileiconselec}></Image>
                            <Text style={estilozin.textvotacao}>Ruim!</Text>
                        </View>
                    </View>
                    <View style={estilozin.viewinput}>
                        <TextInput
                            style={estilozin.input}
                            placeholder="Salve uma mensagem aqui..."
                        />
                        <TouchableOpacity style={estilozin.toucavel} onPress={() => navigation.navigate('Obrigado')}>
                        <View style={estilozin.botaoimprov}>
                                <Text>Salvar</Text>
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
export default Triste;