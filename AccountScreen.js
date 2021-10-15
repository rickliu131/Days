import React, { useState, useEffect} from 'react';
import { View, Text, TextInput, StyleSheet, Image, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountScreen = () => {

  const [isLoaded, setIsLoaded] = useState(false);

  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [name, setName] = useState('');
  const [note, setNote] = useState('');
  const [ppUrl, setPPUrl] = useState('');

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('@id', id);
      await AsyncStorage.setItem('@pwd', pwd);
      await AsyncStorage.setItem('@name', name);
      await AsyncStorage.setItem('@note', note);
      await AsyncStorage.setItem('@ppurl', ppUrl);
    } catch (e) {
      // error here
    }
  }

  const loadData = async () => {
    let idLocal = await AsyncStorage.getItem('@id');
    let pwdLocal = await AsyncStorage.getItem('@pwd');
    let nameLocal = await AsyncStorage.getItem('@name');
    let noteLocal = await AsyncStorage.getItem('@note');
    let ppUrlLocal = await AsyncStorage.getItem('@ppurl');

    if (idLocal != null){
      setId(idLocal);
    }
    if (pwdLocal != null){
      setPwd(pwdLocal);
    }
    if (nameLocal != null){
      setName(nameLocal);
    }
    if (noteLocal != null){
      setNote(noteLocal);
    }
    if (ppUrlLocal != null){
      setPPUrl(ppUrlLocal);
    }
  }

  if (isLoaded == false){
    loadData();
    setIsLoaded(true);
  }

  return(
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{uri: ppUrl}} />
      </View>
      <View style={styles.info}>
        <View style={styles.info_row}>
          <Text style={styles.info_row_text}>ID</Text>
          <TextInput style={styles.info_row_textinput} value={id} onChangeText={(id) => setId(id)} />
        </View>
        <View style={styles.info_row}>
          <Text style={styles.info_row_text}>Name</Text>
          <TextInput style={styles.info_row_textinput} value={name} onChangeText={(name) => setName(name)} />
        </View>
        <View style={styles.info_row}>
          <Text style={styles.info_row_text}>Password</Text>
          <TextInput style={styles.info_row_textinput} value={pwd} onChangeText={(pwd) => setPwd(pwd)} />
        </View>
        <View style={styles.info_row}>
          <Text style={styles.info_row_text}>My Note</Text>
          <TextInput style={styles.info_row_textinput} value={note} onChangeText={(note) => setNote(note)} />
        </View>
        <View style={styles.info_row}>
          <Text style={styles.info_row_text}>Profile Pic URL</Text>
          <TextInput style={styles.info_row_textinput} value={ppUrl} onChangeText={(ppUrl) => setPPUrl(ppUrl)} />
        </View>
      </View>
      <View style={styles.button_container}>
        <Button title='Save' onPress={() => storeData()}/>
      </View>
    </View>
  )


};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 230,
    height: 230
  },
  info: {
    margin: 20
  },
  info_row: {
    margin: 5,
  },
  info_row_text: {
    fontSize: 14,
  },
  info_row_textinput: {
    fontSize: 14,
    color: 'gray'
  },
  button_container: {
    width: 80
  }
});



export default AccountScreen;
