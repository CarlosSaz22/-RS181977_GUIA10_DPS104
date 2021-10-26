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
export default class PaginaDetalle extends React.Component {
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
    title: 'Editar datos',
    headerStyle: {
      backgroundColor: '#7B8CDE',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  Actualizar() {
    fetch(
      'https://guia10rs181977.000webhostapp.com/api2.php?comando=editar&nombres=' +
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
        '&Nivel_economico=' +
        this.state.Nivel_economico +
        '&posibilidad_compra=' +
        this.state.posibilidad_compra +
        '&intereses=' +
        this.state.intereses +
        '&Fotografia=' +
        this.state.Fotografia +
        '&id=' +
        this.state.id,
      {
        method: 'GET',
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        const mensaje = responseJson.mensaje;
        console.log(mensaje);
        if (!mensaje) alert('Error al actualizar!');
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
  Eliminar() {
    fetch(
      'https://guia10rs181977.000webhostapp.com/api2.php?comando=eliminar&id=' +
        this.state.id,
      {
        method: 'GET',
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        const mensaje = responseJson.mensaje;
        console.log(mensaje);
        if (!mensaje) alert('Error al eliminar!');
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
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
              height: 60,
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                height: 40,
                justifyContent: 'center',
                marginLeft: 5,
              }}
              onPress={() => {
                this.Actualizar();
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 22,
                  textAlign: 'center',
                  backgroundColor: '#7B8CDE',
                  textAlignVertical: 'center',
                  padding: 3,
                }}>
                Actualizar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                height: 40,
                justifyContent: 'center',
                marginLeft: 5,
                marginRight: 5,
              }}
              onPress={() => {
                this.Eliminar();
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 22,
                  textAlign: 'center',
                  backgroundColor: '#7B8CDE',
                  textAlignVertical: 'center',
                  padding: 3,
                }}>
                Eliminar
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, padding: 20 }}>
            <NavigationEvents
              onWillFocus={() => {
                // Do your things here
                console.log('Entro aqui' + navigation.getParam('nombres'));
                this.setState({
                  nombres: navigation.getParam('nombres'),
                  apellidos: navigation.getParam('apellidos'),
                  direccion_postal: navigation.getParam('direccion_postal'),
                  direccion_trabajo: navigation.getParam('direccion_trabajo'),
                  telefono: navigation.getParam('telefono'),
                  correo: navigation.getParam('correo'),
                  Nivel_economico: navigation.getParam('Nivel_economico'),
                  posibilidad_compra: navigation.getParam('posibilidad_compra'),
                  intereses: navigation.getParam('intereses'),
                  Fotografia: navigation.getParam('Fotografia'),
                  id: navigation.getParam('id'),
                });
              }}
            />
            <Input
              label="Nombre"
              value={this.state.nombres}
              placeholder="Nombre"
              onChangeText={(text) => this.setState({ nombres: text })}
            />
            <Input
              label="Apellido"
              value={this.state.apellidos}
              inputStyle={{ marginTop: 10 }}
              onChangeText={(text) => this.setState({ apellidos: text })}
            />
            <Input
              label="Dirección Postal"
              value={this.state.direccion_postal}
              inputStyle={{ marginTop: 10 }}
              onChangeText={(text) => this.setState({ direccion_postal: text })}
            />
            <Input
              label="Dirección Trabajo"
              value={this.state.direccion_trabajo}
              inputStyle={{ marginTop: 10 }}
              onChangeText={(text) =>
                this.setState({ direccion_trabajo: text })
              }
            />
            <Input
              label="Telefono"
              value={this.state.telefono}
              inputStyle={{ marginTop: 10 }}
              placeholder="Numero de telefono"
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
              onChangeText={(text) =>
                this.setState({ posibilidad_compra: text })
              }
            />
            <Input
              label="Intereses"
              value={this.state.intereses}
              inputStyle={{ marginTop: 10 }}
              placeholder="Futbol,basketball"
              onChangeText={(text) => this.setState({ intereses: text })}
            />
            <Input
              label="Fotografía"
              value={this.state.Fotografia}
              inputStyle={{ marginTop: 10 }}
              placeholder="URL de fotografía"
              onChangeText={(text) => this.setState({ Fotografia: text })}
            />
            <Image
              style={{ width: 100, height: 100, alignSelf: 'center' }}
              source={{ uri: this.state.Fotografia }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}