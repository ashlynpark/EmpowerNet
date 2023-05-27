import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CompaniesList from "../screens/CompaniesList";
import CompanyPage from "../screens/CompanyPage";

const Stack = createNativeStackNavigator()

const CompanyNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="CompaniesList">
            <Stack.Screen 
                name="CompaniesList"
                component={CompaniesList}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Company"
                component={CompanyPage}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>


    )
}

export default CompanyNavigator;