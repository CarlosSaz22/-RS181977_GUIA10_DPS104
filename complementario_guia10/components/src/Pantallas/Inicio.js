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
export default class PantallaInicio extends React.Component {
  state = {
    usuario: '',
    contrasena: '',
  };
  static navigationOptions = {
    header: null,
  };
  Entrar() {
    if (!!this.state.usuario && !!this.state.contrasena) {
      fetch(
        'https://guia10rs181977.000webhostapp.com/apiusuario2.php?comando=autenticar&usuario=' +
          this.state.usuario +
          '&contrasena=' +
          this.state.contrasena,
        {
          method: 'GET',
        }
      )
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          const encontrado = responseJson.encontrado;
          // Alert("Mensaje="+mensaje);
          if (encontrado == 'si') {
            this.props.navigation.navigate('ListarProductos');
          } else {
            Alert.alert(
              'Usuario',
              'No encontrado!!',
              [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
              { cancelable: false }
            );
          }
        })
        .catch((error) => {
          console.error(error);
          Alert.alert(
            'Aviso',
            'Error de Internet!!',
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
            { cancelable: false }
          );
        });
    } else {
      Alert.alert(
        'Aviso',
        'No introdujo datos',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );
    }
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 10 }}>
        <Text style={{ fontSize: 34, marginTop: 25, alignSelf: 'center' }}>
          Bienvenidos
        </Text>
        <Image
          style={{
            width: 200,
            height: 160,
            alignSelf: 'center',
            marginTop: 15,
            
          }}
        source={require('../imagenes/market.jpg')}
        />
        <View style={{ marginLeft: 10, marginRight: 10 }}>
          <Input
            placeholder="USUARIO"
            onChangeText={(text) => this.setState({ usuario: text })}
            rightIcon={<Icon name="user" size={24} color="black" />}
          />
          <Input
            placeholder="CONTRASEÑA"
            onChangeText={(text) => this.setState({ contrasena: text })}
            secureTextEntry={true}
            rightIcon={<Icon name="lock" size={24} color="black" />}
          />
        </View>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: '#7B8CDE',
            marginTop: 15,
            borderRadius: 5,
            justifyContent: 'center',
            marginLeft: 20,
            marginRight: 20,
          }}
          onPress={() => {
            this.Entrar();
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 22,
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}