import * as React from 'react';
import {
  SafeAreaView,
  Button,
  View,
  Text,
  Image,
  TouchableOpacity,
  Keyboard,
  Alert,
  FlatList,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { createAppContainer, NavigationEvents } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import pantallaInicio from './components/src/Pantallas/Inicio';
import listarProductos from './components/src/Pantallas/Listar';
import paginaDetalle from './components/src/Pantallas/Detalles';
import paginaAgregar from './components/src/Pantallas/Agregar';

const RootStack = createStackNavigator(
  {
    Inicio: pantallaInicio,
    ListarProductos: listarProductos,
    Detalles: paginaDetalle,
    Agregar: paginaAgregar,
  },
  {
    initialRouteName: 'Inicio',
  }
);
const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
    
  }
}

