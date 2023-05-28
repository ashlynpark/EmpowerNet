import {View, Text, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import Screen from '../components/Screen';
import { Divider } from '@rneui/themed';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; 

const ChatCard = (props:{chat: any}) => {
    const navigation = useNavigation();

    const goToChat = () => {
        const data = props.chat;
        navigation.navigate('Chat', data)
    };

    return (
        <TouchableOpacity style={styles.viewCard} onPress={goToChat}>
            <View style={{flexDirection: 'row'}}>
                {props.chat['profilePic']}
                <Text style={{ paddingLeft: 20, fontSize: 20, fontFamily: 'Syne_600SemiBold' }}>{props.chat['name']}</Text>
            </View>
        </TouchableOpacity>
    )
}

const Inbox = ({navigation}) =>{
    return(
        <Screen>
            <SafeAreaView style={styles.titleContainer}>
                <Text style={[styles.titleText, { alignSelf: 'center', padding: 10 }]}>
                    Inbox
                </Text>
            </SafeAreaView>

            <View>
                {friends.map((item, index) => {
                    return (
                        <ChatCard key={index} chat={item}/>
                    )
                })}
            </View>
            
        </Screen>
    )
}

const friends = [
    {
        'profilePic': <MaterialCommunityIcons name="face-woman-profile" size={24} color="black" />,
        'name': 'Emily'
    },
    {
        'profilePic': <Ionicons name="person" size={24} color="black" />,
        'name': 'Oliva'
    },
    {
        'profilePic': <MaterialCommunityIcons name="face-man-profile" size={24} color="black" />,
        'name': 'Noah'
    },
    {
        'profilePic': <MaterialCommunityIcons name="face-woman-profile" size={24} color="black" />,
        'name': 'Meredith'
    },
    {
        'profilePic': <Ionicons name="person" size={24} color="black" />,
        'name': 'Kai'
    },
    {
        'profilePic': <MaterialCommunityIcons name="face-man-profile" size={24} color="black" />,
        'name': 'Rafael'
    },
    {
        'profilePic': <Ionicons name="person" size={24} color="black" />,
        'name': 'Sherlock'
    },
    {
        'profilePic': <MaterialCommunityIcons name="face-woman-profile" size={24} color="black" />,
        'name': 'Amanda'
    }
]

const styles = StyleSheet.create({
    headerImage:{
        width: '100%',
        height: 100,
        overflow: 'hidden',
        resizeMode: 'cover'
    },
    titleContainer: {
        backgroundColor: '#2D3142',
    },
    titleText: {
        fontSize: 40,
        color: '#F0FAEF',
        fontFamily: 'Syne_700Bold',
        paddingHorizontal: '3%',
        paddingTop: '3%'
    },
    section: {
        padding: 12,
    },
    subheading: {
        fontSize: 18,
        fontFamily: 'Barlow_500Medium',
        margin: 3,
        color: '#F0FAEF',
        paddingHorizontal: '5%'
    },
    companyInfo: {
        fontSize: 16,
        fontFamily: 'Barlow_400Regular',
    },
    categoryName1: {
        fontSize: 26,
        fontFamily: 'Syne_700Bold',
        color: '#2D3142'
    },
    littleTab:{
        backgroundColor: '#EAE8FF',
        alignItems:'center',
        
   },
   viewCard:{
        backgroundColor: '#B0D7FE',
        marginTop:'5%',
        marginHorizontal: '5%',
        marginBottom: '3%',
        borderRadius: 10,
        padding: '5%'

   },
   categoryName2:{
        fontFamily: 'Barlow_600SemiBold', 
        color: '#F0FAEF', 
        fontSize: 20, 
        alignSelf: 'center', 
        textAlign: 'center',
        marginBottom: '3%'
   }
})

export default Inbox;