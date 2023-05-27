import {View, Text} from 'react-native';
import Screen from '../components/Screen';


const Home = () => {
    return(
        <Screen preset='scroll'>
            <View> 
                <Text>
                    Home Page
                </Text>
            </View>
        </Screen>
    )
}

export default Home;