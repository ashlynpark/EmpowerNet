import {View, Text, Image, ImageBackground, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import Screen from '../components/Screen';
import StarRating from 'react-native-star-rating-widget';
import { Divider } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Entypo, MaterialCommunityIcons, Feather, FontAwesome5, Ionicons, FontAwesome } from '@expo/vector-icons';
import dummyProfiles from '../data/dummyProfiles.json';


const bgImage = 'https://images.unsplash.com/photo-1462396240927-52058a6a84ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2873&q=80'

// const companyName = top_50_USA_tech_companies["Company Name"]
const profiles = dummyProfiles;

const ProfileCard = (props:{profile: any}) => {
    const navigation = useNavigation();

    const goToProfile = () => {
        const data = props.profile;
        navigation.navigate('userProfile', data);
    };

    return(
        <TouchableOpacity style={styles.viewCard} onPress={goToProfile}>
            <View style={{flexDirection: 'row'}}>
                <View style={[styles.profPicContainer, {flex: 1}]}>
                    <Image source={{uri: props.profile.image}} style={styles.profPic}/>
                </View> 

                <View style={{flexDirection: 'column', flex: 3, marginLeft: '5%'}}>
                    <Text style={styles.companyName}>
                        {props.profile.name}
                    </Text>
                    <Text style={styles.subheading}>
                        {props.profile.pronouns}
                    </Text>    
                    <Text style={styles.subheading}>
                        {props.profile.position}
                    </Text>                                 
                </View>

            </View>

        </TouchableOpacity>
    )

}

const YourNetwork = ({navigation}) => {
    return(
        <Screen preset='scroll'>
            <SafeAreaView style={styles.titleContainer}>
                    <SafeAreaView style={{justifyContent: 'flex-start'}}>
                    <TouchableOpacity onPress={()=>{navigation.navigate("home")}} style={{flexDirection: 'row', alignSelf: 'flex-start', justifyContent: 'flex-start'}}>
                        <Ionicons name="arrow-back" size={25} color="#F0FAEF" style={{marginLeft: '3%'}}/>
                        <Text style={[styles.subheading, {marginBottom: 0, color:'#F0FAEF', marginRight: '50%', paddingLeft: '1%', fontSize: 20}]}>Back to Home</Text>
                    </TouchableOpacity>
                    </SafeAreaView>
                <Text style={styles.titleText}>Your Network</Text>
            </SafeAreaView>
            <Search/>
            <View>
                {profiles.map((item, index) => {
                    return(
                        <ProfileCard key={index} profile={item}/>
                    )
                })}
            </View>
        </Screen>
    )
}

const Search = () => {
    const SearchButton = () => {
        return(
            <View style={[styles.buttonContainer, {backgroundColor: '#91145f'}]}>
                <FontAwesome5 name="search" size={22} color="white" />
            </View> 
    
        )
    };

    const FilterButton = () => {
        return(
            <View style={[styles.buttonContainer, {borderRadius: 7, height: 'auto', marginRight: '4%', alignSelf: 'center', shadowColor: 'black',shadowOffset: {width: 0, height: 2,}, shadowOpacity: 0.2, shadowRadius: 4,backgroundColor: 'white'}]}>
                <FontAwesome5 name="sliders-h" size={20} color="#484848" />
            </View>
    
        )
    };

    return(
        <View style={{flexDirection: 'row', flex: 1}}>
            <View style={styles.searchBarContainer}>
                <View style={{flex: 5, padding: '2%'}}>
                    <Text style={[styles.defaultFont , {fontSize: 15, color: 'black'}]}>Search</Text>
                </View>
                <SearchButton/>
            </View>
            <FilterButton/>
        </View>
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
        backgroundColor: '#3c2b4f',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowOffset: {width: 0, height: 1}
    },
    titleText: {
        fontSize: 40,
        color: '#EAE8FF',
        fontFamily: 'Syne_700Bold',
        paddingVertical: '3%',
    },
    section: {
        padding: 12,
    },
    subheading: {
        fontSize: 18,
        fontFamily: 'Barlow_500Medium',
        color: '#91145f',
    },
    companyInfo: {
        fontSize: 16,
        fontFamily: 'Barlow_400Regular',
    },
    companyName: {
        fontSize: 18,
        fontFamily: 'Syne_700Bold',
        color: '#3c2b4f'
    },
    littleTab:{
        backgroundColor: '#EAE8FF',
        alignItems:'center',
        
   },
   viewCard:{
        backgroundColor: '#EAE8FF',
        marginTop:'2%',
        marginHorizontal: '5%',
        marginBottom: '2%',
        borderRadius: 10,
        padding: '5%',
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 1}

   },
   categoryName2:{
        fontFamily: 'Barlow_600SemiBold', 
        color: '#F0FAEF', 
        fontSize: 20, 
        alignSelf: 'center', 
        textAlign: 'center',
        marginBottom: '3%'
   },
   searchBarContainer: {
    marginVertical: '5%',
    marginLeft: '4%',
    marginRight: '3%',
    width: "77%",
    shadowColor: 'black',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 7,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center'
    },
    defaultFont: {
        fontFamily: 'Barlow_300Light'
    },
    buttonContainer: {
        padding: '2%',
        flex: 1,
        alignItems: 'center',
        borderTopEndRadius: 7,
        borderBottomEndRadius: 7,
        
    },
    profPicContainer: {
        width: 80,
        height: 80,
        borderRadius: 70,
        overflow: 'hidden',
        alignSelf: 'center',
        borderWidth: 3,
        borderColor: '#F0FAEF'
      },
      profPic: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
})



export default YourNetwork;