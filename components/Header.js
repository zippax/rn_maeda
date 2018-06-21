import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'
import Icon from 'react-native-vector-icons/dist/Ionicons'


export default class Header extends Component{
  render(){
    return(
      <View style={styles.headerHolder}>
        <Text style={styles.address}>المنطقة الشرقية : سيهات</Text>
        <Icon name="ios-arrow-dropdown" size={18} color='#000' style={styles.addressIcon} />
        <View style={styles.filterHolder}>
          <Icon name="md-menu" size={25} color='#000' style={styles.addressIcon} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerHolder:{
    backgroundColor: '#fff',
    padding: 15,
    paddingTop: 25,
    paddingBottom: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  address:{
    fontWeight: '800',
    fontSize: 12,
    marginTop: 10
  },
  addressIcon:{
    marginLeft: 5,
    marginTop: 10
  },
  filterHolder:{
    flex: 1,
    marginRight: 2
  },
  filterIcon:{
    alignSelf: 'flex-end',
    fontWeight: '800',
    color: '#CF082C'
  }
})
