import {View, Text, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Dimensions, Button, Alert} from 'react-native';
import Screen from '../components/Screen';
import { Ionicons } from '@expo/vector-icons';
import { Image} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useState  } from 'react';

const MyProfilePage = ({navigation}) => {
    const route = useRoute();
    const profile = route.params;


    return(
        <Screen style={{backgroundColor: '#F0FAEF'}} preset='scroll'>
            <SafeAreaView>
                <ImageBackground source={{}}>
                <Ionicons name="person-circle-outline" size={125} color="white" style={{paddingHorizontal: '37%', paddingTop: 15}} />
                <View style={{flexDirection: 'column', alignContent: 'flex-start'}}>
                    <Text style={[styles.titleText, {opacity: 100, flexWrap: 'wrap', fontSize: 25, alignSelf: 'center'}]}>
                        Jennifer Henry
                    </Text>
                    
                    <Text style={[styles.titleText, {opacity: 0.8, flexWrap: 'wrap', fontSize: 16, alignSelf: 'center'}]}>
                        Software Developer
                    </Text>
                    
                    <Text style={[styles.titleText, {opacity: 0.8, flexWrap: 'wrap', fontSize: 14, alignSelf: 'center'}]}>
                        She/Her
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name="ios-location" size={20} color="white" style={{opacity: 0.9, marginLeft: '39%', paddingTop: 11}}/>
                        <Text style={[styles.titleText, {opacity: 0.8, flexWrap: 'wrap', fontSize: 14}]}>
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
                    
                    <TouchableOpacity style={{borderLeftWidth: 1, borderRightWidth: 1}} >
                       <Text>Add Connection</Text>
                    </TouchableOpacity>
            </SafeAreaView>
            
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
})


export default MyProfilePage;