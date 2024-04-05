import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, TouchableOpacity, Image, TextInput } from 'react-native';
import estilozin from './style/style.js';
import Menu from './Menu';
import DateComponent from './DateComponent.js';

function Obrigado({ route, navigation }) {
    const { valor, tit } = route.params;
    const tipoImagem = (value) => {
        switch (valor) {
            case 1:
                return require('./assets/feliz.png');
                break;
            case 2:
                return require('./assets/serio.png');
                break;
            case 3:
                return require('./assets/triste.png');
                break;
        }
    }
    const imgTitulo = (value) => {
        switch (valor) {
            case 1:
                var description = "Ótimo";
                return description;
                break;
            case 2:
                var description = "Médio...";
                return description;
                break;
            case 3:
                var description = "Ruim!";
                return description;
                break;
        }
    }
    return (
        <View style={estilozin.container}>
            <ImageBackground source={require('./assets/bg.jpg')} resizeMode='cover' style={estilozin.bg}>
                <View style={estilozin.main}>
                    <View style={estilozin.viewtitle}>
                        <Text>{tit}</Text>
                    </View>
                    <View style={estilozin.viewdate}>
                        <Text><DateComponent /></Text>
                        <Image source={tipoImagem()} style={estilozin.imgskcpo}></Image>
                    </View>
                    <View style={estilozin.viewselecione}>
                        <Text>Obrigado pelo voto ({imgTitulo()})!</Text>
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