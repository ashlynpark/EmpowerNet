import {View, Text, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Dimensions, TextInput, Button, Alert} from 'react-native';
import Screen from '../components/Screen';
import { Divider } from '@rneui/themed';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useRoute } from '@react-navigation/native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'; 

let globalChat = {}

const ChatPage = ({navigation}) =>{
    const route = useRoute();
    const chat = route.params;
    globalChat = chat
    return (
        <Screen>
            <SafeAreaView style={styles.titleContainer}>
                <TouchableOpacity onPress={() => { navigation.navigate("InboxPage") }} style={{ flexDirection: 'row' }}>
                    <Ionicons name="arrow-back" size={32} color="#F0FAEF" style={{ marginLeft: '3%' }} />
                    <Text style={[styles.subheading, { color: '#F0FAEF', marginLeft: 0, paddingLeft: '1%', fontSize: 20 }]}>Back to Chat List</Text>
                </TouchableOpacity>
                <Text style={[styles.titleText, {alignSelf: 'center', paddingBottom: 10}]}>{chat['name']}</Text>
            </SafeAreaView>


            <View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 20, padding: 20, marginLeft: 70}}>Hi! I heard that you were an intern at Google. How was it?</Text>
                    <FontAwesome5 name="user-alt" size={60} color="black" styles={{}}/>
                </View>

            </View>

            <View style={{flexDirection: 'row'}}>
                <View>
                    <TextInput placeholder='Message' style={{ alignSelf: 'center', fontSize: 30, borderWidth: 2, width: '90%', margin: 20 }} />
                </View>
                <Button
                    onPress={() => Alert.alert('Simple Button pressed')}
                    title="Enter"
                    color="black"
                    accessibilityLabel="Add something...idk"
                    
                />
            </View>
            
            
        </Screen>

    )
}


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
   viewCard:{
        backgroundColor: '#B0D7FE',
        marginTop:'5%',
        marginHorizontal: '5%',
        marginBottom: '3%',
        borderRadius: 10,
        padding: '5%'

   },
    textBubble: {
        backgroundColor: '#B0D7FE',
        marginTop: '5%',
        marginHorizontal: '5%',
        marginBottom: '3%',
        borderRadius: 10,
        padding: '5%'

    }
   
})

export default ChatPage;