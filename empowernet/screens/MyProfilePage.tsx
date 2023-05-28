import {View, Text, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Dimensions, Button, Alert} from 'react-native';
import Screen from '../components/Screen';
import { Ionicons } from '@expo/vector-icons';
import { Image} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useState  } from 'react';


const bgImage = "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
const profileImg = "https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
const MyProfilePage = ({navigation}) => {
    const route = useRoute();
    const profile = route.params;


    return(
        <Screen style={{backgroundColor: '#F0FAEF'}} preset='scroll'>
            <View>
                <ImageBackground source={{uri: bgImage}} style={{}}>
                    
                    <View style={{flexDirection: 'column', alignContent: 'center', flex:1, backgroundColor: 'rgba(45, 49, 66, 0.6)',}}>
                        <View style={styles.profPicContainer}>
                            <Image source={{uri: profileImg}} style={styles.profPic}/>
                        </View> 
                            
                        <Text style={[styles.titleText, {opacity: 100, marginBottom: 0, paddingBottom: 0,flexWrap: 'wrap', fontSize: 28, alignSelf: 'center'}]}>
                            Jennifer Henry
                        </Text>
                        
                        <Text style={[styles.subtitleText, ]}>
                            Software Developer
                        </Text>
                        
                        <Text style={[styles.subtitleText]}>
                            She/Her
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                            <Ionicons name="ios-location" size={20} color="white" style={{opacity: 0.9, paddingTop: '1%', marginRight:-2}}/>
                            <Text style={[styles.subtitleText, {opacity: 0.8, flexWrap: 'wrap', fontSize: 16}]}>
                            Irvine, CA
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
                    
                    <TouchableOpacity style={{backgroundColor: 'blue', width: '30%', alignSelf: 'center', marginTop: '3%',borderRadius: 10}} >
                       <Text style={styles.subheading}>Edit Profile</Text>
                    </TouchableOpacity>
            </View>
            
            <View>
                <View style={{alignSelf: 'center', marginTop: '3%'}}>
                    <Text style={[styles.titleText, {color: 'black', flexWrap: 'wrap', fontSize: 18, marginLeft: '2%'}]}>
                        $150,000
                    </Text>
                </View>
                <View style={{alignSelf: 'center'}}>
                <Text style={[styles.titleText, {color: 'black', flexWrap: 'wrap', fontSize: 18, marginLeft: '2%'}]}>
                       5 years of experience
                </Text>
                </View>
               
                <View style={{marginLeft: '7%', marginRight: '3%', marginTop: '3%'}}>
                    <Text style={[{color: 'black', flexWrap: 'wrap', fontSize: 18, textAlign: 'center'}]}>
                        Hi there! I'm Jennifer, a software developer dedicated to creating a more inclusive workplaces in the west coast.
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
                                <Text>
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
                    <Text style={[styles.titleText, {color: 'black', fontSize: 15, alignSelf: 'center'}]}>
                        University of California Irvine
                    </Text>
                    <Text style={[styles.titleText, {color: 'black', fontSize: 15, alignSelf: 'center'}]}>
                        Computer Science, B.S.
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
        marginTop: '15%',
        borderWidth: 3,
        borderColor: '#F0FAEF'
      },
      profPic: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
})


export default MyProfilePage;