import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo, MaterialCommunityIcons, Feather, FontAwesome5, Ionicons, FontAwesome } from '@expo/vector-icons';
import { View } from 'react-native';


import Home from '../screens/Home';
import CompanyPage from '../screens/CompanyPage';
import CompaniesList from '../screens/CompaniesList';
import ProfilePage from "../screens/ProfilePage";
import NetworkingScreen from "../screens/NetworkingScreen";
import CompanyNavigator from "./company-navigator";
import InboxNavigator from "./inbox-navigator";
import NetworkNavigator from "./network-navigator";
import MyProfilePage from "../screens/MyProfilePage";
import YourNetwork from "../screens/YourNetwork";
import YourNetworkNavigator from "./yournetworknavigator";

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: '#0D1821', paddingTop: '2%' }}}>
            <Tab.Screen
                name="Home"
                component={YourNetworkNavigator}
                options={ () => ({
                    headerShown: false,
                    tabBarIcon: ({focused}) => {
                    return(
                        <View style={{ width: 30, height: 30 }}>
                            <Entypo name="home" size={20} color={focused ? '#BFCC94' : '#F0F4EF'} style={{position: "absolute", left: 30/2 - 11, top: 30/2 - 12}}/>
                        </View>)},
                    tabBarLabel: "Home",
                    tabBarActiveTintColor: '#BFCC94'
                })}
            />
            <Tab.Screen
                name="Networking"
                component={NetworkNavigator}
                options={ () => ({
                    headerShown: false,
                    tabBarIcon: ({focused}) => {
                    return(
                        <View style={{ width: 30, height: 30 }}>
                            <Entypo name="network" size={24} color={focused ? '#BFCC94' : '#F0F4EF'} />
                        </View>)},
                    tabBarLabel: "Network",
                    tabBarActiveTintColor: '#BFCC94'
                })}
            />
            <Tab.Screen
                name="Companies"
                component={CompanyNavigator}
                options={ () => ({
                    headerShown: false,
                    tabBarIcon: ({focused}) => {
                    return(
                        <View style={{width: 30, height: 30}}>
                            <FontAwesome name="building" size={20} color={focused ? '#BFCC94' : '#F0F4EF'}/>
                        </View>)},
                    tabBarLabel: "Companies",
                    tabBarActiveTintColor: '#BFCC94'
                })}
            />
            <Tab.Screen
                name="Inbox"
                component={InboxNavigator}
                options={ () => ({
                    headerShown: false,
                    tabBarIcon: ({focused}) => {
                    return(
                        <View style={{ width: 30, height: 30 }}>
                            <Entypo name="message" size={24} color={focused ? '#BFCC94' : '#F0F4EF'} />
                        </View>)},
                    tabBarLabel: "Inbox",
                    tabBarActiveTintColor: '#BFCC94'
                })}
            />
            <Tab.Screen
                name="Profile"
                component={MyProfilePage}
                options={ () => ({
                    headerShown: false,
                    tabBarIcon: ({focused}) => {
                    return(
                        <View style={{ width: 30, height: 30 }}>
                            <Ionicons name="person" size={24} color={focused ? '#BFCC94' : '#F0F4EF'} />
                        </View>)},
                    tabBarLabel: "Profile",
                    tabBarActiveTintColor: '#BFCC94'
                })}
            />
            
        </Tab.Navigator>
        
    )
}

export default TabNavigator;