import {View, Text, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Dimensions, Button, Alert} from 'react-native';
import Screen from '../components/Screen';
import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import dummyProfiles from '../data/dummyProfiles.json';
import TinderCard from 'react-tinder-card'



const profilepic = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80'

const profiles = dummyProfiles;
let currentIndex = 0; 

const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }

const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }
   


const NetworkingScreen = () => {
    return(
        <SafeAreaView style={{overflow: 'hidden', justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['up', 'down']}>
                <View style={styles.viewCard}>
                    <ImageBackground>

                    </ImageBackground>
                    <Text>Hello, World!</Text>
                </View>
            </TinderCard>
        </SafeAreaView>
        // <Screen preset='scroll'>
        //     <SafeAreaView style={styles.titleContainer}>
        //         <Text style={[styles.titleText, {alignSelf: 'center', padding: 10}]}>
        //             Network
        //         </Text>
        //     </SafeAreaView>

        //     <View style={{ margin: '8%', borderWidth: 2, borderRadius: 20}}>      
        //         <Text style={{ color: 'black', fontFamily: 'Barlow_500Medium', fontSize: 20, textAlign: 'center', textAlignVertical: 'bottom', padding: 2}}>
        //             Name (pronouns)
        //         </Text>   
        //         <View style={styles.imageWrapper}>
        //             <ImageBackground source={{ uri: profilepic }} resizeMode="contain" style={{width: '100%', height: '100%'}} >
        //                 <View style={{flex: 8}}></View>
        //                 <Text style={{ flex: 1, color: 'white', fontFamily: 'Barlow_500Medium', textAlign: 'center', textAlignVertical: 'bottom' }}>
        //                     position
        //                 </Text>
        //                 <Text style={{ flex: 1, color: 'white', fontFamily: 'Barlow_500Medium', textAlign: 'center', textAlignVertical: 'bottom' }}>
        //                     salary
        //                 </Text>
        //             </ImageBackground>
        //         </View>

        //         <View style={styles.viewCard}>
        //             <Text>Bio Here</Text>
        //         </View>
        //         <View style={styles.viewCard}>
        //             <Text>Demographics Here</Text>
        //         </View>
        //     </View>

        //     <View style={{flexDirection: 'row', alignSelf: 'center', gap: 30}}>
        //         <Feather name="x-circle" size={80} color="red" />
        //         <AntDesign name="checkcircle" size={80} color="green" />
        //     </View>

        // </Screen>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: '#E6AACE',
    },
    titleText: {
        fontSize: 40,
        color: '#2D3142',
        fontFamily: 'Syne_700Bold',
        paddingHorizontal: '3%',
        paddingTop: '3%'
    },
    imageWrapper: {
        height: 250,
        width: 250,
        overflow: 'hidden',
        alignSelf: 'center',
        margin: 10,
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

   }
})

export default NetworkingScreen;