import {View, Text, ImageBackground, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import Screen from '../components/Screen';
import StarRating from 'react-native-star-rating-widget';
import { Divider } from '@rneui/themed';
import top_50_USA_tech_companies from '../data/top_50_USA_tech_companies.json';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Entypo, MaterialCommunityIcons, Feather, FontAwesome5, Ionicons, FontAwesome } from '@expo/vector-icons';


const bgImage = 'https://images.unsplash.com/photo-1462396240927-52058a6a84ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2873&q=80'

// const companyName = top_50_USA_tech_companies["Company Name"]
const companies = top_50_USA_tech_companies;

const CompanyCard = (props:{company: any}) => {
    const navigation = useNavigation();

    const goToProfile = () => {
        const data = props.company;
        navigation.navigate('Company', data);
    };

    return(
        <TouchableOpacity style={styles.viewCard} onPress={goToProfile}>
            <View style={{flexDirection: 'row'}}>
                {/* INSERT LOGO HERE IF WE GET TO IT */}
                <View style={{flexDirection: 'column', flex: 1}}>
                    <Text style={styles.companyName}>
                        {props.company["Company Name"]}
                    </Text>  
                    <Text style={styles.subheading}>
                        {props.company["Sector"]}
                    </Text> 
                    <Text style={styles.subheading}>
                        {props.company["Employee Size"]} employees
                    </Text>                                  
                </View>

            </View>

        </TouchableOpacity>
    )

}

const CompaniesList = () => {
    return(
        <Screen preset='scroll'>
            <SafeAreaView style={styles.titleContainer}>
                <Text style={styles.titleText}>Top Companies</Text>
            </SafeAreaView>
            <Search/>
            <View>
                {companies.map((item, index) => {
                    return(
                        <CompanyCard key={index} company={item}/>
                    )
                })}
            </View>
        </Screen>
    )
}

const Search = () => {
    const SearchButton = () => {
        return(
            <View style={[styles.buttonContainer, {backgroundColor: '#A6C48A'}]}>
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
        backgroundColor: '#BFCC94',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowOffset: {width: 0, height: 1}
    },
    titleText: {
        fontSize: 40,
        color: '#344966',
        fontFamily: 'Syne_700Bold',
        paddingVertical: '3%',
    },
    section: {
        padding: 12,
    },
    subheading: {
        fontSize: 18,
        fontFamily: 'Barlow_500Medium',
        color: 'black',
    },
    companyInfo: {
        fontSize: 16,
        fontFamily: 'Barlow_400Regular',
    },
    companyName: {
        fontSize: 18,
        fontFamily: 'Syne_700Bold',
        color: '#2D3142'
    },
    littleTab:{
        backgroundColor: '#EAE8FF',
        alignItems:'center',
        
   },
   viewCard:{
        backgroundColor: '#F0FAEF',
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
})



export default CompaniesList;