import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import estilozin from './style/style.js';
import Menu from './Menu';

function Home({ navigation }) {
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
                        <Text>Selecione sua nota:</Text>
                    </View>
                    <View style={estilozin.votacao}>
                        <View style={estilozin.gridvotacao}>
                            <TouchableOpacity onPress={() => navigation.navigate('Otimo')}>
                                <Image source={require('./assets/feliz.png')} style={estilozin.smileicon}></Image>
                                <Text style={estilozin.textvotacao}>Ótimo!</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={estilozin.gridvotacao}>
                            <TouchableOpacity>
                                <Image source={require('./assets/serio.png')} style={estilozin.smileicon}></Image>
                                <Text style={estilozin.textvotacao}>Médio...</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={estilozin.gridvotacao}>
                            <TouchableOpacity>
                                <Image source={require('./assets/triste.png')} style={estilozin.smileicon}></Image>
                                <Text style={estilozin.textvotacao}>Ruim!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Menu></Menu>
            </ImageBackground>
            <StatusBar style="auto" />
        </View>
    );
}
export default Home;