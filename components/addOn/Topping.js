import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons'
import MaterialIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import * as Animatable from 'react-native-animatable'
import { Actions } from 'react-native-router-flux'

export default class Question extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Animatable.View animation="slideInUp" style={{ marginBottom: 100}}>
          <StatusBar barStyle="light-content" hidden={true} />
          <View style={styles.imageHolder}>
            <Image
              source={require('../../assets/images/loading04.gif')}
              resizeMode={'contain'}
              style={{ width: '50%', height: 195, zIndex: 1, position: 'absolute', alignSelf: 'center'}} />
            <Image
              resizeMode={'cover'}
              style={{ width: '100%', height: 220, position: 'absolute', zIndex: 2 }}
              source={{uri: 'https://0013a05e776cb3a3cacf-7d16a3f45b9fed243f74feb2d088df02.ssl.cf1.rackcdn.com/Andy-Post-Food-Photography-Bowl-of-Pasta.jpg'}}
            />
          </View>
          <View style={styles.header}>
            <Text style={styles.h1}>نودلز الترياكي</Text>
            <View style={styles.separator} />
            <Text style={styles.h2}>مكون من قطع الدجاج المشوية مع خلطة من الخضار الطازجة مضافة عليها صلصة الترياكي اليابانية</Text>
          </View>
          // Start Question
          <View style={styles.questionHolder}>
            <View style={styles.questionText}>
              <Text>يرجى اختيار حجم الصنف</Text>
            </View>
            <View style={styles.questionBuble}>
                <Icon name="md-more" size={20}  />
            </View>
          </View>
          // Start Topping
          <View style={styles.toppingHolder}>
            <View style={styles.toppingBuble}>
                <Icon name="ios-radio-button-off" size={20}  />
            </View>
            <View style={styles.toppingText}>
              <Text>صغير</Text>
            </View>
          </View>
          <View style={styles.toppingHolder}>
            <View style={styles.toppingBuble}>
                <Icon name="ios-radio-button-on" size={20}  color="green"/>
            </View>
            <View style={styles.toppingText}>
              <Text>وسط</Text>
            </View>
          </View>
          <View style={styles.toppingHolder}>
            <View style={styles.toppingBuble}>
                <Icon name="ios-radio-button-off" size={20}  />
            </View>
            <View style={styles.toppingText}>
              <Text>كبير</Text>
            </View>
          </View>
          // End Topping
          // Start Question
          <View style={styles.questionHolder}>
            <View style={styles.questionText}>
              <Text>يرجى اختيار ما تريده بالصنف</Text>
            </View>
            <View style={styles.questionBuble}>
                <Icon name="md-more" size={20}  />
            </View>
          </View>
          // Start Topping
          <View style={styles.toppingHolder}>
            <View style={styles.toppingBuble}>
                <Icon name="ios-checkmark-circle" size={20} color="green" />
            </View>
            <View style={styles.toppingText}>
              <Text>روبيان تندوري</Text>
              <Text style={{marginRight: 20, flex:1, color: 'green'}}>+10.00</Text>
            </View>
          </View>
          <View style={styles.toppingHolder}>
            <View style={styles.toppingBuble}>
                <Icon name="ios-checkmark-circle" size={20}  color="green"/>
            </View>
            <View style={styles.toppingText}>
              <Text>فلفل احمر حلو</Text>
            </View>
          </View>
          <View style={styles.toppingHolder}>
            <View style={styles.toppingBuble}>
                <Icon name="ios-radio-button-off" size={20}  />
            </View>
            <View style={styles.toppingText}>
              <Text>بصل</Text>
            </View>
          </View>
          <View style={styles.toppingHolder}>
            <View style={styles.toppingBuble}>
                <Icon name="ios-checkmark-circle" size={20}  color="green"/>
            </View>
            <View style={styles.toppingText}>
              <Text>صلصة الترياكي</Text>
            </View>
          </View>
          // End Topping


          <View style={styles.addBtn}>
            <Text style={{color:'#fff'}}>اضافة للسلة</Text>
          </View>
          <TouchableOpacity style={styles.closeBtn} onPress={()=> Actions.pop()}>
            <Icon name="ios-close-circle-outline" size={30}  color="white"/>
          </TouchableOpacity>
        </Animatable.View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  imageHolder:{
    height: 220
  },
  header:{
    padding: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  h1:{
    fontWeight: 'bold',
    fontSize: 18
  },
  h2:{
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
    color: '#535561'
  },
  separator:{
    backgroundColor: '#535561',
    height: 2,
    width: 30,
    marginTop: 10
  },
  questionHolder:{
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#eee',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'flex-start'
  },
  questionText:{
    flex: 1,
    alignItems: 'flex-start'
  },
  questionBuble:{
    flex: 1,
  },
  toppingHolder:{
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'flex-start'
  },
  toppingText:{
    flexDirection: 'row'
  },
  toppingBuble:{
    marginRight: 10
  },
  addBtn:{
    padding: 15,
    backgroundColor: 'green',
    alignSelf: 'stretch',
    alignItems: 'center',
    margin: 5,
  },
  closeBtn:{
    position: 'absolute',
    top: 10,
    right: 10
  }
});
