import React, {Component} from 'react';
import{
    Text,
    View,
    StyleSheet,
    Button,
    ScreenTop,
    ImageBackground,
    TextInput,
    FlatList,
} from 'react-native';

import { createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer} from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import MapView, {Marker} from 'react-native-maps';


export default class Li extends Component{

    constructor(props) {
        super(props)
        this.state = {cityName: '', forecast: null}
        this.handleCityChange = this.handleCityChange.bind(this)
        this.search = this.search.bind(this)
      }
      handleCityChange(text) {
        this.setState({cityName: text})
      }
      search() {
        console.log(this.state.cityName)
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.cityName}&mode=json&appid=bef1b1c7eb47fa62c8d03bf934fbeec5`,{
          method: 'GET'})
          .then(response=>response.json())
          .then(data=>{
            console.log(data)
            this.setState({forecast: data})
          })  
      }

      onRegionChange(region) {
        this.setState({ region });
      }

    render() {
        let forecastItem = item=>{
            item = item.item
            console.log(item)
         return <Text>
            {item.dt_txt}-{item.main.temp}F-{item.weather[0].description}</Text>
          }

          var mapStyle=[{"elementType": "geometry", "stylers": 
          [{"color": "#242f3e"}]},{"elementType": "labels.text.fill","stylers": 
          [{"color": "#746855"}]},{"elementType": "labels.text.stroke","stylers": 
          [{"color": "#242f3e"}]},{"featureType": "administrative.locality","elementType": "labels.text.fill","stylers": 
          [{"color": "#d59563"}]},{"featureType": "poi","elementType": "labels.text.fill","stylers": 
          [{"color": "#d59563"}]},{"featureType": "poi.park","elementType": "geometry","stylers": 
          [{"color": "#263c3f"}]},{"featureType": "poi.park","elementType": "labels.text.fill","stylers": 
          [{"color": "#6b9a76"}]},{"featureType": "road","elementType": "geometry","stylers": 
          [{"color": "#38414e"}]},{"featureType": "road","elementType": "geometry.stroke","stylers": 
          [{"color": "#212a37"}]},{"featureType": "road","elementType": "labels.text.fill","stylers": 
          [{"color": "#9ca5b3"}]},{"featureType": "road.highway","elementType": "geometry","stylers": 
          [{"color": "#746855"}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": 
          [{"color": "#1f2835"}]},{"featureType": "road.highway","elementType": "labels.text.fill","stylers": 
          [{"color": "#f3d19c"}]},{"featureType": "transit","elementType": "geometry","stylers": 
          [{"color": "#2f3948"}]},{"featureType": "transit.station","elementType": "labels.text.fill","stylers": 
          [{"color": "#d59563"}]},{"featureType": "water","elementType": "geometry","stylers": 
          [{"color": "#17263c"}]},{"featureType": "water","elementType": "labels.text.fill","stylers": 
          [{"color": "#515c6d"}]},{"featureType": "water","elementType": "labels.text.stroke","stylers": 
          [{"color": "#17263c"}]
      }];
        return (
            <ScrollView>
             <View style={Design.conatiner}>
                <ImageBackground source={require ('E:/My Final Year Project/Continuaus_Page/imagess/pic15.jpg')}
                style={
                    {
                        width:'100%',
                        height:200,
                    }
                }> 
                  <View> 
                    <Text  style={
                        {
                            fontSize:45,
                            fontStyle:'normal',
                            fontWeight:'bold',
                            color:'#0000ff',
                            paddingLeft:'15%',
                            paddingTop:25
                        }
                    }>
                        Local Information
                    </Text>
                  </View> 
                </ImageBackground> 
           
                <ImageBackground source={require ('E:/My Final Year Project/Continuaus_Page/imagess/pic14.jpg')} 
                style={
                    {
                        width:'100%',
                        height:'auto',
                    }
                }>
                 <View>
                     <Text style={
                         {
                             fontSize:26,
                             fontWeight:'bold',
                             color:'#00ff00',
                             paddingTop:10,
                             paddingLeft:'20%',
                         }
                     }>
                                    
                         Weather Fore Casting
                     </Text>
                     <View style={Design.container}>
          
            <Text style={{
                    fontSize:24, 
                    color:'#0000cc',
                    fontWeight:'bold',
                    paddingLeft:30,
                    paddingTop:25}}
                  >
                      Enter your city Name
              </Text>
              <View style={{paddingTop:35}}>
                <TextInput
                  style={Design.citySearchStyle}
                  placeholder="San Francisco"
                  onChangeText={this.handleCityChange}
                  onEndEditing={this.search}
                  value={this.state.cityName}
                  returnKeyType="search">
                </TextInput>

                {(this.state.forecast)?<FlatList
                data={this.state.forecast.list}
                renderItem={forecastItem}
                ></FlatList>:<Text/>}
              
              </View>
          
        </View>
                 </View>
                 </ImageBackground> 
               
                <ImageBackground source={require ('E:/My Final Year Project/Continuaus_Page/imagess/pic13.jpg')}
                 style={
                    {
                        width:'100%',
                        height:600,
                    }
                }>
                 <View>
                        <Text style={
                            {
                                fontSize:35,
                                fontWeight:'bold',
                                color:'#b3e6ff',
                                paddingTop:10,
                                paddingLeft:'35%',
                            }
                        }> 
                            Map Allocation
                        </Text>
                 </View>
                 <View style={Design.containerss}>
                    <MapView
                    style={Design.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    customMapStyle={mapStyle}
                    >
                    <Marker
                        draggable
                        coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        }}
                        onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
                        title={'Test Marker'}
                        description={'This is a description of the marker'}
                    />
                    </MapView>
                  </View>
                </ImageBackground>
            </View>
        </ScrollView>  
        );
    }
}

const Design = StyleSheet.create({
    container: {
        flex: 1,
      },
      citySearchStyle: {
        borderColor: '#ffff1a',
        borderWidth: 3,
        backgroundColor: '#ffffcc',
        height: 50,
        marginLeft:60,
        marginRight: 60,
        padding: 8
      },
      containerss: {
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
      map: {
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
      },
});