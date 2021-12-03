import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


function SettingsScreen() {

  return(
    <View style={styles.all}>
      <View><Text style={styles.text}>Settings...</Text></View>
      <View><Text>Not finished</Text></View> 
    </View>
  )
};

const styles = StyleSheet.create({
  all: {
    marginTop: 200,
    alignItems: 'center'
  },
  text: {
    color: 'gray',
    fontSize: 15
  }
});

export default SettingsScreen;
