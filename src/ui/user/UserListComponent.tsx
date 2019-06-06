import React from 'react'
import { View, Text, StyleSheet, FlatList,Linking, TouchableOpacity } from 'react-native'
import User from '../../data/model/User'
import { getUserList } from '../../data/local/AsyncStorageHelper';
import { whiteSmoke } from '../../util/colors';
class UserListComponent extends React.Component<Props,State>
{
state : State={
    userList:[]
}
    render() {
        return (
            <View style={styles.container}>
            <FlatList
            style={styles.userList}
            contentContainerStyle={styles.userListContainer}
            data={this.state.userList}
            renderItem={this.renderUser}
            keyExtractor={(item:User)=>item.id.toString()}
            />
            </View>)
    }


    renderUser=({item} : {item:User})=>{
        return(
            <View style={styles.userItemContainer}>
            <Text style={[styles.userInfo,{fontWeight:'600'}]}>{item.name}</Text>
            <TouchableOpacity onPress={()=>this.openEmailClient(item.email)}>
            <Text style={[styles.userInfo,{fontWeight:'400'}]}>{item.email}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.openDialer(item.mobile)}>
            <Text style={[styles.userInfo,{fontWeight:'400'}]}>{item.mobile}</Text>
            </TouchableOpacity >
            <Text style={[styles.userInfo,{fontWeight:'400'}]}>{item.address}</Text>
                </View>
        )
    }

    componentDidMount(){
        getUserList()
        .then(userList=>this.setState({userList}))
    }

    openDialer=(mobile:string)=>{
        this.openUrl(`tel:+91${mobile}`)
    }
    openEmailClient=(email:string)=>{
        this.openUrl(`mailto:${email}`)
    }
    
    openUrl = (url:string) =>{
        Linking.canOpenURL(url).then(supported => {
        if (!supported) {
         console.log('Can\'t handle url: ' + url);
        } else {
         return Linking.openURL(url);
        }
      }).catch(err => console.error('An error occurred', err));
     }
}

export default UserListComponent;

type Props = {

}
type State={
    userList:User[]
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:whiteSmoke
    },
    userList:{
    flex:1
    },
    userListContainer:{
        paddingBottom:50
        },
    userItemContainer:{
        flex:1,
        paddingVertical:20,
        paddingHorizontal:15,
        backgroundColor:'white',
        elevation:3,
        marginHorizontal:15,
        marginTop:10
    },
    userInfo:{
        fontSize:14,
        color:'black'
    }
})