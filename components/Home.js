import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native'
import axios from 'axios'

import Icon from 'react-native-vector-icons/dist/Ionicons'
import * as Animatable from 'react-native-animatable'

import Header from './Header'
import Footer from './Footer'
import { Actions } from 'react-native-router-flux'

export default class Home extends Component{
  constructor(props){
    super(props)
    this.state = {restaurants:[]}
  }
  componentDidMount(){
    let v = Math.random().toString(36).substring(7);
    axios.get('https://www.maeda.com.sa/restaurantsApi.php?API=maeda&v='+v).then(response =>this.setState({restaurants:response.data}));
  }
  render_restaurants(){
    return this.state.restaurants.map(restaurant =>
      // Start Restaurant Component
      <TouchableOpacity onPress={() => Actions.menu()} activeOpacity={1} key={restaurant.id}>
        <View style={styles.restaurant} >
          <View style={styles.restaurantImage}>
          <Image
            source={require('../assets/images/loading01.gif')}
            resizeMode={'cover'}
            style={{ width: 150, height: 150 , zIndex: 1, position: 'absolute', alignSelf: 'center', opacity: 0.2}} />
          <Image
            resizeMode={'cover'}
            style={{ width: '100%', height: 195, position: 'absolute', zIndex: 2 }}
            // source={{uri: restaurant.restaurant_logo}}
          />
          </View>
          <View style={styles.detailsHolder} >
            <View style={styles.restaurantDetails}>
              <Text style={styles.restaurantName}>{restaurant.name}</Text>
              <Text style={styles.restaurantType}>{restaurant.address}</Text>
              <View style={styles.rateHolder}>
                <Icon name="ios-star" size={15} color='#000' style={styles.addressIcon} />
                <Text> 3.8</Text>
                <Text style={{color: '#ccc'}}> (393)</Text>
              </View>
            </View>
            <View style={styles.avgTime}>
              <Text>{Number(restaurant.avgTime) + 5}-{Number(restaurant.avgTime) - 5} دقيقة</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      // End Restaurant Component
    )
  }
  render(){
    return(  <Animatable.View style={styles.container} animation="">
        <Header />
        <ScrollView>
          <View style={styles.restaurantsHolder}>
            {this.render_restaurants()}
          </View>
        </ScrollView>
        <Footer />
      </Animatable.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  restaurantsHolder:{

  },
  restaurant:{
    padding: 15,
    backgroundColor: '#fff',
  },
  restaurantImage:{
    backgroundColor: '#f8f8f8',
    height: 195,
    justifyContent: 'center'
  },
  detailsHolder:{
    flex: 1,
    flexDirection: 'row'
  },
  restaurantDetails:{
    flex: 1
  },
  restaurantName:{
    fontWeight: '800',
    marginTop: 10,
    textAlign: 'left'
  },
  restaurantType:{
    color: '#ccc',
    marginTop: 5,
    textAlign: 'left'
  },
  rateHolder:{
    flexDirection: 'row',
    marginTop: 5
  },
  avgTime:{
    marginTop: 10,
  },
  heart:{
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 1,
    opacity: 0.9,
    fontSize: 22
  },
  addressIcon:{
    marginRight: 5
  }
})
