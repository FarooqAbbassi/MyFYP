import * as React from 'react';
import{
Text,
View,
Button,
Image,
StyleSheet,
ToolbarAndroid,
ImageBackground,
} from 'react-native';
import { createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import { NavigationContainer, NavigationNativeContainer} from '@react-navigation/native';
import { ScrollView, RotationGestureHandler, TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';

import Commun from "./Important_Items/Communication";
import L_I from "./Important_Items/Local_Info";
//import MoR from "./Important_Items/More";
import M_N from "./Important_Items/Music_News";
import Q_A from "./Important_Items/Quick_Answer";
import T_T from "./Important_Items/TaskNTodo";
import H_P from "./Important_Items/HomePage";
import Chat_Boy from "./Important_Items/Chat_Bot";
import My_ChatBoy from './Important_Items/Chat_Bot';


function Home_Page({navigation}){
     
        return(
           // <H_P />
           <View style={Design.MainContainer}>
            <View style={Design.HeaderContainer}>
                <View style={Design.LeftHeaderContainer}>
                <TouchableOpacity>
                        <Text style={{paddingStart:12,color:'#ffffff'}} onPress={() => navigation.openDrawer()}> Menu</Text>
                </TouchableOpacity>
                </View>
                <View style={Design.RightHeaderContainer}>
                    <Text style={{paddingEnd:100, fontSize:22,color:'#ffffff'}}>My Assistant App </Text>
                </View>  
            </View>
                <ScrollView>
                    <View style={
                        {
                            flex:3,
                            alignContent:'center',
                            justifyContent:'center',
                        }
                    }>

                        <View style={Design.Call}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Quick Answer')}>
                            <ImageBackground source={require('E:/My Final Year Project/Continuaus_Page/imagess/pic.jpg')} style={{width:'100%' , height:'100%'}}>
                            <Text style={{fontSize:25, fontWeight:'bold',paddingTop:10, paddingLeft:10,color:'#103a89'}}>Quick Answer</Text>
                            <Text>
                                An Ability to gives you a Quick Answeer of your different queries
                            </Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        </View>
                     
                        <View style={Design.Call}>
                             <TouchableOpacity onPress={()=>navigation.navigate('Local Info')}>
                                <ImageBackground source={require('E:/My Final Year Project/Continuaus_Page/imagess/pic3.jpg')} style={{width:'100%' , height:'100%'}}>
                                        <Text style={{fontSize:25, fontWeight:'bold',paddingTop:10, paddingLeft:10,color:'#226600'}}>Local Info</Text>
                                        <Text>To Provide your Local information including weather forecasting and traffic information</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                       
                        <View style={Design.Call}>
                         <TouchableOpacity onPress={()=>navigation.navigate('Communication')}>
                            <ImageBackground source={require('E:/My Final Year Project/Continuaus_Page/imagess/pic4.jpg')} style={{width:'100%' , height:'100%'}}>
                                <Text style={{fontSize:25, fontWeight:'bold',paddingTop:10, paddingLeft:10,color:'#660066'}}>Communication</Text>
                                <Text>Communication is most relavent scenario complete by my agent working on to call some one, working on Text, and also to chat with agent</Text>
                            </ImageBackground>
                         </TouchableOpacity>
                        </View>

                        <View style={Design.Call}>
                           <TouchableOpacity onPress={()=>navigation.navigate('Task And To do')}>
                                <ImageBackground source={require('E:/My Final Year Project/Continuaus_Page/imagess/pic5.jpg')} style={{width:'100%' , height:'100%'}}>
                                    <Text  style={{fontSize:25, fontWeight:'bold',paddingTop:10, paddingLeft:10,color:'#993300'}}>Task ANd ToDo</Text>
                                    <Text>Some people wants their work as soon as fast or immediate ,so now App introduce Task and To Do features to perform multiple funtionalities including Time, Reminder,Currency rate </Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>

                        <View style={Design.Call}>
                           <TouchableOpacity onPress={()=>navigation.navigate('Music And News')}>
                             <ImageBackground source={require('E:/My Final Year Project/Continuaus_Page/imagess/pic6.jpg')} style={{width:'100%' , height:'100%'}}>
                                <Text style={{fontSize:25, fontWeight:'bold',paddingTop:10, paddingLeft:10,color:'#000066'}}>Music And News</Text>
                                <Text>Just for the entertainment, App gives the music features to entertain ther users. Also work on News event 
                                      because entertainment is the temporary priority except the News which is the first priority</Text>
                             </ImageBackground>
                           </TouchableOpacity>
                        </View>  
 
                        <View style={Design.Call}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Your Bot')}>
                            <ImageBackground source={require('E:/My Final Year Project/Continuaus_Page/imagess/chatbot1.png')} style={{width:'100%' , height:'100%'}}>
                            <Text style={{fontSize:25, fontWeight:'bold',paddingTop:10, paddingLeft:10,color:'#ffcc00'}}>Your Bot</Text>
                            
                            </ImageBackground>
                        </TouchableOpacity>
                        </View>
                   </View>
                 </ScrollView>
            </View> 
    );
}

function TaskNTodo({navigation}){
    return(
        
        <View style={
            {
                flex:1,
                //alignItems:'center',
                //justifyContent:'center',
            }
        }>
            <View >
            <View style={Design.HeaderContainer}>
                <View style={Design.LeftHeaderContainer}>
                <TouchableOpacity>
                        <Text style={{paddingStart:12,color:'#ffffff'}} onPress={() => navigation.openDrawer()}> Menu</Text>
                </TouchableOpacity>
                </View>
                <View style={Design.RightHeaderContainer}>
                    <Text style={{paddingEnd:100, fontSize:22,color:'#ffffff'}}>My Assistant App </Text>
                </View>  
            </View>
                
            </View>
            
            
            <T_T />
        </View>
    );
}

function Communication({navigation}){
    return(
        <View style={
            {
                flex:1,
               // alignItems:'center',
                //justifyContent:'center',
            }
        }>
            <View style={{
                   // paddingLeft:10,
                   // paddingTop:10,
                }}>
                    <View style={Design.HeaderContainer}>
                        <View style={Design.LeftHeaderContainer}>
                        <TouchableOpacity>
                                <Text style={{paddingStart:12,color:'#ffffff'}} onPress={() => navigation.openDrawer()}> Menu</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={Design.RightHeaderContainer}>
                            <Text style={{paddingEnd:100, fontSize:22,color:'#ffffff'}}>My Assistant App </Text>
                        </View>  
            </View>
                
            
            </View>
            <Commun />
        </View>
    );
}
 //<HeaderBackButton onPress={()=> navigation.navigate('Home Page')} />
function Local_Info({navigation}){
    return(
        <View style={
            {
                flex:1,
               // alignItems:'center',
                //justifyContent:'center',
            }
        }>
            <View style={
                {
                   // paddingLeft:10,
                   // paddingTop:10,
                }
            }>
           <View style={Design.HeaderContainer}>
                <View style={Design.LeftHeaderContainer}>
                <TouchableOpacity>
                        <Text style={{paddingStart:12,color:'#ffffff'}} onPress={() => navigation.openDrawer()}> Menu</Text>
                </TouchableOpacity>
                </View>
                <View style={Design.RightHeaderContainer}>
                    <Text style={{paddingEnd:100, fontSize:22,color:'#ffffff'}}>My Assistant App </Text>
                </View>  
            </View>
                
            </View>
            
            <L_I />
        </View>
    );
}

function Quick_Answer({navigation}){
    return(
        <View style={
            {
                flex:1,
               // alignItems:'center',
                //justifyContent:'center',
            }
        }>
            <View style={
                {
                   // paddingLeft:10,
                   // paddingTop:10,
                }
            }>
           <View style={Design.HeaderContainer}>
                <View style={Design.LeftHeaderContainer}>
                <TouchableOpacity>
                        <Text style={{paddingStart:12,color:'#ffffff'}} onPress={() => navigation.openDrawer()}> Menu</Text>
                </TouchableOpacity>
                </View>
                <View style={Design.RightHeaderContainer}>
                    <Text style={{paddingEnd:100, fontSize:22,color:'#ffffff'}}>My Assistant App </Text>
                </View>  
            </View>
                
            </View>
            <Q_A />
        </View>
    );
}

function Music_News({navigation}){
    return(
        <View style={
            {
                flex:1,
                //alignItems:'center',
                //justifyContent:'center',
            }
        }>
            <View style={
                {
                  //  paddingLeft:10,
                  //  paddingTop:10,
                }
            }>
           <View style={Design.HeaderContainer}>
                <View style={Design.LeftHeaderContainer}>
                <TouchableOpacity>
                        <Text style={{paddingStart:12,color:'#ffffff'}} onPress={() => navigation.openDrawer()}> Menu</Text>
                </TouchableOpacity>
                </View>
                <View style={Design.RightHeaderContainer}>
                    <Text style={{paddingEnd:100, fontSize:22,color:'#ffffff'}}>My Assistant App </Text>
                </View>  
            </View>
                
            </View>
            <M_N />
           
        </View>
    );
}

function Chat_Bot(){
    return(
        <View>
            <My_ChatBoy/>
        </View>
    );
}

const Drawer = createDrawerNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Home Page'>
                <Drawer.Screen name='Home Page' component={Home_Page} />
                <Drawer.Screen name='Quick Answer' component={Quick_Answer} />
                <Drawer.Screen name='Local Info' component={Local_Info} />
                <Drawer.Screen name='Communication' component={Communication} />
                <Drawer.Screen name='Task And To do' component={TaskNTodo} />
                <Drawer.Screen name='Music And News' component={Music_News} />
                <Drawer.Screen name='Your Bot' component={Chat_Bot} />
                <Drawer.Screen name='Back' component={Home_Page} />
            </Drawer.Navigator>

        </NavigationContainer>
    );
}

