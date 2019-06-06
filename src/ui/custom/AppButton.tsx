import React from 'react'
import { View,TouchableOpacity,Text, StyleSheet, ViewStyle, TextStyle, TextInput, TextInputProps } from 'react-native'
import { buttonColor } from '../../util/colors';


class AppButton extends React.Component<Props>
{
    render() {
       
        return (
            <TouchableOpacity
             style={[styles.container, this.props.style]}
             onPress={this.props.onPress}
            >
           <Text style={[styles.textStyle,this.props.textStyle]}>{this.props.value}</Text>
            </TouchableOpacity>)
    }
}

export default AppButton;

type Props = {
    style?: ViewStyle,
    textStyle?:TextStyle,
    value:String,
    onPress?:()=>void
}

const styles = StyleSheet.create({
    container: {
        borderRadius:5,
        paddingHorizontal:20,
        paddingVertical:20,
        backgroundColor:buttonColor,
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle:{
        fontSize:14,
        fontWeight:'600',
        color:'white'
    }
})