import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo, MaterialCommunityIcons, Feather, FontAwesome5 } from '@expo/vector-icons';
import { View } from 'react-native';


import Home from '../screens/Home';
import CompanyPage from '../screens/CompanyPage';
import CompaniesList from '../screens/CompaniesList';
import ProfilePage from "../screens/ProfilePage";
import NetworkingScreen from "../screens/NetworkingScreen";
import CompanyNavigator from "./company-navigator";
import InboxNavigator from "./inbox-navigator";

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={ () => ({
                    headerShown: false,
                    tabBarIcon: ({focused}) => {
                    return(
                        <View style={{
                            width: 30,
                            height: 30,
                            borderRadius: 30 / 2,
                            borderColor: '#FFFFFF',
                            borderWidth: 1}}>
                            <Entypo name="home" size={20} color={focused ? 'blue' : 'black'} style={{position: "absolute", left: 30/2 - 11, top: 30/2 - 12}}/>
                        </View>)},
                    tabBarLabel: "Home",
                })}
            />
            <Tab.Screen
                name="Companies"
                component={CompanyNavigator}
                options={ () => ({
                    headerShown: false,
                    tabBarIcon: ({focused}) => {
                    return(
                        <View style={{
                            width: 30,
                            height: 30,
                            borderRadius: 30 / 2,
                            borderColor: '#FFFFFF',
                            borderWidth: 1}}>
                            <FontAwesome5 name="circle" size={20} color={focused ? 'blue' : 'black'} style={{position: "absolute", left: 30/2 - 11, top: 30/2 - 12}}/>
                        </View>)},
                    tabBarLabel: "Companies",
                })}
            />
            <Tab.Screen
                name="Profile"
                component={ProfilePage}
                options={ () => ({
                    headerShown: false,
                    tabBarIcon: ({focused}) => {
                    return(
                        <View style={{
                            width: 30,
                            height: 30,
                            borderRadius: 30 / 2,
                            borderColor: '#FFFFFF',
                            borderWidth: 1}}>
                            <FontAwesome5 name="square" size={20} color={focused ? 'blue' : 'black'} style={{position: "absolute", left: 30/2 - 11, top: 30/2 - 12}}/>
                        </View>)},
                    tabBarLabel: "Profile",
                })}
            />
            <Tab.Screen
                name="Networking"
                component={NetworkingScreen}
                options={ () => ({
                    headerShown: false,
                    tabBarIcon: ({focused}) => {
                    return(
                        <View style={{
                            width: 30,
                            height: 30,
                            borderRadius: 30 / 2,
                            borderColor: '#FFFFFF',
                            borderWidth: 1}}>
                            <FontAwesome5 name="circle" size={20} color={focused ? 'blue' : 'black'} style={{position: "absolute", left: 30/2 - 11, top: 30/2 - 12}}/>
                        </View>)},
                    tabBarLabel: "Network",
                })}
            />
            <Tab.Screen
                name="Inbox"
                component={InboxNavigator}
                options={ () => ({
                    headerShown: false,
                    tabBarIcon: ({focused}) => {
                    return(
                        <View style={{
                            width: 30,
                            height: 30,
                            borderRadius: 30 / 2,
                            borderColor: '#FFFFFF',
                            borderWidth: 1}}>
                            <FontAwesome5 name="square" size={20} color={focused ? 'blue' : 'black'} style={{position: "absolute", left: 30/2 - 11, top: 30/2 - 12}}/>
                        </View>)},
                    tabBarLabel: "Inbox",
                })}
            />
            
        </Tab.Navigator>
        
    )
}

export default TabNavigator;