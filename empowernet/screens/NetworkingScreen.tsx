import React, { useState, useMemo } from 'react'
import { ImageBackground, Text, View, SafeAreaView, Button, StyleSheet } from 'react-native'
import TinderCard from 'react-tinder-card';
import dummyProfiles from '../data/dummyProfiles.json';

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
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }

  return (
    <View>
        <SafeAreaView style={[styles.titleContainer, {marginBottom: '20%'}]}>
            <Text style={styles.titleText}>Find others</Text>

        </SafeAreaView>
      
      <View style={styles.cardContainer}>
        
        {characters.map((profile, index) =>
          <TinderCard key={profile.name} onSwipe={(dir) => swiped(dir, profile.name)} onCardLeftScreen={() => outOfFrame(profile.name)}>
            <View style={styles.card}>
              <ImageBackground style={styles.cardImage} source={{uri: profile.image}}>
                <Text style={styles.cardTitle}>{profile.name}</Text>
              </ImageBackground>
            </View>
          </TinderCard>
        )}

      </View>
      <View style={styles.buttons}>
        <Button onPress={() => swipe('left')} title='Swipe left!' />
        <Button onPress={() => swipe('right')} title='Swipe right!' />
      </View>
      {lastDirection ? <Text style={styles.infoText} key={lastDirection}>You swiped {lastDirection}</Text> : <Text style={styles.infoText}>Swipe a card or press a button to get started!</Text>}
    </View>
  )
}

export default NetworkingScreen;

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      color: '#000',
      fontSize: 30,
      marginBottom: 30,
    },
    cardContainer: {
      width: '90%',
      maxWidth: 260,
      height: 300,
      alignSelf: 'center'
    },
    card: {
      position: 'absolute',
      backgroundColor: '#fff',
      width: '100%',
      maxWidth: 260,
      height: 300,
      shadowColor: 'black',
      shadowOpacity: 0.2,
      shadowOffset: {width: 0, height: 1},
      borderRadius: 10,
      resizeMode: 'cover',
    },
    cardImage: {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      borderRadius: 10,
    },
    cardTitle: {
      position: 'absolute',
      bottom: 0,
      margin: 10,
      color: '#fff',
    },
    buttons: {
      margin: 20,
      zIndex: -100,
    },
    infoText: {
      height: 28,
      justifyContent: 'center',
      display: 'flex',
      zIndex: -100,
    },
    titleContainer: {
        backgroundColor: '#E6AACE',
    },
    titleText: {
        fontSize: 40,
        color: '#2D3142',
        fontFamily: 'Syne_700Bold',
        paddingHorizontal: '3%',
        paddingTop: '3%'
    },
    imageWrapper: {
        height: 250,
        width: 250,
        overflow: 'hidden',
        alignSelf: 'center',
        margin: 10,
    },
    subheading: {
        fontSize: 18,
        fontFamily: 'Barlow_500Medium',
        margin: 3,
        color: '#F0FAEF',
        paddingHorizontal: '5%'
    },
   viewCard:{
        backgroundColor: '#B0D7FE',
        marginTop:'5%',
        marginHorizontal: '5%',
        marginBottom: '3%',
        borderRadius: 10,
        padding: '5%'

   }
  })
  