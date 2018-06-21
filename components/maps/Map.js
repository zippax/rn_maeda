import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/dist/Ionicons'
import MaterialIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import { Actions } from 'react-native-router-flux'
import * as Animatable from 'react-native-animatable'

export default class Maps extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon name="ios-close" size={25} color='#000' style={{ position: 'absolute', top:10, right:10}} onPress={() => Actions.pop()}/>
          <Animatable.Text animation="zoomIn">MAP</Animatable.Text>
        </View>
        <View style={styles.hours}>
          <Text style={{fontWeight: 'bold'}}>العنوان</Text>
          <View style={styles.addressHolder}>
            <MaterialIcon name="map-marker" size={15} color='#000' style={{marginRight: 5, marginTop:2}} />
            <Text>سيهات - حي الخصاب ، شارع قتادة بن النعمان</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header:{
    flex: 1,
    backgroundColor: '#ddd',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  },
  hours:{
    flex: 2,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'flex-start'
  },
  addressHolder:{
    flexDirection: 'row',
    marginTop: 10
  }
})
