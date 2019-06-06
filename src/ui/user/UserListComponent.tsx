import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
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
            <Text style={[styles.userInfo,{fontWeight:'400'}]}>{item.email}</Text>
            <Text style={[styles.userInfo,{fontWeight:'400'}]}>{item.mobile}</Text>
            <Text style={[styles.userInfo,{fontWeight:'400'}]}>{item.address}</Text>
                </View>
        )
    }

    componentDidMount(){
        getUserList()
        .then(userList=>this.setState({userList}))
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