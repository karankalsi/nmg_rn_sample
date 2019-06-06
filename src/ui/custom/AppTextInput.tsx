import React from 'react'
import { View,Text, StyleSheet, ViewStyle, TextStyle, TextInput, TextInputProps } from 'react-native'


class AppTextInput extends React.Component<Props>
{
    _textInput=undefined;
    render() {
       
        return (
            <View style={[styles.container, this.props.style]}>
            <Text style={[styles.label,this.props.labelStyle]}>{this.props.label}</Text>
                <TextInput
                   ref={reference=>this._textInput=reference}
                   {...this.props}
                   style={[styles.textInput,this.props.textStyle]}
                />
            </View>)
    }

    focus=()=>  this._textInput.focus()
}

export default AppTextInput;

type Props = {
    style?: ViewStyle,
    textStyle?:TextStyle,
    labelStyle?:TextStyle,
    label?:String
} & TextInputProps

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        borderRadius:5,
        paddingHorizontal:10,
        paddingVertical:10,
        backgroundColor:'white'
    },
    label:{
        fontSize:14,
        fontWeight:'600',

    },
    textInput:{
        width:'100%',
        padding:0
    }
})