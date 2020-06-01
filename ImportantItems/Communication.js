import React, {Component} from 'react';
import{
    Text,
    View,
    StyleSheet,
    ImageBackground,
    Button,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import call from 'react-native-phone-call';
import SendSMS from 'react-native-sms';

export default class Communication extends Component{

    call = () =>{
        const args = {
            number:'00000000000',
            prompt:false,
        };

        call(args).catch(Console.error)
    }

    TextSend(){
        SendSMS.send({
            body:'Type To message',
            recipients:['03343022446'],
            successTypes:['sent','queued']
        },
            (Completed, Cancelled, error) => {
                if(Completed){
                    console.log('SMS sent ')
                }
                else if(Cancelled){
                    console.log('SMS not sent')
                }
                else if(error){
                    console.log('Some error accur')
                }
            }
      )
    }

    render() {
        return (
          <ScrollView>
             <View style={Design.conatiner}>
                
                 <ImageBackground source={require('E:/My Final Year Project/Continuaus_Page/imagess/C1.jpg')} 
                        style={
                            {
                                width:'100%',
                                height:200
                            }
                        }> 
                 <View>
                   <Text style={
                     {
                         fontSize:40,
                         fontStyle:'normal',
                         fontWeight:'bold',
                         color:'#270943',
                         paddingTop:18,
                         paddingLeft:45

                     }
                 }>
                     Communication 
                 </Text>
                 </View> 
                 </ImageBackground> 
                
                 <ImageBackground source={require('E:/My Final Year Project/Continuaus_Page/imagess/C2.jpg')} 
                        style={
                            {
                                width:'100%',
                                height:300
                            }
                        }>
                 <View>
                     <Text style={
                         {
                             fontSize:26,
                             fontWeight:'bold',
                             color:'#270943',
                             paddingLeft:'40%',
                             paddingTop:15
                         }
                     }>Call</Text>
                     <View style={
                         {
                             paddingTop:'50%',
                             paddingLeft:'20%',
                             paddingRight:'20%'
                         }
                     }>
                         <Button title='Press' onPress={this.call} />
                     </View>
                 </View>
                 </ImageBackground>
                
                 <ImageBackground source={require('E:/My Final Year Project/Continuaus_Page/imagess/C3.jpg')} 
                        style={
                            {
                                width:'100%',
                                height:300
                            }
                        }>
                 <View>
                     <Text style={
                         {
                             fontSize:28,
                             fontWeight:'bold',
                             color:'#270943',
                             paddingTop:15,
                             paddingLeft:'40%'

                         }
                     }>Text</Text>
                    <View style={{paddingTop:'50%', paddingLeft:'20%', paddingRight:'20%'}}>
                        
                        <Button title='PRESS' onPress={this.TextSend.bind(this)} />
                        
                    </View>
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