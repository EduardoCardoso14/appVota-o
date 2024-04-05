import { useState, React } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, TouchableOpacity, Image, TextInput, Button, Alert } from 'react-native';
import estilozin from './style/style.js';
import Menu from './Menu';
import DateComponent from './DateComponent.js';

function Home({ navigation }) {
    const otimo = () => {
        if (tit == '') {
            Alert.alert(
                'Preencha o campo!',
                'Coloque um título, por favor.',
                [
                    {
                        text: 'Preencher', onPress: () =>
                            navigation.navigate("Home")
                    },
                ]
            );
        } else {
            var valor = 1;
            navigation.navigate('TelasVotacao', { valor, tit });
        }
    };
    const medio = () => {
        if (tit == '') {
            Alert.alert(
                'Preencha o campo!',
                'Coloque um título, por favor.',
                [
                    {
                        text: 'Preencher', onPress: () =>
                            navigation.navigate("Home")
                    },
                ]
            );
        } else {
            var valor = 2;
            navigation.navigate('TelasVotacao', { valor, tit });
        }
    };
    const triste = () => {
        if (tit == '') {
            Alert.alert(
                'Preencha o campo!',
                'Coloque um título, por favor.',
                [
                    {
                        text: 'Preencher', onPress: () =>
                            navigation.navigate("Home")
                    },
                ]
            );
        } else {
            var valor = 3;
            navigation.navigate('TelasVotacao', { valor, tit });
        }
    };

    const [tit, setTit] = useState('');
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
                        <TextInput
                            placeholder="Digite o título da palestra"
                            style={estilozin.inputHome}
                            onChangeText={setTit}
                            value={tit}
                        >

                        </TextInput>
                    </View>
                    <View style={estilozin.votacao}>
                        <View style={estilozin.gridvotacao}>
                            <TouchableOpacity onPress={otimo}>
                                <Image source={require('./assets/feliz.png')} style={estilozin.smileicon}></Image>
                                <Text style={estilozin.textvotacao}>Ótimo!</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={estilozin.gridvotacao}>
                            <TouchableOpacity onPress={medio}>
                                <Image source={require('./assets/serio.png')} style={estilozin.smileicon}></Image>
                                <Text style={estilozin.textvotacao}>Médio...</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={estilozin.gridvotacao}>
                            <TouchableOpacity onPress={triste}>
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