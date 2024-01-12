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
  import React,{useState} from 'react';
  import {useNavigation} from '@react-navigation/native';
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
  import Entypo from 'react-native-vector-icons/Entypo';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
  import Feather from 'react-native-vector-icons/Feather';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import EvilIcons from 'react-native-vector-icons/EvilIcons';
  import ColorPicker, {
    Preview,
    OpacitySlider,
    BrightnessSlider,
    HueSlider,
    SaturationSlider,
  } from 'reanimated-color-picker';
  
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  export default function CreateProject() {
    const navigation = useNavigation();

  const [choiceColor,setchoiceColor] = useState(false)
    const [selectedColor, setSelectedColor] = useState('red'); // Initial color


    
      const handleColorChange = (color) => {
        setSelectedColor(color.hex);
       
        
      };
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
              <Text style={{fontSize: 22, fontWeight: '600'}}>Create project </Text>
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
              Create a new project
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
            <View style={{marginTop: 25, paddingHorizontal: 10,
                justifyContent:'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  margin: 10,
                  alignItems: 'center',
                }}>
                <Ionicons name="color-palette" size={19} color={'#000'} />
                <Text
                  style={{fontSize: 18, marginHorizontal: 10, fontWeight: '600'}}>
                  Color
                </Text>
              </View>
              <View
                style={{
                 justifyContent:'center',
                  alignItems: 'center',
                 marginTop:25,
                  borderRadius: 10,
                  height: hp(choiceColor?25:8),
         
                }}>
                <View

                  style={{
                    height: '100%',
                    width: '100%',
                    marginTop:10
         
                  }}>
                    <ColorPicker
        style={{ width: '100%', justifyContent: 'center', }}
        sliderThickness={30}
        thumbSize={40}
        value={selectedColor}
        onChange={handleColorChange}
        
        thumbShape="pill">
    <TouchableOpacity 
                onPress={()=>{
                    setchoiceColor(true)
                }}>

        <Preview
          style={[styles.previewStyle, styles.shadow,]}
          hideText={true}
          
          hideInitialColor
          />
          </TouchableOpacity>
   
     {choiceColor&& 
     <>
     <HueSlider
          style={[{ borderRadius:5, marginBottom: 25 ,marginHorizontal:20}, styles.shadow]}
      
          thumbShape='line'
         thumbInnerStyle={{
            width:15,
            borderRadius:0,backgroundColor:'#f0f0f0'
         }}
         thumbColor='#f0f0f0'
         
        />

 
        <TouchableOpacity 
        onPress={()=>{
            setchoiceColor(false)
        }}
        style={{ height:'30%', backgroundColor: '#1034a6',
        borderRadius:5,width:'40%',alignSelf:'center',
       alignItems:'center',justifyContent:'center'}}> 
             <Text style={{fontSize:18,color:'#fff'}}>
               Save
            </Text>
        </TouchableOpacity>
        </>
          }
    
      </ColorPicker>
                </View>
              </View>
            </View>
            <View style={{marginHorizontal: 10, marginTop:choiceColor?25:10,marginBottom:10}}>
              <Text>The color is used to help differentiate projects.</Text>
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
  
 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e8e8e8',
      paddingBottom: 0,
      width: '100%',
      maxWidth: 500,
      margin: 'auto',
    },
    sliderLabel: {
      fontSize: 20,
      color: '#000',
      marginBottom: 10,
    },
    previewStyle: {
      height: 55,
      borderRadius: 5,
      marginBottom: 30,
    },
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  });