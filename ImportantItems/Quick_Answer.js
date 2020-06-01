import React, {Component, useCallback} from 'react';
import{
    Text,
    View,
    StyleSheet,
    Button,
    ImageBackground,
    Linking,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


const supportedURL = "https://en.wikipedia.org/wiki/Special:Search?search=&go=Go";

const unsupportedURL = "slack://open?team=123456";

const Translate_Language_Link = "https://translate.google.com/"

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

export default function QA({navigation}){
    return (
    <ScrollView> 
        <View style={Design.conatiner}>
            
                <ImageBackground source={require('E:/My Final Year Project/Continuaus_Page/imagess/pic7.jpg')}
                        style={
                            {
                                width:'100%',
                                height:200,
                            }
                        }>
                    <Text style={
                            {
                                fontSize:34,
                                fontStyle:'normal',
                                fontWeight:'bold',
                                color:'#feb915',
                                paddingTop:75,
                                paddingLeft:'23%'
                            }
                        }>
                        Quick_Answer
                    </Text>
                
                    </ImageBackground>
                
                <ImageBackground source={require('E:/My Final Year Project/Continuaus_Page/imagess/pic8.jpg')} style={
                  {
                      width:'100%',
                      height:400,
                  }
              }>
            <View style={{
                 alignItems:'center',
                 justifyContent:'center',
            }}>
                <Text 
                style={
                         {
                             fontSize:26,
                             fontWeight:'bold',
                             color:'#0000b3',
                             borderBottomWidth:2,
                             borderBottomColor:"#270943",
                             paddingTop:15
                         }
                     }>
                    General knowledge Queries
                </Text>
                </View>
                <View style={{paddingLeft:50, paddingRight:50 , paddingTop:175}}>
                <TouchableOpacity>
                    <OpenURLButton url={supportedURL} >Search</OpenURLButton>
                </TouchableOpacity>
               
                </View>
              </ImageBackground>
            
                <ImageBackground source={require('E:/My Final Year Project/Continuaus_Page/imagess/pic10.jpg')} style={
                  {
                      width:'100%',
                      height:400,
                  }
              }>
            <View style={{
                 alignItems:'center',
                 justifyContent:'center',
            }}>
                 <Text style={
                         {
                             fontSize:26,
                             fontWeight:'bold',
                             color:'#ffff4d',
                             borderBottomWidth:2,
                             borderBottomColor:"#270943"
                         }
                     }>
                    Translate language
                </Text>
                
              </View>

              <View style={{paddingLeft:50, paddingRight:50 , paddingTop:175}}>
                <TouchableOpacity>
                  <OpenURLButton url={Translate_Language_Link} >Translate Your Language</OpenURLButton>
                </TouchableOpacity>
               
                </View>

            </ImageBackground>
        </View>
    </ScrollView>  
   );
} 

const Design = StyleSheet.create({
    conatiner: {
        flex:1,
       // alignItems:'center',
        //justifyContent:'center',
    },
});