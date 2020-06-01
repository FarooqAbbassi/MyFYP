import React, {Component} from 'react';
import{
    Text,
    View,
    StyleSheet,
} from 'react-native';

export default class More extends Component{
    render() {
        return (
             <View style={Design.conatiner}>
                 <Text>
                     More
                 </Text>
             </View>
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