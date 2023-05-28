import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Screen from '../components/Screen';
import { MaterialCommunityIcons, Ionicons, AntDesign } from '@expo/vector-icons'; 



const Home = () => {
    return(
        <Screen preset='scroll'>
            <SafeAreaView style={styles.titleContainer}>
                <Text style={styles.titleText}>
                    Welcome, Jennifer
                </Text>
            </SafeAreaView>
            <View style={[styles.viewCard, {alignItems: 'center', justifyContent: 'center', borderWidth: 5, borderColor: 'white'}]}>
                <Text style={styles.subheading}>
                    Did you know?
                </Text>
                <Text style={styles.categoryName1}>
                As of 2023, women hold 26.7% of technology jobs.
                </Text>
            </View>
            <View style={{flexDirection: 'row', marginVertical: '5%'}}>
                <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor:'#B0D7FE', padding: '3%', borderRadius: 15, flex: 1, marginLeft: '6%', marginHorizontal: '3%', shadowColor: 'black', shadowOpacity: 0.5, shadowOffset: {width: 0, height: 1}}}>
                    <Ionicons name="people" size={40} color="#2D3142" />
                    <Text style={[styles.categoryName2, {color: '#2D3142'}]}>
                        Your Network
                    </Text>
                </View>  
                <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor:'#E6AACE', padding: '3%', borderRadius: 15, flex: 1, marginRight: '6%',marginHorizontal: '3%', shadowColor: 'black', shadowOpacity: 0.5, shadowOffset: {width: 0, height: 1}}}>
                    <AntDesign name="heart" size={40} color="#2D3142" />
                    <Text style={[styles.categoryName2, {color: '#2D3142'}]}>
                        Favorited
                    </Text>
                </View>    

            </View>

            <View style={{flexDirection: 'row', marginTop: '4%', marginHorizontal: '5%',justifyContent: 'center', marginBottom: 0}}>
                <MaterialCommunityIcons name="fire" size={32} color="#0D1821"/>
                <Text style={[styles.categoryName1, {fontSize: 24, textAlign: 'center', marginHorizontal: '2%', paddingBottom: 0, color: '#0D1821'}]}>
                    This Week's Hot List
                </Text>
                <MaterialCommunityIcons name="fire" size={32} color="#0D1821" />
            </View>

            <View style={[styles.viewCard2, {alignItems: 'center', justifyContent: 'center', backgroundColor: '#F0FAEF', shadowColor: '#0D1821', shadowOffset:{width:0, height:0}, shadowOpacity: 0.4}]}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor:'#0D1821', padding: '3%', borderRadius: 15, flex: 1}}>
                        <MaterialCommunityIcons name="star-shooting" size={40} color="#BFCC94" />
                        <Text style={styles.categoryName2}>
                            Top Rated
                        </Text>
                        <Text style={[styles.categoryName2, {fontSize: 16}]}>
                            Overall
                        </Text>
                    </View>    
                    <View style={{alignItems: 'center', justifyContent: 'center', flex: 2, marginLeft:'5%', }}>
                        <Text style={[styles.categoryName1, {marginBottom: 0, padding: 0, fontSize: 20, color: '#0D1821'}]}>
                            Company Name
                        </Text>
                        <Text style={{fontFamily: 'Barlow_500Medium', marginBottom: 0, fontSize: 16, color: '#0D1821'}}>
                            Tech Industry
                        </Text>
                        <Text style={{fontFamily: 'Barlow_500Medium', marginBottom: 0,fontSize: 16, color: '#0D1821'}}>
                            Irvine, CA
                        </Text>
                    </View>
                </View>

                <View style={{flexDirection: 'row', marginTop: '10%'}}>
                    <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor:'#870065', padding: '3%', borderRadius: 15, flex: 1}}>
                        <MaterialCommunityIcons name="lightbulb-on" size={40} color="#EAE8FF" />
                        <Text style={[styles.categoryName2, {color: '#EAE8FF'}]}>
                            For You
                        </Text>
                    </View>    
                    <View style={{alignItems: 'center', justifyContent: 'center', flex: 2, marginLeft:'5%', }}>
                        <Text style={[styles.categoryName1, {marginBottom: 0, padding: 0, fontSize: 20, color: '#870065'}]}>
                            Company Name
                        </Text>
                        <Text style={{fontFamily: 'Barlow_500Medium', marginBottom: 0, fontSize: 16, color: '#870065'}}>
                            Tech Industry
                        </Text>
                        <Text style={{fontFamily: 'Barlow_500Medium', marginBottom: 0,fontSize: 16, color: '#870065'}}>
                            Irvine, CA
                        </Text>
                        <Text style={[styles.categoryName2, {color: '#e381bc', fontSize: 14, textAlign: 'center', marginTop: 0}]}>
                            Based on your interests
                        </Text>
                    </View>
                </View>
            </View>
        </Screen>
    )
}

export default Home;


const styles = StyleSheet.create({
    headerImage:{
        width: '100%',
        height: 100,
        overflow: 'hidden',
        resizeMode: 'cover'
    },
    titleContainer: {
        backgroundColor: '#0D1821',
    },
    titleText: {
        fontSize: 50,
        color: '#EAE8FF',
        fontFamily: 'Syne_700Bold',
        paddingHorizontal: '3%',
        paddingVertical: '3%'
    },
    section: {
        padding: 12,
    },
    subheading: {
        fontSize: 18,
        fontFamily: 'Barlow_500Medium',
        margin: 3,
        color: '#870065',
        flex: 1
    },
    companyInfo: {
        fontSize: 16,
        fontFamily: 'Barlow_400Regular',
    },
    categoryName1: {
        fontSize: 20,
        fontFamily: 'Syne_700Bold',
        color: '#2D3142',
        flex: 1,
        textAlign: 'center'
    },
    viewCard:{
        backgroundColor: '#EAE8FF',
        marginTop:'5%',
        marginHorizontal: '5%',
        marginBottom: '3%',
        borderRadius: 10,
        padding: '5%',

   },
   categoryName2:{
        fontFamily: 'Barlow_600SemiBold', 
        color: '#BFCC94', 
        fontSize: 20, 
        marginBottom: '3%'
   },
   viewCard2:{
        backgroundColor: '#EAE8FF',
        marginTop:'5%',
        marginHorizontal: '5%',
        marginBottom: '3%',
        borderRadius: 10,
        padding: '5%',
    },
})