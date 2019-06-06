import { createStackNavigator } from "react-navigation";
import AddUserComponent from "../ui/user/AddUserComponent";
import UserListComponent from "../ui/user/UserListComponent";

const AppNavigator = createStackNavigator({
    AddUser:{
        screen:AddUserComponent
    },
    UserList:{
        screen:UserListComponent
    }
},
{
    headerLayoutPreset:'center',
    defaultNavigationOptions:{
        headerTitle:'NMG RN Sample',
    }
})

export default AppNavigator;