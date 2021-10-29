import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function WriteScreen() {
  const [text, setText] = useState('');

  const getDateStr = () => {
    return new Date().toLocaleDateString();
  }

  const storePost = async() => {
    // get posts count
    let count = await AsyncStorage.getItem('@count');
    if (count == null){
      count = 0;
    } else {
      count = parseInt(count, 10);
    }
    // get author info
    let id = await AsyncStorage.getItem('@id');
    let name = await AsyncStorage.getItem('@name');
    if (id == null){ id = 'unknown' };
    if (name == null){ name = 'unknown' }

    count++;
    const pid = 'post#' + count.toString();
    const post = {content: text, date: getDateStr(), author_id: id, author_name: name, view: ''};
    const post_json = JSON.stringify(post);
    await AsyncStorage.setItem(pid, post_json);
    await AsyncStorage.setItem('@count', count.toString());

    // alert('pid: ' + pid);
    // alert('post: ' + post_json);
  }

  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{flex: 0.75, width: '75%'}}>
        <TextInput placeholder="...What's interesting today?" multiline={true}
        style={{width: '100%', height:'100%', fontSize: 16, color: 'gray'}} onChangeText={(t) => setText(t)} />
      </View>
      <View style={{marginTop: 50, width: 80}}><Button title='Save' onPress={() => storePost()} /></View>
    </View>
  )
};

export default WriteScreen;
