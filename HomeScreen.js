import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Post from './DiaryView';

function HomeScreen() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [count, setCount] = useState(-1);
  const [content, setContent] = useState('');

  const getPosts = async() => {
    let count = await AsyncStorage.getItem('@count');
    if (count == null){
      count = 0;
    } else {
      count = parseInt(count, 10);
    }
    setCount(count); //for 'clear' uses

    let posts = [];
    for (let i=count; i>=1; i--){
      const key = 'post#' + i.toString();
      let p = await AsyncStorage.getItem(key);
      p = JSON.parse(p);
      //extend this part later! (date, author, view...) (both at here and in DiaryView.js)
      posts.push(<Post content={p.content} author={p.author_name} date={p.date}/>);
      // alert(p.content);
    }
    setContent(<View style={styles.whole}>{posts}</View>);
  }

  const clearAll = async() => {
    await AsyncStorage.clear();
    setIsLoaded(false);
  }

  if (isLoaded == false){
    getPosts();
    setIsLoaded(true);
  }

  return(
    <View style={{alignItems: 'center'}}>
      <View style={{width: '100%'}}>{content}</View>
      <View style={{width: 100}}><Button title='Clear All' onPress={() => clearAll()} /></View>
    </View>
  )
};

const styles = StyleSheet.create({
  whole: {
    marginTop: 30
  }
});


export default HomeScreen;
