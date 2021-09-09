import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './components/Splash';
import HomePage from './components/HomePage';
import KaryawanPage from './components/KaryawanPage';
import ProfilPage from './components/ProfilPage';
import PembayaranPage from './components/PembayaranPage';
import TambahKaryawanPage from './components/TambahKaryawanPage';
import EditKaryawanPage from './components/EditKaryawanPage';
import TambahPembayaranPage from './components/TambahPembayaranPage';
import EditPembayaranPage from './components/EditPembayaranPage';

const Stack = createNativeStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Splash}>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="KaryawanPage"
            component={KaryawanPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProfilPage"
            component={ProfilPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PembayaranPage"
            component={PembayaranPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TambahKaryawanPage"
            component={TambahKaryawanPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditKaryawanPage"
            component={EditKaryawanPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TambahPembayaranPage"
            component={TambahPembayaranPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditPembayaranPage"
            component={EditPembayaranPage}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