const Design = StyleSheet.create({
    InnerSide:{
        backgroundColor:'#fcfcfc',
        width:'100%',
        height:'100%',
        alignItems:'center'
    },
    step1:{
        marginTop:15,
        flex:1,
        flexDirection: "row" ,
        backgroundColor:'#761cca',
        width:'75%',
    },
    MainContainer:  
    {  
        backgroundColor: '#F5FCFF',
        flex: 1,  
      //  justifyContent: 'center',  
      //  alignItems: 'center',  
      //  paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0  
    },  
   
    HeaderContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#00004d",
        alignItems:"center",
        paddingRight: 5,
        height:60,
     },
     LeftHeaderContainer: {
        alignItems: "flex-start",
        flexDirection: "row",
     },
     RightHeaderContainer: {
        alignItems: "flex-end",
        flexDirection: "row"
     },
     Call:{
         width:'100%',
         height:300,
       //  backgroundColor:'#bbd0f7',
         borderWidth:10,
         borderBottomColor:'#00004d'
     },
     footer:{
         paddingBottom:35,
         paddingLeft:'85%',

     }
  
});

/**
 *   <View style={
                {
                    width:'100%',
                    height:55,
                    backgroundColor:'#4b0082',
                    marginTop:3,
                }
            }>

                <Text style={
                    {
                        fontSize:27,
                        color: '#fcfcfc',
                        fontWeight:'bold',
                        marginLeft:25,
                        paddingTop:8,
                    }
                }>
                    My Assistant App 
                </Text>
            </View>  
 */

 /**
  * 
  * <View style={Design.InnerSide}>
                    <View style={Design.step1}></View>
                    <View style={Design.step1}></View>
                    <View style={Design.step1}></View>
                    <View style={Design.step1}></View>
                    <View style={Design.step1}></View>
                    <View style={Design.step1}></View>
            </View> 
  */
 /*   Call1:{
        width:'100%',
        height:200,
        backgroundColor:'#99ff66',
    },
    Call2:{
        width:'100%',
        height:200,
        backgroundColor:'#ff80ff',
    },
    Call3:{
        width:'100%',
        height:200,
        backgroundColor:'#ffbb99',
    },
    Call4:{
        width:'100%',
        height:200,
        backgroundColor:'#8080ff',
    },*/