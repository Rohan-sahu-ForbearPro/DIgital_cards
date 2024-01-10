import {View, Text, Image, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <ScrollView>
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
          <Text style={{fontSize: 22, fontWeight: '600'}}>Dashboard</Text>
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

      <View style={{marginTop: 20}}>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({item}) => (
            <View style={{flex: 1}}>
              <TouchableOpacity
                style={{
                  height: hp(30),
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.27,
                  shadowRadius: 4.65,

                  elevation: 6,
                  borderRadius: 10,
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: hp(1),
                }}>
                <View style={{alignItems: 'center'}}>
                  {item.name == 'vcards' && (
                    <FontAwesome name="vcard" size={30} color={'#ed2f95'} />
                  )}

                  {item.name == 'projects' && (
                    <FontAwesome5
                      name="project-diagram"
                      size={30}
                      color={'#ed2f95'}
                    />
                  )}
                  {item.name == 'pixels' && (
                    <MaterialIcons name="pix" size={30} color={'#ed2f95'} />
                  )}
                  {item.name == 'domains' && (
                    <Feather name="globe" size={30} color={'#ed2f95'} />
                  )}

                  <Text style={{fontSize: 22, fontWeight: '500', marginTop: 8}}>
                    {item.name}
                  </Text>
                </View>
                <Text style={{fontSize: 22, fontWeight: '500', marginTop: 1}}>
                  {item.count}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            marginHorizontal:10,
            backgroundColor:'#fff',
            height:'10%',
            paddingHorizontal:10,
            paddingVertical:5
          }}>
          <View style={{flexDirection: 'row', 
          justifyContent:'center',
          alignItems: 'center'}}>
            <FontAwesome name="vcard" size={25} color={'#000'} />
            <Text
              style={{
                marginLeft: 10,
                fontWeight: '600',
                fontSize: 20,
                color: '#00',
              }}>
              LETEST VCARDS
            </Text>
          </View>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              borderWidth: 1,
       
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: '#ed2f95',
              paddingHorizontal: 10,
            }}>
            <AntDesign name="pluscircle" size={25} color={'#ed2f95'} />
            <Text
              style={{
                marginLeft: 10,
                fontWeight: '600',
                fontSize: 16,
                color: '#ed2f95',
              }}>
              Create Vcard
            </Text>
          </TouchableOpacity>
        </View>
      </View>


      <View style={{backgroundColor:'#fff',
      marginTop:10,height:45,marginHorizontal:10,
      flexDirection:'row',justifyContent:'space-between'}}>


<View style={{width:'40%',
justifyContent:'center',
alignItems:'center'}}>
    <Text style={{fontSize:18,color:'#000'}}>Vcard</Text>
</View>
<View style={{width:'40%',
justifyContent:'center',
alignItems:'center'}}>
  <Text style={{fontSize:18,color:'#000'}}>Status</Text>
</View>
      </View>

      <View style={{marginTop: 10,paddingHorizontal:10,
        marginHorizontal:10,
        backgroundColor:'#fff'}}>
        <View style={{height:hp(10), width: '40%',}}>
          <Image
            source={require('../image/logo.png')}
            style={{height:'100%', width:'100%'}}
            resizeMode='contain'
          />
        </View>
        <View style={{marginTop:10}}>
          <Text>Copyright © 2024 Bluestone Smart Card.</Text>
        </View>
        <TouchableOpacity style={{marginTop:5}}>
          <Text style={{color:'blue'}}>blog</Text>
        </TouchableOpacity>

        <View style={{height:hp(10)}} />
      </View>
      </ScrollView>
    </View>
  );
}

const data = [
  {
    name: 'vcards',
    count: 0,
  },
  {
    name: 'projects',
    count: 0,
  },
  {
    name: 'pixels',
    count: 0,
  },
  {
    name: 'domains',
    count: 0,
  },
];
