import React, {Component, useCallback} from 'react';
import{
    Text,
    View,
    StyleSheet,
    HeaderBackButton,
    ImageBackground,
    TouchableOpacity,
    Button,
    Linking
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Currency_Conversion_Link = "https://www.xe.com/currencyconverter/convert/?Amount=1&From=EUR&To=PKR";
const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
    return <Button title={children} onPress={handlePress} />;
  };
  

export default class TT extends Component{
    constructor(props){
        super(props);
        this.state={
            Date:'',
        }
    }
    
    componentDidMount(){
        var that = this;
        var date =  new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var hours = new Date().getHours();
        var mins = new Date().getMinutes();
        var sec = new Date().getSeconds();
        this.setState({
            Date:
                date + '/' + month + '/' + year + ' ' + hours + ':' + mins + ':' + sec,
        });
    }

    render() {
        return (
            <ScrollView>
             <View style={Design.conatiner}>
                
                 <ImageBackground source={require ('E:/My Final Year Project/Continuaus_Page/imagess/t1.jpg')}
                    style={{
                        width:'100%',
                        height:300
                    }}>
                 <View>
                    <Text style={
                        {
                            fontSize:45,
                            fontStyle:'normal',
                            fontWeight:'bold',
                            color:'#009999',
                            paddingTop:'40%',
                            paddingLeft:25,
                        }
                      }>
                        Task And To do
                    </Text>
                 </View>
                 </ImageBackground>
                
                 <ImageBackground source={require ('E:/My Final Year Project/Continuaus_Page/imagess/t3.jpg')}
                    style={{
                        width:'100%',
                        height:300
                    }}>
                 <View>
                     <Text style={
                         {
                             fontSize:30,
                             fontWeight:'bold',
                             color:'#ffff99',
                             paddingLeft:'40%'
                         }
                     }>Time</Text>
                        <Text style={
                            {
                                fontSize:30,
                                marginTop: 16,
                                marginBottom:15,
                                color:'#ff6600',
                                fontWeight:'bold',
                                paddingLeft:'20%',
                                paddingTop:75
                            }
                        }>
                            {this.state.Date}
                        </Text>
                 </View>    
                 </ImageBackground>
                 
                 <ImageBackground source={require ('E:/My Final Year Project/Continuaus_Page/imagess/t2.jpg')}
                    style={{
                        width:'100%',
                        height:300
                    }}>
                 <View>
                     <Text style={
                         {
                             fontSize:30,
                             fontWeight:'bold',
                             color:'#270943',
                             paddingLeft:'30%',
                             paddingTop:25
                         }
                     }>Stop Watch</Text>
                 </View>
                </ImageBackground>
                 
                <ImageBackground source={require ('E:/My Final Year Project/Continuaus_Page/imagess/t4.png')}
                    style={{
                        width:'100%',
                        height:300
                    }}>
                 <View>
                     <Text style={
                         {
                             fontSize:30,
                             fontWeight:'bold',
                             color:'#cccc00',
                             paddingLeft:'20%',
                             paddingTop:25,
                         }
                     }>Currency Rates</Text>
                 </View>
                 <View style={{paddingLeft:50, paddingRight:50 , paddingTop:175}}>
                <TouchableOpacity>
                <OpenURLButton url={Currency_Conversion_Link} >Currency Conversion</OpenURLButton>
                </TouchableOpacity>
               
                </View>
                </ImageBackground>
            </View>    
        </ScrollView>   
        );
    }
}

const Design = StyleSheet.create({
    conatiner: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
});