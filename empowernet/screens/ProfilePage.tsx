import {View, Text, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import Screen from '../components/Screen';
import { Ionicons } from '@expo/vector-icons';


const ProfilePage = () => {
    return(
        <Screen preset='scroll'>
            <SafeAreaView style={[styles.titleContainer, {flexDirection: 'row'}]}>
                <Ionicons name="person-circle-outline" size={100} color="white" style={{paddingHorizontal: '7%', paddingTop: 10}} />
                <View style={{flexDirection: 'column', alignContent: 'flex-start'}}>
                    <Text style={[styles.titleText, {paddingHorizontal: '6%'}]}>
                        Name
                    </Text>
                    <Text style={styles.subheading}>
                        Pronouns
                    </Text>
                    <Text style={[styles.subheading, { paddingBottom: 10}]}>
                        Position/Job Title
                    </Text>
                </View>
            </SafeAreaView>
            
            <View>
                <Text style={{ fontSize: 20, fontFamily: 'Barlow_500Medium', paddingLeft: '5%', paddingTop: '5%' }}>
                    Demographic
                </Text>

            </View>

            <View>
                <Text style={{ fontSize: 20, fontFamily: 'Barlow_500Medium', paddingLeft: '5%', paddingTop: '5%'}}>
                    Bio
                </Text>
                <View style={[styles.viewCard]}>
                    <Text>What an amazing Bio!</Text>
                </View>
            </View>

            <View>
                <Text style={{ fontSize: 20, fontFamily: 'Barlow_500Medium', paddingLeft: '5%', paddingTop: '5%' }}>
                    Work Experience
                </Text>
                <View style={[styles.viewCard, {}]}>
                    {dummyWorkExp.map((item, index) => {
                        return (
                            <View key={index}>
                                <Text>
                                    {item.company}
                                </Text>
                                <Text>
                                    {item.startDate}-{item.endDate}
                                </Text>

                            </View>
                        )
                    })}
                </View>
            </View>

            <View>
                <Text style={{ fontSize: 20, fontFamily: 'Barlow_500Medium', paddingLeft: '5%', paddingTop: '5%', paddingBottom: '0%'}}>
                    Education
                </Text>
                <View style={[styles.viewCard, {}]}>

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
        'company': 'What',
        'jobTitle': 'Intern',
        'startDate': 'January 2050',
        'endDate': 'February 2051'
    },
    {
        'company': 'Company',
        'jobTitle': 'Idk',
        'startDate': 'December 2009',
        'endDate': 'December 2009'
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


export default ProfilePage;