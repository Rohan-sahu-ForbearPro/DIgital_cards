import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView,
  } from 'react-native';
  import React, { useEffect, useState } from 'react';
  import {useNavigation} from '@react-navigation/native';
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
  import Entypo from 'react-native-vector-icons/Entypo';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import Foundation from 'react-native-vector-icons/Foundation';
  import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
  import Feather from 'react-native-vector-icons/Feather';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import axios from 'axios';
  import AsyncStorage from '@react-native-async-storage/async-storage';

  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../redux/feature/ThemeSlice';
import Loading from '../Loader';

  export default function VCARD_SCREEN() {
    
    const navigation = useNavigation();
    const theme = useSelector(state =>  state.theme.data);
    const selecter =useSelector(state=> state.theme.data.Vcard);
    const isLoading= useSelector (state=> state.feature.isLoading);   
    const dashboardData = useSelector(state => state.feature.DashBoardData);
    const [visible, setVisible] = useState(false);
    const [visibleMenuIndex, setVisibleMenuIndex] = useState(null);
    const dispatch =useDispatch();
    const showMenu = index => {
      setVisible(true);
      setVisibleMenuIndex(index);
    };
  
    const hideMenu = () => {
      setVisible(false);
      setVisibleMenuIndex(null);
    };
  
   

      let textColor = theme == 'light' ? '#000' : '#fff';
      let bgColor = theme == 'light' ? '#fff' : '#575757';
    
      const changeTheame = async () => {
        await AsyncStorage.setItem('theme', theme == 'light' ? 'dark' : 'light');
        dispatch(changeTheme(theme == 'light' ? 'dark' : 'light'));
      };

    return (
      <View style={{flex: 1, backgroundColor: theme=='light'?'#fff':'#333'}}>
       {isLoading?<Loading/>:null}
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: bgColor,
            }}>
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{width: '20%'}}>
              <Entypo size={40} name="menu" color={textColor}/>
            </TouchableOpacity>
            <View
              style={{
                width: '60%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 22, fontWeight: '600',color:textColor}}>Vcards</Text>
            </View>
            <TouchableOpacity
            onPress={() => {
              changeTheame();
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Feather
              name="sun"
              size={25}
              color={theme == 'light' ? 'orange' : 'black'}
            />
            <Text
              style={{
                marginLeft: 5,
                color: theme == 'light' ? 'orange' : '#fff',
              }}>
              Light
            </Text>
          </TouchableOpacity>
          </View>
          <View
            style={{flexDirection: 'row',
            backgroundColor:bgColor,height:hp(8),
            alignItems: 'center', marginTop: 20}}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: '600',
                marginHorizontal: 20,
                color:textColor
              }}>
              Vcards
            </Text>
            <AntDesign name="infocirlce" size={20} color={textColor} />
          </View>
  
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              marginHorizontal: 10,
              height: hp(8),
              paddingHorizontal: 10,
              paddingVertical: 5,
              backgroundColor:bgColor
            }}>
            <TouchableOpacity
             onPress={() => { 
               navigation.navigate('CreatVCard');
           }}
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
                Create Vcards
              </Text>
            </TouchableOpacity>
  
            <TouchableOpacity
              style={{
                height: 45,
                width: 45,
                marginHorizontal: 10,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                borderWidth: 1,
                borderColor:textColor
              }}>
              <Foundation name="download" size={30} color={textColor} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 45,
                width: 45,
                borderColor:textColor,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                borderWidth: 1,
              }}>
              <FontAwesome name="filter" size={30}  color={textColor}/>
            </TouchableOpacity>
          </View>
  
  
       {dashboardData === null&&  <View
            style={{
              marginTop: 10,
              paddingHorizontal: 10,
              alignItems: 'center',
              marginVertical: 20,
              backgroundColor:bgColor,
            }}>
            <View style={{height: hp(40),
              backgroundColor:bgColor,
              width: '100%', marginVertical: 20}}>
              <Image
                source={require('../image/empty.png')}
                style={{height: '100%', width: '100%'}}
                resizeMode="contain"
              />
            </View>
            <Text style={{fontSize: 22, fontWeight: '600', color: textColor}}>
              There are no Vcards for now
            </Text>
            <Text style={{fontSize: 16, color: textColor, marginVertical: 10}}>
              Start by creating your first Vcards.
            </Text>
          </View>
  }

  {dashboardData !== null && <>
      <View
      style={{
        backgroundColor: bgColor,
     
        height: 45,
        marginHorizontal: 10,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderColor: '#f0f0f0',
      }}>
      <View
        style={{
          width: '70%',
          justifyContent: 'center',

          paddingHorizontal: 10,
        }}>
        <Text style={{fontSize: 18, color: textColor}}>Name</Text>
      </View>
      <View
        style={{
          width: '15%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, color: textColor}}>Stats</Text>
      </View>
      <View
        style={{
          width: '15%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, color: textColor}}>Action</Text>
      </View>
    </View>
    <View >
      {dashboardData && (
        <FlatList
          data={dashboardData?.vcardlists}
          renderItem={({item, index}) => (
            <View style={{flex: 1}}>
              <View
                onPress={() => {
                  //navigation.navigate(item.navigate);
                }}
                style={{
                  height: hp(15),
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.27,
                  shadowRadius: 4.65,

                  elevation: 6,
                  borderRadius: 10,
                  backgroundColor: bgColor,
                  alignItems: 'center',

                  margin: hp(1),
                  flexDirection: 'row',
                  paddingHorizontal: 10,
                }}>
                <View
                  style={{
                    height: 80,
                    width: 80,
                    borderRadius: 40,
                  }}>
                  <Image
                    source={{uri: item?.logo?.url}}
                    style={{height: 80, width: 80, borderRadius: 40}}
                  />
                </View>
                <View
                  style={{
                    width: '45%',
                    height: 80,
                    marginLeft: 15,
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '500',
                      color: textColor,
                    }}>
                    {item.name}
                  </Text>
                  {/*
                <Text style={{}}>
                  https://cards.forebearpro.co.in/cards/{item.url_alias}
                </Text> */}
                  {!item.project_data?.name == '' && (
                    <TouchableOpacity
                      style={{
                        borderWidth: 1,
                        padding: 5,
                        borderColor:theme=='light'?'blue':'#fff',
                        borderRadius: 5,
                        marginTop: 10,
                      }}>
                      <Text style={{color: textColor}}>
                        {item.project_data?.name}
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>

                <View
                  style={{
                    width: '30%',
                    justifyContent: 'space-between',
                    paddingHorizontal: 5,
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: 5,
                      borderRadius: 5,
                    }}>
                    <FontAwesome5
                      name="chart-bar"
                      size={25}
                      color={theme=='light'?'#4582e6':'#fff'}
                    />
                    <Text
                      style={{
                        marginLeft: 5,
                        color:theme=='light'?'#4582e6':'#fff',
                        fontSize: 18,
                      }}>
                      7
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      showMenu(index);
                    }}
                    style={{
                      flexDirection: 'row',
                      width: '45%',
                      borderWidth: 1,
                      alignItems: 'center',
                      padding: 5,
                      marginLeft: 10,
                      borderRadius: 5,
                      backgroundColor: '#f0f0f0',
                    }}>
                    <Entypo
                      name="dots-three-vertical"
                      size={20}
                      color={'#333'}
                    />
                    <AntDesign name="caretdown" size={15} color={'#333'} />
                  </TouchableOpacity>
                </View>
              </View>

              {visibleMenuIndex == index && (
              
                <View style={{height: '40%'}}>
                 
                  <Menu
                    visible={visible}
                    onRequestClose={() => hideMenu(index)}
                    style={{
                      marginLeft: '55%',
                      width: '17%',
                      justifyContent: 'center',
                      backgroundColor: bgColor,
                      marginTop:hp(12),
                    }}>
                    <MenuItem
                      onPress={hideMenu}
                      style={{
                        marginLeft: -5,
                        justifyContent: 'center',
                        height: 30,
                        marginTop:5
                      }}>
                      <Entypo
                        name="share-alternative"
                        size={25}
                        color={textColor}
                      />
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '400',

                          color: textColor,
                        }}>
                        {' '}
                        Views
                      </Text>
                    </MenuItem>
                    <MenuItem onPress={hideMenu} style={{marginTop:5}}>
                      <FontAwesome6
                        name="qrcode"
                        size={20}
                        color={textColor}
                      />
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '400',
                          color: textColor,
                        }}>
                        {' '}
                        QR Code
                      </Text>
                    </MenuItem>
                    <MenuItem onPress={hideMenu} style={{}}>
                      <FontAwesome5
                        name="chart-bar"
                        size={20}
                        color={textColor}
                      />
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '400',
                          color: textColor,
                        }}>
                        {' '}
                        Statistics
                      </Text>
                    </MenuItem>
                    <MenuItem onPress={hideMenu} style={{}}>
                      <FontAwesome
                        name="bars"
                        size={20}
                        color={textColor}
                      />
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '400',
                          color: textColor,
                        }}>
                        {' '}
                        VCard Blocks
                      </Text>
                    </MenuItem>
                    <MenuItem onPress={hideMenu} style={{}}>
                      <Ionicons name="copy" size={20} color={textColor} />
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '400',
                          color: textColor,
                        }}>
                        {' '}
                        Duplicate
                      </Text>
                    </MenuItem>
                    <MenuItem
                      onPress={hideMenu}
                      style={{justifyContent: 'center'}}>
                      <FontAwesome5
                        name="pencil-alt"
                        size={20}
                        color={textColor}
                      />
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '400',
                          color: textColor,
                        }}>
                        {' '}
                        Edit
                      </Text>
                    </MenuItem>
                    <MenuItem style={{}}>
                      {/* <TouchableOpacity onPress={()=>console.log('fsfssafs')
        }> */}
                      <MaterialCommunityIcons
                        name="logout"
                        size={25}
                        color={textColor}
                      />
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '400',
                          color: textColor,
                        }}>
                        {' '}
                        Delete
                      </Text>
                      {/* </TouchableOpacity> */}
                    </MenuItem>
                  </Menu>
                  
                </View>
              )}
            </View>
          )}
        />
      )}
    </View>
    </>
  }
          <View style={{height: hp(20), marginTop: 20, marginHorizontal: 10}}>
            <View style={{height: hp(10), width: '40%'}}>
              <Image
                source={require('../image/logo.png')}
                style={{height: '100%', width: '100%'}}
                resizeMode="contain"
              />
            </View>
            <View style={{marginTop: 10}}>
              <Text style={{color:textColor}}>Copyright © 2024 Bluestone Smart Card.</Text>
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
  