import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'
import { Actions } from 'react-native-router-flux'
export default class List extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.categoryHolder}>
          <Text style={styles.category}>النوديلز و الباستا</Text>

          <TouchableOpacity style={styles.itemsHolder} onPress={() => Actions.topping()} activeOpacity={1}>
            <View style={styles.item}>
              <Text style={styles.item_name}>نودلز الترياكي</Text>
              <Text style={styles.item_description}>مكون من قطع الدجاج المشوية مع خلطة من الخضار الطازجة مضافة عليها صلصة الترياكي اليابانية</Text>
              <Text style={styles.item_price}>SAR 14.00</Text>
            </View>
            <View style={styles.imageHolder}>
              <Image
                source={require('../../assets/images/noodles_full.jpg')}
                resizeMode={'contain'}
                style={{ width: 180 / 2, height: 180 / 2, zIndex: 1}} />
            </View>
          </TouchableOpacity>


          <TouchableOpacity style={styles.itemsHolder} onPress={() => Actions.topping()} activeOpacity={1}>
            <View style={styles.item}>
              <Text style={styles.item_name}>نودلز الخضار</Text>
              <Text style={styles.item_description}>مكون من الخضار المشكلة مع صلصة نوديلا البيضاء بالفطر</Text>
              <Text style={styles.item_price}>SAR 10.00</Text>
            </View>
            <View style={styles.imageHolder}>
              <Image
                source={require('../../assets/images/veg.jpg')}
                resizeMode={'contain'}
                style={{ width: 180 / 2, height: 180 / 2, zIndex: 1}} />
            </View>
          </TouchableOpacity>
        </View>




        <View style={styles.categoryHolder}>
          <Text style={styles.category}>المشروبات الباردة</Text>

          <TouchableOpacity style={styles.itemsHolder} onPress={() => Actions.topping()} activeOpacity={1}>
            <View style={styles.item}>
              <Text style={styles.item_name}>مشروبات غازية</Text>
              <Text style={styles.item_description}>بيبسي - كوكا كولا - سفن آب - ميراندا</Text>
              <Text style={styles.item_price}>SAR 2.30</Text>
            </View>
            <View style={styles.imageHolder}>
              <Image
                source={require('../../assets/images/soda.jpg')}
                resizeMode={'contain'}
                style={{ width: 180 / 2, height: 180 / 2, zIndex: 1}} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemsHolder} onPress={() => Actions.topping()} activeOpacity={1}>
            <View style={styles.item}>
              <Text style={styles.item_name}>عصير برتقال</Text>
              <Text style={styles.item_description}>عصير برتقال طازح ١٠٠٪ يحضر يوميا من الفاكهة الطازجة</Text>
              <Text style={styles.item_price}>SAR 8.00</Text>
            </View>
            <View style={styles.imageHolder}>
              <Image
                source={require('../../assets/images/orange.jpg')}
                resizeMode={'contain'}
                style={{ width: 180 / 2, height: 180 / 2, zIndex: 1}} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryHolder:{
    padding: 20,
    alignItems: 'flex-start'
  },
  category:{
    fontWeight: 'bold',
    color: '#C90727'
  },
  itemsHolder:{
    flexDirection: 'row'
  },
  item:{
    flex:4,
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 20
  },
  item_name:{
    textAlign: 'left',
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#121'
  },
  item_description:{
    textAlign: 'left',
    color: '#121'
  },
  item_price:{
    alignSelf: 'flex-start',
    marginTop: 20,
    color: 'green'
  },
  imageHolder:{
    flex:2,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'flex-end',
  }
})
