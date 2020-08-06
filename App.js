import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text,Button } from 'react-native';
import { Audio } from 'expo-av';

export default class App extends Component {
  playBeat = async () => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require('./Sounds/Beat.mp3'));
      await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  };
  playBass = async () => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require('./Sounds/Bass.mp3'));
      await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  };
  playLead = async () => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require('./Sounds/Lead.mp3'));
      await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  };
  playFx = async () => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require('./Sounds/Fx.mp3'));
      await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  };
  playArp = async () => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require('./Sounds/Arp.mp3'));
      await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  };
  playKeys = async () => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require('./Sounds/Keys.mp3'));
      await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  };
  playStop = async () => {
    Audio.setIsEnabledAsync(false);
  };
  render() {
    return (
      <View style={{ backgroundColor: 'black',height:1000}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'black',
            justifyContent: 'center',
            marginTop:230
          }}>
          <TouchableOpacity
            style={styles.buttonRed}
            onPress={this.playBeat}>
            <Text style={styles.tcolor}>Beat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonYellow}
          onPress={this.playBass}>
            <Text style={styles.tcolor}>Bass</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonGreen}
          onPress={this.playLead}>
            <Text style={styles.tcolor}>Lead</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'black',
            justifyContent: 'center',
          }}>
          <TouchableOpacity style={styles.buttonOrange}
          onPress={this.playFx}>
            <Text style={styles.tcolor}>Fx</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBlue}
          onPress={this.playArp}>
            <Text style={styles.tcolor}>Arp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonPink}
          onPress={this.playKeys}>
            <Text style={styles.tcolor}>Keys</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'black',
            justifyContent: 'center',
          }}>
          <TouchableOpacity style={styles.stop}
          onPress={this.playStop}>
            <Text style={styles.tcolor}>Click Here To Stop Music</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tcolor: {
    color: 'white',
    opacity: 1,
  },
  buttonRed: {
    backgroundColor: '#CC303B',
    margin: 7,
    width: 150,
    height: 150,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonYellow: {
    backgroundColor: '#FF920F',
    margin: 7,
    width: 80,
    height: 80,
     borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOrange: {
    backgroundColor: '#F4581F',
    margin: 7,
    width: 90,
    height: 90,
     borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonGreen: {
    backgroundColor: '#A3C610',
    margin: 7,
    marginTop: 100,
    width: 60,
    height: 60,
     borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPink: {
    backgroundColor: '#D71C60',
    margin: 7,
    width: 100,
    height: 100,
     borderRadius: 50, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBlue: {
    backgroundColor: '#09A494',
    margin: 7,
    width: '20%',
    height: 65,
     borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stop: {
    backgroundColor: 'red',
    margin: 7,
    width: 200,
    height: 70,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
});
