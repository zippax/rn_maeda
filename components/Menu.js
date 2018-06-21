import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'
import RestaurantDetails from './menu/restaurantDetails'


export default class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <RestaurantDetails />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
