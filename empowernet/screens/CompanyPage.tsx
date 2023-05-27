import {View, Text, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import Screen from '../components/Screen';
import StarRating from 'react-native-star-rating-widget';
import { Divider } from '@rneui/themed';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// MAKE THIS INTO A COMPONENT
const bgImage = 'https://images.unsplash.com/photo-1462396240927-52058a6a84ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2873&q=80'
const avg = 4.6
const RatingsView = (props:{}) => {
    return(
        <View>
            <View style={styles.viewCard}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'column', flex: 1.5, marginRight: '10%', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={[styles.categoryName1, {marginBottom: '5%'}]}>Overall</Text>
                        <StarRating rating={avg} onChange={()=> {}} 
                                    starSize={26} 
                                    starStyle={{marginHorizontal: 0.4}}
                                    color='#344966'
                                    animationConfig={{
                                        scale: 1,
                                        duration: 0,
                                        delay: 0
                                    }}/>                        
                    </View>
                    <View style={{flexDirection: 'column', alignItems: 'center', marginRight: '5%', flex: 1, backgroundColor: '#344966', paddingVertical: '2%', borderRadius: 4}}>
                        <Text style={{color: '#D8D5DB', marginTop: -5, fontSize: 40, fontFamily: 'Barlow_600SemiBold'}}>{avg}</Text>
                        <Text style={{color: '#D8D5DB', margin: 0, fontSize: 18, fontFamily: 'Barlow_500Medium'}}>{dummyCompany.ratings.length} ratings</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.viewCard, {marginTop: 0, backgroundColor: '#344966', }]}>
                <View style={{flexDirection:'row', justifyContent: 'space-between' }}>
                    <View style={{flexDirection:'column',  flex: 1, paddingHorizontal: '3%', alignItems: 'center', justifyContent: 'center',}}>
                        <Text style={styles.categoryName2}>Compensation</Text>
                    </View>
                    <View style={{flexDirection:'column', flex: 1, alignItems: 'center',paddingHorizontal: '3%',  justifyContent: 'center',}}>
                        <Text style={styles.categoryName2}>Career Growth</Text>
                    </View>
                </View>
                
                <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'column', alignItems: 'center',  flex: 1, backgroundColor: '#F0FAEF', paddingVertical: '2%', marginHorizontal: '5%', borderRadius: 4}}>
                            <Text style={{color: '#2D3142', marginTop: -5, fontSize: 30, fontFamily: 'Barlow_600SemiBold'}}>3.5</Text>
                            <StarRating rating={avg} onChange={()=> {}} 
                                    starSize={18} 
                                    starStyle={{marginHorizontal: 0.4}}
                                    color='#2D3142'
                                    animationConfig={{
                                        scale: 1,
                                        duration: 0,
                                        delay: 0
                                    }}/>  
                            <Text style={{color: '#344966', margin: 0, fontSize: 16, fontFamily: 'Barlow_500Medium'}}>{dummyCompany.ratings.length} ratings</Text>
                    </View>
                    <View style={{flexDirection: 'column', alignItems: 'center', flex: 1, backgroundColor: '#F0FAEF', paddingVertical: '2%', marginHorizontal: '5%', borderRadius: 4}}>
                            <Text style={{color: '#2D3142', marginTop: -5, fontSize: 30, fontFamily: 'Barlow_600SemiBold'}}>3.5</Text>
                            <StarRating rating={avg} onChange={()=> {}} 
                                    starSize={18} 
                                    starStyle={{marginHorizontal: 0.4}}
                                    color='#2D3142'
                                    animationConfig={{
                                        scale: 1,
                                        duration: 0,
                                        delay: 0
                                    }}/>  
                            <Text style={{color: '#344966', margin: 0, fontSize: 16, fontFamily: 'Barlow_500Medium'}}>{dummyCompany.ratings.length} ratings</Text>
                    </View>
                </View>


                <View style={{flexDirection:'row', justifyContent: 'space-between', marginTop: '7%' }}>
                    <View style={{flexDirection:'column',  flex: 1, paddingHorizontal: '3%', alignItems: 'center', justifyContent: 'center',}}>
                        <Text style={[styles.categoryName2, {color: '#EAE8FF'}]}>Work-Life Balance</Text>
                    </View>
                    <View style={{flexDirection:'column', flex: 1, paddingHorizontal: '3%', alignItems: 'center', justifyContent: 'center',}}>
                        <Text style={[styles.categoryName2, {color: '#EAE8FF'}]}>Company Culture</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row',}}>
                    <View style={{flexDirection: 'column', alignItems: 'center',  flex: 1, backgroundColor: '#EAE8FF', paddingVertical: '2%', marginHorizontal: '5%', borderRadius: 4}}>
                            <Text style={{color: '#2D3142', marginTop: -5, fontSize: 30, fontFamily: 'Barlow_600SemiBold'}}>3.5</Text>
                            <StarRating rating={avg} onChange={()=> {}} 
                                    starSize={18} 
                                    starStyle={{marginHorizontal: 0.4}}
                                    color='#2D3142'
                                    animationConfig={{
                                        scale: 1,
                                        duration: 0,
                                        delay: 0
                                    }}/>  
                            <Text style={{color: '#344966', margin: 0, fontSize: 16, fontFamily: 'Barlow_500Medium'}}>{dummyCompany.ratings.length} ratings</Text>
                    </View>
                    <View style={{flexDirection: 'column', alignItems: 'center', flex: 1, backgroundColor: '#EAE8FF', paddingVertical: '2%', marginHorizontal: '5%', borderRadius: 4}}>
                            <Text style={{color: '#2D3142', marginTop: -5, fontSize: 30, fontFamily: 'Barlow_600SemiBold'}}>3.5</Text>
                            <StarRating rating={avg} onChange={()=> {}} 
                                    starSize={18} 
                                    starStyle={{marginHorizontal: 0.4}}
                                    color='#2D3142'
                                    animationConfig={{
                                        scale: 1,
                                        duration: 0,
                                        delay: 0
                                    }}/>  
                            <Text style={{color: '#344966', margin: 0, fontSize: 16, fontFamily: 'Barlow_500Medium'}}>{dummyCompany.ratings.length} ratings</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}


