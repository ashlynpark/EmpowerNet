import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NetworkingScreen from "../screens/NetworkingScreen";
import ProfilePage from "../screens/ProfilePage";

const Stack = createNativeStackNavigator()

const NetworkNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="network">
            <Stack.Screen 
                name="network"
                component={NetworkingScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>


    )
}

export default NetworkNavigator;