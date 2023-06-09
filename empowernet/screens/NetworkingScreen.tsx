import React, { useState, useMemo } from 'react'
import { ImageBackground, Text, View, SafeAreaView, Button, StyleSheet, TouchableOpacity } from 'react-native'
import TinderCard from 'react-tinder-card';
import dummyProfiles from '../data/dummyProfiles.json';
import Screen from '../components/Screen';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const db = dummyProfiles;

const alreadyRemoved = []
let charactersState = db // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

const NetworkingScreen = () => {
  const [characters, setCharacters] = useState(db)
  const [lastDirection, setLastDirection] = useState()

  const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete + ' to the ' + direction)
    setLastDirection(direction)
    alreadyRemoved.push(nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
    charactersState = charactersState.filter(character => character.name !== name)
    setCharacters(charactersState)
  }

  const swipe = (dir) => {
    const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.name))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
      const index = db.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      //childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }

    const navigation = useNavigation();

    // const goToProfile = (profile) => {
    //     const data = profile;
    //     console.log('profile')
    //     navigation.navigate('userProfile', data);
    // };
  

  return (
    <Screen>
        <SafeAreaView style={[styles.titleContainer, {marginBottom: '20%'}]}>
            <Text style={styles.titleText}>Connect With Others</Text>

        </SafeAreaView>
      
      <View style={styles.cardContainer}>
        
        {characters.map((profile, index) => 
            // <TouchableOpacity key={profile.name}  onPress={() => {goToProfile(profile)}}>
                <TinderCard key={profile.name} onSwipe={(dir) => swiped(dir, profile.name)} onCardLeftScreen={() => outOfFrame(profile.name)} preventSwipe={['up', 'down']}>
                    <View style={[styles.card, ]}>
                    <ImageBackground style={styles.cardImage} source={{uri: profile.image}}>
                        <View style={styles.cardTextContainer}>
                            <Text style={styles.subheading}>{profile.name}</Text> 
                            <Text style={[styles.infoText, {fontSize: 18}]}>{profile.pronouns}</Text> 
                            <Text style={[styles.infoText, {fontFamily: 'Barlow_600SemiBold'}]}>{profile.position}</Text> 
                            <Text style={[styles.infoText, {fontSize: 18, color: '#E6AACE'}]}>{profile.location}</Text>                   
                        </View>
                    </ImageBackground>
                    <TouchableOpacity style={{}} onPress={() => {}}>
                        <Text style={[styles.infoText, {fontSize: 18, marginVertical: '5%'}]} numberOfLines={5} ellipsizeMode="tail">{profile.bio}</Text>
                    </TouchableOpacity>
                    </View>
                </TinderCard>
            // </TouchableOpacity>
        )}                


      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={[styles.button]}>
            <Ionicons name="arrow-undo" size={24} color="#ADACB5" />
            <Text style={styles.buttonText}>Skip</Text>
        </View>
        <View style={[styles.button,]}>
        <Ionicons name="arrow-redo" size={24} color="#ADACB5" />
            <Text style={[styles.buttonText,]}>Connect</Text>
        </View>
      </View>
      {/* {lastDirection ? <Text style={styles.infoText} key={lastDirection}>You swiped {lastDirection}</Text> : <Text style={styles.infoText}>Swipe a card or press a button to get started!</Text>} */}
    </Screen>
  )
}

export default NetworkingScreen;

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardContainer: {
      width: '100%',
      maxWidth: 350,
      height: 550,
      alignSelf: 'center',
      marginRight: '3%'
    },
    card: {
        position: 'absolute',
        backgroundColor: '#2D3142',
        width: '100%',
        height: 550,
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 1},
        shadowRadius: 10,
        borderRadius: 10,
        resizeMode: 'cover',
        marginHorizontal: '2%',
        marginTop:'-15%',
        paddingBottom: '40%',
        padding: '4%',

    },
    cardTextContainer: {
        marginTop: '80%',
        flex: 1,
        backgroundColor: 'rgba(45, 49, 66, 0.7)',
        width: '100%',
        height: '100%',
        paddingHorizontal: '3%',
        paddingTop: '3%',
        paddingBottom: '3%',
        alignSelf: 'center',
        textAlign: 'center'
    },
    cardImage: {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10
    },
    button: {
        marginHorizontal: '10%',
        borderRadius: 5,
        marginTop: '-8%',
        alignItems: 'center',

    },
    buttonText: {
        fontSize: 18,
        color: '#ADACB5',
        fontFamily: 'Syne_700Bold',
        paddingHorizontal: '3%',
        textAlign: 'center'
    },
    infoText: {
      fontSize: 20,
      fontFamily: 'Barlow_500Medium',
      marginHorizontal: '7%',
      color: '#EAE8FF',
     
    },
    titleContainer: {
        backgroundColor: '#E6AACE',
    },
    titleText: {
        fontSize: 30,
        color: '#2D3142',
        fontFamily: 'Syne_700Bold',
        paddingHorizontal: '3%',
        paddingTop: '3%',
        textAlign: 'center'
    },
    imageWrapper: {
        height: 250,
        width: 250,
        overflow: 'hidden',
        alignSelf: 'center',
        margin: 10,
    },
    subheading: {
        fontSize: 26,
        fontFamily: 'Syne_700Bold',
        margin: 3,
        color: '#EAE8FF',
        paddingHorizontal: '5%'
    },

  })
  