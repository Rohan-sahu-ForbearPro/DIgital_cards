import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView,
    TextInput,
    StyleSheet,
  } from 'react-native';
  import React, { useState } from 'react';
  import {useNavigation} from '@react-navigation/native';
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
  import Entypo from 'react-native-vector-icons/Entypo';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  import Foundation from 'react-native-vector-icons/Foundation';
  import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
  import Feather from 'react-native-vector-icons/Feather';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import { Dropdown } from 'react-native-element-dropdown';

  export default function CreatePixel() {
    const [value, setValue] = useState(null);
    const navigation = useNavigation();
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView
          style={{paddingHorizontal: 5}}
          showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#fff',
            }}>
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{width: '20%'}}>
              <Entypo size={40} name="menu" />
            </TouchableOpacity>
            <View
              style={{
                width: '60%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 22, fontWeight: '600'}}>Create pixel </Text>
            </View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Feather name="sun" size={25} color={'#000'} />
              <Text style={{marginLeft: 5, color: '#000'}}>Light</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: '600',
                marginHorizontal: 20,
              }}>
              Create a new pixel
            </Text>
            <AntDesign name="infocirlce" size={20} color={'#000'} />
          </View>
  
          <View
            style={{
              marginHorizontal: 5,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              backgroundColor: '#fff',
              elevation: 5,
              marginTop: 15,
              height: hp(80),
              borderRadius: 5,
            }}>
       
            <View style={{marginTop: 25, paddingHorizontal: 10}}>
              <View style={{flexDirection: 'row', marginHorizontal: 10}}>
                <FontAwesome5 name="signature" size={19} color={'#000'} />
                <Text
                  style={{fontSize: 18, marginHorizontal: 10, fontWeight: '600'}}>
                  Name
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  shadowColor: '#000',
  
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
  
                  elevation: 8,
                  backgroundColor: '#fff',
                  marginTop: 15,
  
                  borderRadius: 10,
                  height: hp(8),
                }}>
                <View
                  style={{
                    backgroundColor: '#fff',
                    height: '100%',
                    width: '100%',
                  }}>
                  <TextInput
                    placeholder="name"
                    style={{fontSize: 14, paddingHorizontal: 10}}
                  />
                </View>
              </View>
            </View>
            <View style={{marginTop: 25, paddingHorizontal: 10}}>
              <View style={{flexDirection: 'row', marginHorizontal: 10}}>
                <Ionicons name="invert-mode" size={25} color={'#000'} />
                <Text
                  style={{fontSize: 18, marginHorizontal: 10, fontWeight: '600'}}>
                  Type
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  shadowColor: '#000',
  
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
  
                  elevation: 8,
                  backgroundColor: '#fff',
                  marginTop: 15,
  
                  borderRadius: 10,
                  height: hp(8),
                }}>
                <View
                  style={{
                    backgroundColor: '#fff',
                    height: '100%',
                    width: '100%',
                  }}>
                  <Dropdown
          style={[styles.dropdown]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
 
         showsVerticalScrollIndicator={false}
          data={data}
        
          maxHeight={200}
          labelField="label"
          valueField="value"
          placeholder={'Select item'}
          searchPlaceholder="Search..."
          value={value}
      
         
          onChange={item => {
            setValue(item.value);
           
          }}
       
            />
                </View>
              </View>
            </View>
            <View style={{marginTop: 25, paddingHorizontal: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 10,
                  alignItems: 'center',
                }}>
                <Entypo name="code" size={25} color={'#000'} />
                <Text
                  style={{fontSize: 18, marginHorizontal: 10, fontWeight: '600'}}>
                  Pixel ID
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  shadowColor: '#000',
  
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
  
                  elevation: 8,
                  backgroundColor: '#fff',
                  marginTop: 15,
  
                  borderRadius: 10,
                  height: hp(8),
                }}>
                <View
                  style={{
                    backgroundColor: '#fff',
                    height: '100%',
                    width: '100%',
                  }}>
                  <TextInput
                    placeholder="Pixel"
                    style={{fontSize: 14, paddingHorizontal: 10}}
                  />
                </View>
              </View>
            </View>
            <View style={{marginHorizontal: 10, marginVertical: 25}}>
              <Text>Enter the pixel id from this specific pixel type you chose.
</Text>
            </View>
  
        
  
            <TouchableOpacity
              style={{
                marginHorizontal: 20,
                height: hp(6),
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#1034a6',
                borderRadius: 10,
                marginVertical:10
              }}>
              <Text style={{fontWeight:'400',fontSize:20,color:'#fff'}}>Create</Text>
            </TouchableOpacity>
          </View>
  
          <View style={{height: hp(20), marginTop: 20, marginHorizontal: 10}}>
            <View style={{height: hp(10), width: '40%'}}>
              <Image
                source={require('../image/logo.png')}
                style={{height: '100%', width: '100%'}}
                resizeMode="contain"
              />
            </View>
            <View style={{marginTop: 10}}>
              <Text>Copyright © 2024 Bluestone Smart Card.</Text>
            </View>
            <TouchableOpacity style={{marginTop: 5}}>
              <Text style={{color: 'blue'}}>blog</Text>
            </TouchableOpacity>
          </View>
          <View style={{height: hp(10)}} />
        </ScrollView>
      </View>
    );
  }
  
  const data = [
    { label: 'Facebook', value: '1' },
    { label: 'Google Analytics', value: '2' },
    { label: 'Google Tag Manager', value: '3' },
    { label: 'Linkedln', value: '4' },
    { label: 'Pinterest', value: '5' },
    { label: 'Twitter', value: '6' },
    { label: 'Quora', value: '7' },
    { label: 'Tik-Tok', value: '8' },
    { label: 'Snapchat', value: '8' },
  ];
  const styles = StyleSheet.create({
    
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderRadius:10,
      paddingHorizontal: 8,
    },
    
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    
    
  });