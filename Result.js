import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import estilozin from './style/style.js';
import Menu from './Menu';
import DateComponent from './DateComponent.js';

function Home({ navigation }) {
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
                        <Text>Relatório de Votos:</Text>
                    </View>
                    <View style={estilozin.votacao}>
                        <View style={estilozin.gridvotacao}>
                            <Image source={require('./assets/feliz.png')} style={estilozin.smileicon}></Image>
                            <Text style={estilozin.textvotacao}>Ótimo!</Text>
                            <View style={estilozin.numerodevotation1}>
                                <Text style={estilozin.textnumerodevotation}>15</Text>
                            </View>
                        </View>
                        <View style={estilozin.gridvotacao}>
                            <Image source={require('./assets/serio.png')} style={estilozin.smileicon}></Image>
                            <Text style={estilozin.textvotacao}>Médio...</Text>
                            <View style={estilozin.numerodevotation2}>
                                <Text style={estilozin.textnumerodevotation}>15</Text>
                            </View>
                        </View>
                        <View style={estilozin.gridvotacao}>
                            <Image source={require('./assets/triste.png')} style={estilozin.smileicon}></Image>
                            <Text style={estilozin.textvotacao}>Ruim!</Text>
                            <View style={estilozin.numerodevotation3}>
                                <Text style={estilozin.textnumerodevotation}>15</Text>
                            </View>
                        </View>
                    </View>
                    <View style={estilozin.viewobrigado}>
                        <TouchableOpacity style={estilozin.toucavel} onPress={() => navigation.navigate('Home')}>
                            <View style={estilozin.botaoobg}>
                                <Text>Votar Novamente</Text>
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
export default Home;