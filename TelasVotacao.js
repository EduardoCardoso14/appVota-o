import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, TouchableOpacity, Image, TextInput } from 'react-native';
import estilozin from './style/style.js';
import Menu from './Menu';
import DateComponent from './DateComponent.js';

function TelasVotacao({ navigation, route }) {
    const valor = route.params;
    if (valor == 1){
        console.log("bom dia")
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
                                <Image source={require('./assets/feliz.png')} style={estilozin.smileiconselec}></Image>
                                <Text style={estilozin.textvotacao}>Ótimo!</Text>
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
    }if (valor == 2){
        console.log("boa tarde")
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
                                <Image source={require('./assets/serio.png')} style={estilozin.smileiconselec}></Image>
                                <Text style={estilozin.textvotacao}>Médio...</Text>
                            </View>
                        </View>
                        <View style={estilozin.viewinput}>
                            <TextInput
                                style={estilozin.input}
                                placeholder="Salve uma mensagem aqui..."
                                multiline={true}
                                numberOfLines={10}
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
    }if (valor == 3){
        console.log("boa noite")
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
    
}
export default TelasVotacao;