import {View, Text, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Dimensions, Button, Alert, Image} from 'react-native';
import Screen from '../components/Screen';
import { AntDesign, Feather } from '@expo/vector-icons';

const profilepic = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80'

const NetworkingScreen = () => {
    return(
        <Screen preset='scroll'>
            <SafeAreaView style={styles.titleContainer}>
                <Text style={styles.titleText}>
                    Network
                </Text>
            </SafeAreaView>

            <View style={{ margin: '5%', borderWidth: 1}}>


                <ImageBackground source={{ uri: profilepic }} resizeMode="contain" style={{width: '100%', justifyContent: 'center',} } >
                    <Text style={{color: 'white'}}>Pic Here</Text>
                </ImageBackground>
               
                <View style={styles.viewCard}>
                    <Text>Name, pronouns, position, salary, etc. </Text>
                </View>
                <View style={styles.viewCard}>
                    <Text>Bio Here</Text>
                </View>
                <View style={styles.viewCard}>
                    <Text>Demographics Here</Text>
                </View>
            </View>

            <View style={{flexDirection: 'row', padding: 20, alignSelf: 'center', gap: 30}}>
                <Feather name="x-circle" size={80} color="red" />
                <AntDesign name="checkcircle" size={80} color="green" />
            </View>

        </Screen>
    )
}

const styles = StyleSheet.create({
    headerImage:{
        width: '100%',
        height: 100,
        overflow: 'hidden',
        resizeMode: 'cover',
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

export default NetworkingScreen;