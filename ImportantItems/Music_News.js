import React, {Component} from 'react';
import{
    Text,
    View,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Sound from 'react-native-sound';

import YouTube from 'react-native-youtube'

const audioList = [
    {
      title: 'First Music',
      isRequire: true,
      url: require('E:/My Final Year Project/Continuaus_Page/Music/Play1.mp3'),
    },
    {
        title: 'Second Music',
        isRequire: true,
        url: require('E:/My Final Year Project/Continuaus_Page/Music/Play2.mp3'),
    },
    {
        title: 'Third Music',
        isRequire: true,
        url: require('E:/My Final Year Project/Continuaus_Page/Music/Play3.mp3'),
    }, 
    {
        title: 'Fourth Music',
        isRequire: true,
        url: require('E:/My Final Year Project/Continuaus_Page/Music/Play4.mp3'),
    },
    
  ];

  var sound1, sound2, sound3,sound4;

  function playSound(item, index) {
    if (index == 0) {
      sound1 = new Sound(item.url, (error, sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound1.play(() => {
          sound1.release();
        });
      });
    } else if (index == 1) {
      sound2 = new Sound(item.url, '', (error, sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound2.play(() => {
          sound2.release();
        });
      });
    } else if (index == 2) {
      sound3 = new Sound(item.url, (error, sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound3.play(() => {
          sound3.release();
        });
      });
    } else if (index == 3) {
      sound4 = new Sound(item.url, '', (error, sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound4.play(() => {
          sound4.release();
        });
      });
  }
  }
  function stopSound(item, index) {
    if (index == 0 && sound1) {
      sound1.stop(() => {
        console.log('Stop');
      });
    }
    else if (index == 1 && sound2) {
      sound2.stop(() => {
        console.log('Stop');
      });
    } 
    else if (index == 2 && sound3) {
      sound3.stop(() => {
        console.log('Stop');
      });
    } 
    else if (index == 3 && sound4) {
      sound4.stop(() => {
        console.log('Stop');
      });
    } 
  }
  
  function componentWillUnmount() {
    sound1.release();
    sound2.release();
    sound3.release();
    sound4.release();
  }
  


export default class MN extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            status: "",
            quality: "",
            error: ""
        };
      }

    render() {
        return (
            <ScrollView>
             <View style={Design.conatiner}>
                
                 <ImageBackground source={require('E:/My Final Year Project/Continuaus_Page/imagess/m1.jpg')} style={
                     {
                         width:'100%',
                         height:200
                     }
                 }>
                  <View>
                 <Text style={
                     {
                         fontSize:34,
                         fontStyle:'normal',
                         fontWeight:'bold',
                         color:'#270943',
                         paddingTop:15,
                         paddingLeft:70

                     }
                 }>
                     Music and News
                 </Text>
                </View> 
                </ImageBackground>
                 
                 <ImageBackground source={require('E:/My Final Year Project/Continuaus_Page/imagess/MN.jpg')} style={
                     {
                         width:'100%',
                         height:300
                     }
                 }> 
                 <View>
                     <Text style={
                         {
                             fontSize:25,
                             fontWeight:'bold',
                             color:'#ffff33',
                             paddingTop:25,
                             paddingLeft:80,
                         }
                     }>
                         Play Morning News
                     </Text>
                 </View>
                
                 <View style={Design.container}>
                    <YouTube
                    apiKey="AIzaSyCI_qrxI4i3IK9lHDY6AH4QrskY8aaLlZQ"
                    videoId="6xrJy-1_qS4" // The YouTube video ID
                    play // control playback of video with true/false
                    fullscreen={false} // video should play in fullscreen or inline
                    loop={false} // control whether the video should loop when ended
                    onReady={e => this.setState({ isReady: true })}
                    onChangeState={e => this.setState({ status: e.state })}
                    onChangeQuality={e => this.setState({ quality: e.quality })}
                    onError={e => this.setState({ error: e.error })}
                    style={Design.youtube}
                    />
                    <Text>{`Status: ${this.state.status}`}</Text>
                </View>
            </ImageBackground>
            
                 <ImageBackground source={require('E:/My Final Year Project/Continuaus_Page/imagess/MN1.jpg')} style={{ width:'100%', height:50 }}/>   
            
                 <ImageBackground source={require('E:/My Final Year Project/Continuaus_Page/imagess/Music.png')} style={
                     {
                         width:'100%',
                         height:300
                     }
                 }>
                  <View>
                     <Text style={
                         {
                             fontSize:25,
                             fontWeight:'bold',
                             color:'#ff66ff',
                             paddingTop:25,
                             paddingLeft:80,
                         }
                     }>
                        Play WorkOut Music
                     </Text>
                 </View>
                 <View>
                 {audioList.map((item, index) => {
              return (
                <View style={Design.feature} key={item.title}>
                  <Text style={{ flex: 1, fontSize: 16, color:'#ffff99' }}>{item.title}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      return playSound(item, index);
                    }}>
                    <Text style={Design.buttonPlay}>Play</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      return stopSound(item, index);
                    }}>
                    <Text style={Design.buttonStop}>Stop</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
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
    buttonPlay: {
        fontSize: 16,
        color: 'white',
        backgroundColor: 'rgba(00,80,00,1)',
        borderWidth: 1,
        borderColor: 'rgba(80,80,80,0.5)',
        overflow: 'hidden',
        paddingHorizontal: 15,
        paddingVertical: 7,
    },
    buttonStop: {
        fontSize: 16,
        color: 'white',
        backgroundColor: 'rgba(80,00,00,1)',
        borderWidth: 1,
        borderColor: 'rgba(80,80,80,0.5)',
        overflow: 'hidden',
        paddingHorizontal: 15,
        paddingVertical: 7,
      },
      feature: {
        flexDirection: 'row',
        padding: 10,
        alignSelf: 'stretch',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: 'rgb(180,180,180)',
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(230,230,230)',
      },
      container: {
        flex: 1,
    },
    youtube: {
    alignSelf: 'stretch',
    height: 300
    },
});