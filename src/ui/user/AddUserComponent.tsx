import React from 'react'
import { View, Text, StyleSheet, AsyncStorage } from 'react-native'
import AppTextInput from '../custom/AppTextInput';
import { whiteSmoke, buttonColor } from '../../util/colors';
import AppButton from '../custom/AppButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import User from '../../data/model/User';
import { saveUser, getUserList } from '../../data/local/AsyncStorageHelper';
import { isValidEmail, isValidMobile, isValidAddress, isValidName } from '../../util/validator';
import { SCREEN } from '../../util/constants';
import {  NavigationScreenProps  } from 'react-navigation';

class AddUserComponent extends React.Component<Props>
{
 private _nameInput:React.RefObject<AppTextInput> = React.createRef();
 private _emailInput:React.RefObject<AppTextInput> = React.createRef();
 private _mobileInput:React.RefObject<AppTextInput> = React.createRef();
 private _addressInput:React.RefObject<AppTextInput>= React.createRef();
 initialState={
    name:'',
    email:'',
    mobile:'',
    address:''
}
 state={
    ...this.initialState
 }
 
    render() {
        return (
            <KeyboardAwareScrollView 
             style={styles.container}
             contentContainerStyle={styles.scrollContainer}
            >
            <View style={styles.formContainer}>
            <AppTextInput
            ref={this._nameInput}
            style={styles.formTextInput}
            label={'Name'}
            value={this.state.name}
            placeholder={'Enter user name'}
            onChangeText={(text)=>this.setState({name:text})}
            onSubmitEditing={()=>(this._emailInput.current as AppTextInput).focus()}
            returnKeyType={'next'}
            />
             <AppTextInput
             ref={this._emailInput}
            style={styles.formTextInput}
            label={'Email'}
            value={this.state.email}
            placeholder={'Enter user email'}
            onSubmitEditing={()=>(this._mobileInput.current as AppTextInput).focus()}
            onChangeText={(text)=>this.setState({email:text})}
            returnKeyType={'next'}
            keyboardType={'email-address'}
            />
            <AppTextInput
            ref={this._mobileInput}
            style={styles.formTextInput}
            label={'Mobile'}
            value={this.state.mobile}
            placeholder={'Enter user mobile'}
            onChangeText={(text)=>this.setState({mobile:text})}
            onSubmitEditing={()=>(this._addressInput.current as AppTextInput).focus()}
            returnKeyType={'next'}
            keyboardType={'phone-pad'}
            />
             <AppTextInput
             ref={this._addressInput}
            style={styles.formTextInput}
            label={'Address'}
            value={this.state.address}
            placeholder={'Enter user address'}
            onChangeText={(text)=>this.setState({address:text})}
            onSubmitEditing={this.submitForm}
            returnKeyType={'done'}
            />
            </View>
            
            <AppButton
            style={styles.submitBtn}
            value={'Submit'}
            onPress={this.submitForm}
            />
             <AppButton
                style={styles.userListBtn}
                value={'View Users'}
                onPress={this.goToUserList}
                textStyle={{color:buttonColor}}
            />
            </KeyboardAwareScrollView>
        )
    }

    goToUserList=()=>this.props.navigation.navigate(SCREEN.User.List);
    validate=()=>{
        const nameValidity = isValidName(this.state.name);
        const emailValidity = isValidEmail(this.state.email);
        const mobileValidity = isValidMobile(this.state.mobile);
        const addressValidity = isValidAddress(this.state.address);
      if(nameValidity.valid==false ||
         emailValidity.valid==false ||
         mobileValidity.valid==false ||
         addressValidity.valid==false )
    {

        alert(`${nameValidity.message}${emailValidity.message}${mobileValidity.message}${addressValidity.message}`)
        return false;
    }
    return true;
    }
    submitForm=()=>{

        if(this.validate())
        {
            let user:User = 
            {
            id:new Date().getTime(),
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            address:this.state.address
            }
            saveUser(user)
            .then(this.onUserSaved)
        }

     
    }
    onUserSaved=()=>{
        alert('User saved successfully!')
        this.setState({...this.initialState})
    }

}

export default AddUserComponent;

type Props = {

} & NavigationScreenProps 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:whiteSmoke
    },
    scrollContainer:{alignItems:'center',paddingBottom:50},
    formTextInput:{
    },
    formContainer:
    {
        justifyContent:'space-evenly',
        width:'90%',
        minHeight:400
    },
    submitBtn:{
        width:'90%',
        marginTop:50
    },
    userListBtn:{
        width:'50%',
        backgroundColor:'transparent'
    }
})