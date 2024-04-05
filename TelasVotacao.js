import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, TouchableOpacity, Image, TextInput } from 'react-native';
import estilozin from './style/style.js';
import Menu from './Menu';
import DateComponent from './DateComponent.js';

function TelasVotacao({ navigation, route }) {
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
                    </View>
                    <View style={estilozin.viewselecione}>
                        <Text>Você selecionou:</Text>
                    </View>
                    <View style={estilozin.votacaoselec}>
                        <View style={estilozin.gridvotacaoselec}>
                            <Image source={tipoImagem()} style={estilozin.smileiconselec}></Image>
                            <Text style={estilozin.textvotacao}>{imgTitulo()}</Text>
                        </View>
                    </View>
                    <View style={estilozin.viewinput}>
                        <TextInput
                            style={estilozin.input}
                            placeholder="Salve uma mensagem aqui..."
                        />
                        <TouchableOpacity style={estilozin.toucavel} onPress={() => navigation.navigate('Obrigado', { valor, tit })}>
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
export default TelasVotacao;