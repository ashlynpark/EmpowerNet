import {View, Text, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Dimensions, Button, Alert} from 'react-native';
import Screen from '../components/Screen';
import { Ionicons } from '@expo/vector-icons';


const ProfilePage = () => {
    return(
        <Screen preset='scroll'>
            <SafeAreaView style={[styles.titleContainer, {flexDirection: 'row'}]}>
                <Ionicons name="person-circle-outline" size={100} color="white" style={{paddingHorizontal: '7%', paddingTop: 15}} />
                <View style={{flexDirection: 'column', alignContent: 'flex-start', width: '55%'}}>
                    <Text style={[styles.titleText, {flexWrap: 'wrap', fontSize: 20, marginLeft: '2%'}]}>
                        Jennifer Henry
                    </Text>
                    <Text Text style={[styles.titleText, {flexWrap: 'wrap', fontSize: 18, marginLeft: '2%'}]}>
                        Pronouns
                    </Text>
                    <Text Text style={[styles.titleText, {flexWrap: 'wrap', fontSize: 18, marginLeft: '2%'}]}>
                        Position/Job Title
                    </Text>
                    <Text Text style={[styles.titleText, {flexWrap: 'wrap', fontSize: 18, marginLeft: '2%'}]}>
                        Salary
                    </Text>
                    <Text Text style={[styles.titleText, {flexWrap: 'wrap', fontSize: 18, marginLeft: '2%'}]}>
                        Yrs. of Experience
                    </Text>
                    <View>
                        <Button
                            onPress={() => Alert.alert('Simple Button pressed')}
                            title="Add+ Button"
                            color="white"
                            accessibilityLabel="Add something...idk"
                        />
                    </View>
                </View>
            </SafeAreaView>
            
            <View>
                <Text style={styles.section}>
                    Demographic
                </Text>
                
            </View>

            <View>
                <Text style={styles.section}>
                    Bio
                </Text>
                <View style={[styles.viewCard]}>
                    <Text>What an amazing Bio!</Text>
                </View>
            </View>

            <View>
                <Text style={styles.section}>
                    Salary and Years of Experience
                </Text>
                <View style={[styles.viewCard]}>
                    <Text>$150,000</Text>
                    <Text>7 years of experience</Text>
                </View>
            </View>


            <View>
                <Text style={styles.section}>
                    Work Experience
                </Text>
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

            <View>
                <Text style={[styles.section, {paddingBottom: '0%'}]}>
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

    }
})


export default ProfilePage;