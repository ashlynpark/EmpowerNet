import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import YourNetwork from "../screens/YourNetwork";
import ProfilePage from "../screens/ProfilePage";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator()

const YourNetworkNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="home">       
            <Stack.Screen 
                name="home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />            
            <Stack.Screen 
                name="YourNetwork"
                component={YourNetwork}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="userProfile"
                component={ProfilePage}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>


    )
}

export default YourNetworkNavigator;