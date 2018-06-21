import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons'
import MaterialIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import { Actions } from 'react-native-router-flux'
import List from './List'
import * as Animatable from 'react-native-animatable'
var {height, width} = Dimensions.get('window')

export default class RestaurantDetails extends Component {
  render() {
    return (
      <View style={styles.container}>
          <StatusBar barStyle="light-content" hidden={true} />
        <Animatable.View animation="slideInDown">
          <View style={{zIndex:3, marginTop: 10, flexDirection: 'row', display: 'flex'}}>
            <TouchableOpacity onPress={() => Actions.pop()} style={{marginRight:10, position: 'absolute', right: 0}}>
              <Icon name="md-arrow-back" size={30} color='#fff' />
            </TouchableOpacity>
            <Icon name="ios-chatbubbles-outline" size={30} color='#fff' style={{zIndex:3, marginRight:10, marginLeft: 15}} />
          </View>
          <Image
            source={require('../../assets/images/loading04.gif')}
            resizeMode={'contain'}
            style={{ width: '50%', height: 195, zIndex: 1, position: 'absolute', top:-30, alignSelf: 'center'}} />
          <Image
            resizeMode={'cover'}
            style={{ width: '100%', height: 220, position: 'absolute', zIndex: 2 }}
            source={{uri: 'https://0013a05e776cb3a3cacf-7d16a3f45b9fed243f74feb2d088df02.ssl.cf1.rackcdn.com/Andy-Post-Food-Photography-Bowl-of-Pasta.jpg'}}
          />

        <View style={styles.restaurantDetails}>
          <Text style={styles.restaurant_name}>نوديلا - Noodella</Text>
          <Text style={styles.restaurant_address}>سيهات - حي الطف - شارع قتادة بن النعمان</Text>
          <View style={styles.detailsFooter}>
            <View style={styles.left}>
              <Icon name="md-time" size={15} color='#000' style={{marginRight: 5, marginTop:2, color: 'green'}} />
              <Text style={styles.leftText}>45-30 دقيقة</Text>
            </View>
            <View style={styles.right}>
              <Icon name="md-star" size={15} color='#000' style={{marginRight: 5, marginLeft: 20, marginTop:0, color: 'orange'}} />
              <Text style={styles.rightText}><Text style={{color: '#aaa'}}>(345)</Text> 4.6</Text>
            </View>
          </View>
        </View>
        </Animatable.View>
        <Animatable.View animation="slideInUp">
        <View style={styles.hours}>
          <Text>الموقع و ساعات العمل</Text>
          <Text style={{color: 'green', flex: 2}} onPress={() => Actions.maps()}>عرض المعلومات</Text>
          <Icon name="ios-arrow-back" size={15} color='#000' style={{marginRight: 0, marginLeft: 5, color: 'green', marginTop:2}} />
        </View>
        <View style={styles.search}>
          <Text style={{marginTop:3}}>قائمة الطعام</Text>
          <MaterialIcon name="format-list-checks" size={22} color='#000' style={{marginRight: 0, marginLeft: 5, color: 'green', marginTop:2, flex: 2}} />
        </View>
        <List />
        </Animatable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  restaurantDetails:{
    backgroundColor: 'white',
    width: width - 30,
    padding:30,
    zIndex:2,
    alignSelf: 'center',
    marginTop: 90,
    borderRadius: 3,
    shadowOffset: { width: 1, height: 0 },
    shadowColor: '#ddd',
    shadowOpacity: 0.4,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  restaurant_name:{
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#121212'
  },
  restaurant_address:{

  },
  detailsFooter:{
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  left:{
    flex:1,
    flexDirection: 'row',
  },
  right: {
    flex:2,
    flexDirection: 'row',
  },
  hours:{
    display: 'flex',
    flexDirection: 'row',
    padding:20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    alignItems: 'flex-start'
  },
  search:{
    display: 'flex',
    flexDirection: 'row',
    padding:10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    alignItems: 'flex-start'
  }
})