const ReviewsView = (props:{}) => {
    return(
        <View>
            <Text>REVIEWS</Text>
        </View>
    )
}


const Tab = createMaterialTopTabNavigator();
const dummyCompany = {
    'name': 'Tech Company',
    'industry': 'Information Systems',
    'location': 'Irvine, CA',
    'numberEmployees': 420,
    'ratings': [
        {
            'category': 'Work-Life Balance',
            'ratings': [4, 5, 3.5, 4, 4.5],
        },
        {
            'category': 'Compensation',
            'ratings': [4, 5, 3.5, 4, 4.5, 3.5, 4, 4],
        },
        {
            'category': 'Upward Mobility',
            'ratings': [4, 5, 5, 4, 4.5, 4, 5, 5, 5],
        },
        {
            'category': 'Company Culture',
            'ratings': [4, 5, 5, 4, 5, 4.5, 4, 4],
        },
        {
            'category': 'Diversity',
            'ratings' : [3, 3, 4, 4.5, 3, 4, 4, 3] 
        }
    ],
    'reviews': [
        {
            'content': 'Company is Ok. Could be better',
            'ratings': [

            ],
            'date': '01-02-2020',
            'role': "Manager"
        }
    ]
}

const CompanyPage = ({navigation}) => {
    return(
            <ScrollView contentContainerStyle={{flex: 1}}>
                <SafeAreaView style={styles.titleContainer}>
                    <TouchableOpacity onPress={()=>{console.log('LINK ME TO GO BACK')}}></TouchableOpacity>
                    <Text style={styles.titleText}>{dummyCompany.name}</Text>
                    <Text style={[styles.subheading, {color:'#B0D7FE'}]}>{dummyCompany.industry}</Text>
                    <View style={{flexDirection: 'row', paddingBottom: '2%'}}>
                        <Text style={[styles.subheading, {color:'#EAE8FF'}]}>{dummyCompany.location}</Text>
                        <Text style={[styles.subheading, {color:'#EAE8FF'}]}>{dummyCompany.numberEmployees} employees</Text>
                    </View>
                </SafeAreaView>
                <Tab.Navigator 
                    initialRouteName="Ratings" 
                    initialLayout={{ width: Dimensions.get('window').width }} 
                    screenOptions={{
                        tabBarLabelStyle: {
                            fontSize: 16,
                            fontFamily: 'Syne_700Bold'},
                        tabBarStyle: { backgroundColor: '#EAE8FF', padding: '1%' },
                        tabBarActiveTintColor: '#2D3142',
                        tabBarInactiveTintColor: '#6D6D6D',
                        tabBarIndicatorStyle: {backgroundColor: '#2D3142'}
                    }}
                >
                    <Tab.Screen 
                    name="Ratings"
                    component={RatingsView}
                    />
                    <Tab.Screen 
                    name="Reviews"
                    component={ReviewsView}
                    />
                </Tab.Navigator>
            </ScrollView>
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


export default CompanyPage;