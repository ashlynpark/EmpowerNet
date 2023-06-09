import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign, Entypo, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { View } from 'react-native';
import TabNavigator from "./tab-navigator";


const Stack = createNativeStackNavigator()

const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name="Home"
                component={TabNavigator}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>


    )
}

export const AppNavigator = (props:any) => {
    return (
        <NavigationContainer {...props}>
            <AppStack />
        </NavigationContainer>
    )
}