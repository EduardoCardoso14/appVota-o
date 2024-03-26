// Navigation.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Otimo from './Otimo';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}
        options={{
          title: 'Bem vindo a Votação 🗳 ',
          headerTintColor: 'black',
          headerStyle: { backgroundColor: 'white' }
        }}  />
        <Stack.Screen name="Otimo" component={Otimo}
        options={{
          title: 'Salvar Nota',
          headerTintColor: 'black',
          headerStyle: { backgroundColor: 'white' }
        }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;