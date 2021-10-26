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

export default class PaginaAgregar extends React.Component {
  state = {
    nombres: '',
    apellidos: '',
    direccion_postal: '',
    direccion_trabajo: '',
    telefono: '',
    correo: '',
    Nivel_economico: '',
    posibilidad_compra: '',
    intereses: '',
    Fotografia: '',
    id: '',
  };
  static navigationOptions = {
    title: 'Agregar Cliente',
    headerStyle: {
      backgroundColor: '#7B8CDE',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  Guardar() {
    fetch(
      'https://guia10rs181977.000webhostapp.com/api2.php?comando=agregar&nombres=' +
        this.state.nombres +
        '&apellidos=' +
        this.state.apellidos +
        '&direccion_postal=' +
        this.state.direccion_postal +
        '&direccion_trabajo=' +
        this.state.direccion_trabajo +
        '&telefono=' +
        this.state.telefono +
        '&correo=' +
        this.state.correo +
        '&	Nivel_economico=' +
        this.state.Nivel_economico +
        '&posibilidad_compra=' +
        this.state.posibilidad_compra +
        '&intereses=' +
        this.state.intereses +
        '&Fotografia=' +
        this.state.Fotografia,
      {
        method: 'GET',
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        const mensaje = responseJson.mensaje;
        console.log(mensaje);
        if (!mensaje) alert('Error al agregar!');
        else {
          alert(mensaje);
          this.props.navigation.goBack();
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Error de Internet!!');
      });
  }
  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, padding: 20 }}>
          <Input
            label="Nombre"
            value={this.state.nombres}
            placeholder="Nombres"
            onChangeText={(text) => this.setState({ nombres: text })}
          />
          <Input
            label="Apellido"
            value={this.state.apellidos}
             placeholder="Apellidos"
            inputStyle={{ marginTop: 10 }}
            onChangeText={(text) => this.setState({ apellidos: text })}
          />
          <Input
            label="Dirección Postal"
            value={this.state.direccion_postal}
             placeholder="Dirección Postal"
            inputStyle={{ marginTop: 10 }}
            onChangeText={(text) => this.setState({ direccion_postal: text })}
          />
          <Input
            label="Dirección Trabajo"
            value={this.state.direccion_trabajo}
              placeholder="Dirección Trabajo"
            inputStyle={{ marginTop: 10 }}
            onChangeText={(text) => this.setState({ direccion_trabajo: text })}
          />
          <Input
            label="Telefono"
            value={this.state.telefono}
            inputStyle={{ marginTop: 10 }}
            placeholder="Número de teléfono"
            onChangeText={(text) => this.setState({ telefono: text })}
          />
          <Input
            label="Correo"
            value={this.state.correo}
            inputStyle={{ marginTop: 10 }}
            placeholder="Correo Electronico"
            onChangeText={(text) => this.setState({ correo: text })}
          />
          <Input
            label="Nivel Economico"
            value={this.state.Nivel_economico}
            inputStyle={{ marginTop: 10 }}
            placeholder="Nivel Economico(Alto,Medio,Bajo)"
            onChangeText={(text) => this.setState({ Nivel_economico: text })}
          />
          <Input
            label="Posibilidades de compra"
            value={this.state.posibilidad_compra}
            inputStyle={{ marginTop: 10 }}
            placeholder="Alto,Medio,Bajo"
            onChangeText={(text) => this.setState({ posibilidad_compra: text })}
          />
          <Input
            label="Intereses"
            value={this.state.intereses}
            inputStyle={{ marginTop: 10 }}
            placeholder="Deporte,Entretenimiento,Arte"
            onChangeText={(text) => this.setState({ intereses: text })}
          />
          <Input
            label="Fotografía"
            value={this.state.Fotografia}
            inputStyle={{ marginTop: 10 }}
            placeholder="URL de fotografía"
            onChangeText={(text) => this.setState({ Fotografia: text })}
          />
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
              this.Guardar();
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 22,
                textAlign: 'center',
                textAlignVertical: 'center',
              }}>
              Guardar
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}