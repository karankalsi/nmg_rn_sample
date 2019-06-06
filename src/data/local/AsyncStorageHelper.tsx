import {AsyncStorage} from 'react-native'
import User from '../model/User';
const USER_LIST="user_list"

export const saveUser=async(user:User)=>{
    let userListJson = await AsyncStorage.getItem(USER_LIST); 
    let userList:[User] = JSON.parse(userListJson ? userListJson : '[]')
    userList.push(user);
    await AsyncStorage.setItem(USER_LIST,JSON.stringify(userList))
}
export const getUserList=async()=>{
    let userListJson = await AsyncStorage.getItem(USER_LIST); 
    let userList:[User] = JSON.parse(userListJson ? userListJson : '[]')
    return userList;
}