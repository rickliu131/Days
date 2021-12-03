import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Post from './DiaryView';

const BGColorContext = React.createContext(null);

function HomeScreen() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [count, setCount] = useState(-1);
  const [content, setContent] = useState([{}]);

  const [bgcolor, setBgcolor] = useState('white');

  const updateCount = async(value) => {
    await AsyncStorage.setItem('@count', value);
  }

  useEffect(() => {updateCount(count)}, [count]);

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
      posts.push(p);
      // alert(p.content);
    }
    console.log(posts);
    setContent(posts);

  }

  const clearAll = async() => {
    await AsyncStorage.clear();
    setIsLoaded(false);
  }

  if (isLoaded == false){
    getPosts();
    setIsLoaded(true);
  }

  const renderPost = (p) => {
    return (
      <Post author={p.item.author_name} date={p.item.date}>
        <Text>{p.item.content}</Text>
      </Post>
    );
  }

  return(
    <BGColorContext.Provider value={bgcolor}>
      <BGColorContext.Consumer>
      {value =>
        <View style={{alignItems: 'center', backgroundColor: value}}>
          <View style={{width: '100%', height: 410, marginTop: 25, padding: 0}}>
            <FlatList data={content} renderItem={renderPost} />
          </View>
          <View style={{marginTop:0, width: 150}}><Button title='Refresh' onPress={() => getPosts()} /></View>
          <View style={{marginTop:10, width: 150}}><Button title='Clear' onPress={() => clearAll()} /></View>
          <View style={{marginTop:10, width: 150}}><Button title='Change Theme' onPress={() => {bgcolor == 'white' ? setBgcolor('#202020'):setBgcolor('white')}} /></View>
          <View style={{marginTop:10, marginBottom: 150}}><Text style={{color: 'gray'}}>You have {count} diary entries.</Text></View>
        </View>
      }
      </BGColorContext.Consumer>
    </BGColorContext.Provider>
  )
};

const styles = StyleSheet.create({
  whole: {
    marginTop: 30
  }
});


export default HomeScreen;
