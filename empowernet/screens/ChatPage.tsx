import { View, Text, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Dimensions, TextInput, Button, Alert } from 'react-native';
import Screen from '../components/Screen';
import { Divider } from '@rneui/themed';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useRoute } from '@react-navigation/native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

const TextBubble = ({ aligned, text }) => {
    if (aligned === 'right') {
        return (
            <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                <View style={[styles.container, { width: "60%", backgroundColor: '#344966' }]}>
                    <Text style={styles.text}>{text}</Text>
                </View>
                <Ionicons name="person" size={24} color="black" style={{ alignSelf: 'center', margin: 10 }} />
            </View>
        );
    } else {
        return (
            <View style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>
                <Ionicons name="person" size={24} color="black" style={{ alignSelf: 'center', margin: 10 }} />
                <View style={[styles.container, { width: "60%", backgroundColor: '#ADACB5' }]}>
                    <Text style={styles.text}>{text}</Text>
                </View>
            </View>
        );
    }
};


let globalChat = {}

const ChatPage = ({ navigation }) => {
    const route = useRoute();
    const chat = route.params;
    globalChat = chat
    return (
        <Screen preset='scroll' style={{height: '100%'}}>
            <SafeAreaView style={styles.titleContainer}>
                <TouchableOpacity onPress={() => { navigation.navigate("InboxPage") }} style={{ flexDirection: 'row' }}>
                    <Ionicons name="arrow-back" size={32} color="#F0FAEF" style={{ marginLeft: '3%' }} />
                    <Text style={[styles.subheading, { color: '#F0FAEF', marginLeft: 0, paddingLeft: '1%', fontSize: 20 }]}>Back to Chat List</Text>
                </TouchableOpacity>
                <Text style={[styles.titleText, { alignSelf: 'center', paddingBottom: 10 }]}>{chat['name']}</Text>
            </SafeAreaView>

            <ScrollView style={{}}>
                <TextBubble aligned='right' text="Hi! I heard that you were an intern at Google. How was it?" />
                <TextBubble aligned='left' text="Yea that's right!" />
                <TextBubble aligned='left' text="At first it was difficult but I soon got used to the work culture and learned a lot. Most people here are friendly. Beware of the few who aren't tho" />
                <TextBubble aligned='right' text="Speaking of people, how is the diversity at Google?" />
                <TextBubble aligned='left' text="Google has been working on promoting diversity within our ranks. As one of the most widely used applications in the World, Google has the advantage of having a voice that can be used speak out the importance of diversity. In essance, we believe diversity is highly important." />
                <TextBubble aligned='right' text="On another note, how did you prepare for the interview?" />
                <TextBubble aligned='left' text="Leetcode, all the way. Also, make sure to do research on the company. Google prefer hiring people who show an active interest in what they do." />
                <TextBubble aligned='right' text="What is the average salary at Google?" />
                <TextBubble aligned='left' text="Google is a top tech company so it should be no surprise that we have a high average salary." />
            </ScrollView>

            <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth}}/>
            <View style={{ flexDirection: 'row', alignSelf: 'center'}}>
                <View style={{ flex: 1, alignSelf: 'center', borderWidth: 2, margin: 20, padding: '2%', borderRadius: 20 }}>
                    <TextInput placeholder='Message' style={{ fontSize: 22  }} />
                </View>
                <View style={{alignSelf: 'center', borderWidth: 2, paddingRight: 10, marginRight: 20, padding: '1%', borderRadius: 20}}>
                    <Button
                        onPress={() => {}}
                        title="Enter"
                        color="black"
                        accessibilityLabel="Send a message"
                    />
                </View>
            </View>
        </Screen>

    )
}


const styles = StyleSheet.create({
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
    subheading: {
        fontSize: 18,
        fontFamily: 'Barlow_500Medium',
        margin: 3,
        color: '#F0FAEF',
        paddingHorizontal: '5%'
    },
    viewCard: {
        backgroundColor: '#B0D7FE',
        marginTop: '5%',
        marginHorizontal: '5%',
        marginBottom: '3%',
        borderRadius: 10,
        padding: '5%'

    },
    container: {
        borderRadius: 20,
        padding: 8,
        margin: 8
    },
    text: {
        color: 'white',
        fontSize: 16,
        textAlign: 'left',
        margin: 3
    },

})

export default ChatPage;