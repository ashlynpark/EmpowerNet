import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inbox from "../screens/Inbox";
import ChatPage from "../screens/ChatPage";

const Stack = createNativeStackNavigator()

const InboxNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="InboxPage">
            <Stack.Screen 
                name="InboxPage"
                component={Inbox}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Chat"
                component={ChatPage}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>


    )
}

export default InboxNavigator;