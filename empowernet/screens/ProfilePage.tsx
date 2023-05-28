import {View, Text, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Dimensions, Button, Alert} from 'react-native';
import Screen from '../components/Screen';
import { Ionicons } from '@expo/vector-icons';
import { Image} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useState  } from 'react';


let prof = {}
const ProfilePage = ({navigation}) => {
    const route = useRoute();
    const profile = route.params;
  
    return(
        <Screen style={{backgroundColor: '#F0FAEF'}} preset='scroll'>
            <View>
                
                <ImageBackground source={{uri: profile["bg"]}} style={{}}>
                    <SafeAreaView style={{backgroundColor: 'rgba(45, 49, 66, 0.6)',}}>
                    <TouchableOpacity onPress={()=>{navigation.navigate("YourNetwork")}} style={{flexDirection: 'row'}}>
                        <Ionicons name="arrow-back" size={32} color="#F0FAEF" style={{marginLeft: '3%'}}/>
                        <Text style={[styles.subheading, {marginBottom: 0, color:'#F0FAEF', marginLeft: 0, paddingLeft: '1%', fontSize: 20}]}>Back to List</Text>
                    </TouchableOpacity>
                    </SafeAreaView>
                    
                    <View style={{flexDirection: 'column', alignContent: 'center', paddingBottom: '3%', backgroundColor: 'rgba(45, 49, 66, 0.6)',}}>
                        <View style={styles.profPicContainer}>
                            <Image source={{uri: profile["image"]}} style={styles.profPic}/>
                        </View> 
                            
                        <Text style={[styles.titleText, {opacity: 100, marginBottom: 0, paddingBottom: 0,flexWrap: 'wrap', fontSize: 28, alignSelf: 'center'}]}>
                            {profile["name"]}
                        </Text>
                        
                        <Text style={[styles.subtitleText, ]}>
                            {profile["position"]}
                        </Text>
                        
                        <Text style={[styles.subtitleText]}>
                            {profile["pronouns"]}
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                            <Ionicons name="ios-location" size={20} color="white" style={{opacity: 0.9, paddingTop: '1%', marginRight:-2}}/>
                            <Text style={[styles.subtitleText, {opacity: 0.8, flexWrap: 'wrap', fontSize: 16}]}>
                            {profile["location"]}
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
                {/*
                <Ionicons name="person-circle-outline" color="white"/>
                    {/*<Text style={[styles.titleText, {opacity: 0.8, flexWrap: 'wrap', fontSize: 14, marginLeft: '40%'}]}>
                        Irvine, CA
                    </Text>
                    */}
                    
                    <View style={{backgroundColor: '#344966', width: '40%', alignSelf: 'center', marginTop: '3%',borderRadius: 10}} >
                       <Text style={[styles.subheading, {textAlign: 'center'}]}>Your Connection</Text>
                    </View>
            </View>
            
            <View>
               
                <View style={{marginLeft: '7%', marginRight: '3%', marginTop: '3%'}}>
                    <Text style={[{fontFamily: 'Barlow_500Medium', color: 'black', flexWrap: 'wrap', fontSize: 18, textAlign: 'center'}]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    </Text>
                </View>

                <View style={{alignSelf: 'center', marginTop: '3%'}}>
                    <Text style={{fontFamily: 'Barlow_400Regular', color: 'black', flexWrap: 'wrap', fontSize: 16, textAlign: 'center'}}>
                        Salary: $100,000
                    </Text>
                    <Text style={{fontFamily: 'Barlow_400Regular', color: 'black', flexWrap: 'wrap', fontSize: 16, textAlign: 'center'}}>
                       Years of experience: 5
                    </Text>
                </View>
                
            </View>

            {/*
            <View>
                <Text style={styles.section}>
                    Salary and Years of Experience
                </Text>
                <View style={[styles.viewCard]}>
                    <Text>$150,000</Text>
                    <Text>7 years of experience</Text>
                </View>
            </View>
    */}

            <View>
                <View>
                    <Text style={styles.section}>
                        Work Experience
                    </Text>
                </View>
                <View style={[styles.viewCard, {}]}>
                    {dummyWorkExp.map((item, index) => {
                        return (
                            <View key={index} style={{paddingVertical: '2%'}}>
                                <Text style={{fontFamily: 'Barlow_400Regular', color: 'black', flexWrap: 'wrap', fontSize: 16,}}>
                                    {item.company} ({item.jobTitle})
                                </Text>
                                <Text>
                                    {item.startDate}-{item.endDate}
                                </Text>

                            </View>
                        )
                    })}
                </View>
            </View>

            <View style={{marginBottom: '10%'}}>
                <Text style={[styles.section, {paddingBottom: '0%'}]}>
                    Education
                </Text>
                <View style={[styles.viewCard, {}]}>
                    <Text style={{fontFamily: 'Barlow_500Medium', color: 'black', flexWrap: 'wrap', fontSize: 17}}>
                        University of California Irvine
                    </Text>
                    <Text style={{fontFamily: 'Barlow_400Regular', color: 'black', flexWrap: 'wrap', fontSize: 16}}>
                        Computer Science, B.S.
                    </Text>
                    <Text style={{fontFamily: 'Barlow_400Regular', color: 'black', flexWrap: 'wrap', fontSize: 15}}>
                        September 2015 - June 2019
                    </Text>
                </View>
            </View>
        </Screen>
    )
}

const dummyWorkExp = [
    {
        'company': 'Google',
        'jobTitle': 'Executive',
        'startDate': 'September 2023',
        'endDate': 'Present'
    },
    {
        'company': 'Apple',
        'jobTitle': 'Freeloader',
        'startDate': 'March 2010',
        'endDate': 'Present'
    },
    {
        'company': 'What Company',
        'jobTitle': 'Intern',
        'startDate': 'January 2050',
        'endDate': 'February 2051'
    },
    {
        'company': 'Company 2.0',
        'jobTitle': 'Idk',
        'startDate': 'December 2009',
        'endDate': 'December 2009'
    }
]


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
    subtitleText: {
        fontSize: 18,
        color: '#F0FAEF',
        fontFamily: 'Syne_700Bold',
        paddingHorizontal: '3%',
        alignSelf: 'center'
    },
    subheading: {
        fontSize: 18,
        fontFamily: 'Barlow_500Medium',
        margin: 3,
        color: '#F0FAEF',
        paddingHorizontal: '5%'
    },
    section: {
        fontSize: 20, 
        fontFamily: 'Barlow_500Medium', 
        paddingLeft: '5%', 
        paddingTop: '5%'
    },
    companyInfo: {
        fontSize: 16,
        fontFamily: 'Barlow_400Regular',
    },
    
    viewCard:{
        backgroundColor: 'white',
        marginTop:'5%',
        marginHorizontal: '5%',
        marginBottom: '3%',
        borderRadius: 10,
        padding: '5%'
    },
    button: {
        padding: '3%',
        marginHorizontal: '5%',
        borderRadius: 30,
        marginTop: '-5%',
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowOffset: {width: 0, height: 1}
    },
    profPicContainer: {
        width: 110,
        height: 110,
        borderRadius: 50,
        overflow: 'hidden',
        alignSelf: 'center',
        marginTop: '5%',
        borderWidth: 3,
        borderColor: '#F0FAEF'
      },
      profPic: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
})


export default ProfilePage;