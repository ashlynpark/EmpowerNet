import {View, Text, ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import Screen from '../components/Screen';
import StarRating from 'react-native-star-rating-widget';
import { Divider } from '@rneui/themed';

// MAKE THIS INTO A COMPONENT
const bgImage = 'https://images.unsplash.com/photo-1462396240927-52058a6a84ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2873&q=80'

const dummyCompany = {
    'name': 'Company Company',
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

const CompanyPage = () => {
    return(
        <Screen preset='scroll'>
            <SafeAreaView>
                <ImageBackground source={{uri: bgImage}} style={styles.headerImage}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>
                            {dummyCompany.name}
                        </Text>
                    </View>
                </ImageBackground>
                
                <View style={styles.section}>
                    <View style={styles.littleTab}>
                        <Text style={styles.sectionHeading}>
                            Info
                        </Text>                        
                    </View>

                    <Text style={styles.companyInfo}>
                        Location: {dummyCompany.location}
                    </Text>
                    <Text style={styles.companyInfo}>
                        Number of Employees: {dummyCompany.numberEmployees}
                    </Text>
                </View>
                
                <View style={styles.section}>
                    <View style={styles.littleTab}>
                        <Text style={styles.sectionHeading}>
                            Ratings
                        </Text>                        
                    </View>

                    {dummyCompany.ratings.map((item, index) =>{
                        var total = 0;
                        for(var i = 0; i < item.ratings.length; i++) {
                            total += item.ratings[i];
                        }
                        var avg = total / item.ratings.length;
                        
                        return(
                            <View key={index} style={{marginHorizontal: '5%', marginVertical: '0.5%', flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={styles.categoryName}>{item.category}</Text>
                                <StarRating rating={avg} onChange={()=> {}} starSize={18} color='black'/>
                            </View>
                        )
                    })}
                    
                </View>
                
                <View style={styles.section}>
                    <Text style={styles.sectionHeading}>
                        Reviews
                    </Text>
                </View>

            </SafeAreaView>
        </Screen>
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
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    titleText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'OpenSans_700Bold'
    },
    section: {
        padding: 12,
    },
    sectionHeading: {
        fontSize: 20,
        fontFamily: 'OpenSans_500Medium',
        margin: 3
    },
    companyInfo: {
        fontSize: 16,
        fontFamily: 'OpenSans_400Regular',
    },
    categoryName: {
        fontSize: 16,
        fontFamily: 'OpenSans_400Regular',
    },
    littleTab:{
        backgroundColor: '#EAE8FF',
        alignItems:'center',
        
   }
})


export default CompanyPage;