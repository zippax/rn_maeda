import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
import Icon from 'react-native-vector-icons/dist/Ionicons'


export default class Footer extends Component{
  render(){
    return(
      <View style={styles.footerHolder}>
        <Icon name="md-person" size={25} color='#000' style={styles.footerIcon} />
        <Icon name="ios-basket" size={25} color='#000' style={styles.footerIcon} />
        <Icon name="ios-search" size={25} color='#000' style={styles.footerIcon} />
        <Icon name="md-home" size={25} color='#000' style={styles.footerIcon} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  footerHolder:{
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    paddingBottom: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    justifyContent: 'space-around'
  },
  footerIcon:{
    color: '#121'
  },
})
