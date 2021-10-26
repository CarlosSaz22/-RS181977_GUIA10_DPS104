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
export default class listarProductos extends React.Component {
  state = {
    elementos: [],
    total: 0,
  };
  static navigationOptions = {
    title: 'Clientes',
    headerStyle: {
      backgroundColor: '#7B8CDE',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  cargarRegistros() {
    console.log('Prueba');
    fetch('https://guia10rs181977.000webhostapp.com/api2.php?comando=listar', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        const listado = responseJson.records;
        console.log(listado);
        this.setState({
          elementos: listado,
          total: listado.length,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationEvents
          onWillFocus={() => {
            // Do your things here
            this.cargarRegistros();
          }}
        />
        <Text
          style={{ lineHeight: 1 }}
          style={{
            fontSize: 18,
            textAlign: 'center',
            height: 40,
            marginTop: 10,
            backgroundColor: 'lightgray',
            textAlignVertical: 'center',
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 10,
          }}>
          {this.state.total} Clientes
        </Text>
        <FlatList
          data={this.state.elementos}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              //onPress = {() => this.alertItemName(item)}
              onPress={() => this.props.navigation.navigate('Detalles', item)}>
              <View
                style={{ flexDirection: 'row', marginTop: 15, marginLeft: 2 }}>
                <Image
                  style={{ width: 90, height: 90 }}
                  source={{ uri: item.Fotografia }}
                />
                <View style={{ height: 80, marginLeft: 5 }}>
                  <Text style={{ flex: 1, fontSize: 18 }}>{item.nombres}</Text>
                  <Text style={{ flex: 1, fontSize: 16, fontWeight: 'bold' }}>
                    {item.apellidos}
                  </Text>
                  <Text style={{ flex: 1, fontSize: 14 }}>{item.correo}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 70,
            position: 'absolute',
            bottom: 10,
            right: 10,
            height: 70,
            backgroundColor: '#7B8CDE',
            borderRadius: 100,
          }}
          onPress={() => this.props.navigation.navigate('Agregar')}>
          <Icon name="plus" size={30} color="white" />
        </TouchableOpacity>
      </View>
    );
  }
}