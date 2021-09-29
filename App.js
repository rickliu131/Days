import React, { useState } from 'react';
import { View, Text, Button, TextInput, Image, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function WriteScreen({ navigation }) {

  const [textSync, updateTextSync] = useState('');
  const [text, updateText] = useState('');

  return (
    <View style={styles.write_screen_c}>
      <View style={styles.write_screen_textinput_c}>
        <TextInput style={styles.write_screen_textinput}
                   placeholder="Write your diary here..." onChangeText={t => updateTextSync(t)} />
      </View>
      <View style={styles.write_screen_button_c}>
        <Button style={styles.write_screen_button}
                title='submit' onPress={() => updateText(textSync)} />
      </View>
      <View style={styles.write_screen_text_diary_c}>
        <Text style={styles.write_screen_text_diary}>What you wrote: {"\n"+text}</Text>
      </View>
      <View style={styles.write_screen_text_note_c}>
        <Text style={styles.write_screen_text_note}>
        (What I plan to have on this screen in the future: {"\n"}User write their diaries here, then upload to the server.)
        </Text>
      </View>
    </View>
  )
}

function ReadScreen({ navigation }) {
  return (
    <View style={styles.read_screen_c}>
      <View style={styles.read_screen_text_c}><Text style={styles.read_screen_text}>Diary #1</Text></View>
      <View style={styles.read_screen_text_c}><Text style={styles.read_screen_text}>Diary #2</Text></View>
      <View style={styles.read_screen_text_c}><Text style={styles.read_screen_text}>Diary #3</Text></View>
      <View><Text style={{fontSize: 13, color: 'purple'}}>(What I plan to have in the future: {"\n"}users view their and others' diaries here. Should be a list.)</Text></View>
    </View>
  )
}

function AccountScreen({ navigation }) {
  const src = 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg';

  const [name, updateName] = useState('User001');

  return (
    <View style={styles.account_screen_c}>
      <View style={styles.account_screen_image_c}>
        <Image style={styles.account_screen_image} source={{uri: src}}/>
      </View>
      <View style={styles.account_screen_text_c}>
        <Text style={styles.account_screen_text}>My name: {name}</Text>
      </View>
      <View style={styles.account_screen_textinput_c}>
        <TextInput style={styles.account_screen_textinput}placeholder='your disired name' onChangeText={t => updateName(t)}/>
      </View>
    </View>
  )
}

function AboutScreen({ navigation }) {
  return (
    <View style={styles.about_screen_c}>
      <Text style={styles.about_screen_text}>
      Welcome. {"\n"}
      This is a simple diary App. {"\n"}
      Developer: Yuxuan Liu {"\n"}
      Email: yuxuanliu@brandeis.edu {"\n"}
      </Text>
    </View>
  )
}

function HomeScreen({ navigation }) {

  return (
    <View style={styles.home_buttons_container}>
      <View style={styles.home_buttons}><Button title='Write A Diary' onPress={() => navigation.navigate('Write')} /></View>
      <View style={styles.home_buttons}><Button title='Check Diaries' onPress={() => navigation.navigate('Read')} /></View>
      <View style={styles.home_buttons}><Button title='Account' onPress={() => navigation.navigate('Account')} /></View>
      <View style={styles.home_buttons}><Button title='About App' onPress={() => navigation.navigate('About')} /></View>
    </View>
  )
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{title: 'Home'}} />
        <Stack.Screen name='Write' component={WriteScreen} options={{title: 'Write A Diary'}} />
        <Stack.Screen name='Read' component={ReadScreen} options={{title: 'Check Diaries'}} />
        <Stack.Screen name='Account' component={AccountScreen} options={{title: 'Account'}} />
        <Stack.Screen name='About' component={AboutScreen} options={{title: 'About App'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  home_buttons_container: {
    marginTop: 75,
    alignItems: 'center'
  },
  home_buttons: {
    marginTop: 20,
    width: '50%'
  },
  about_text_container: {
    margin: 60
  },
  about_text: {
    fontSize: 17,
    lineHeight: 25,
    color: '#787878'
  },
  write_screen_c:{
    marginTop: 120,
    alignItems: 'center'
  },
  write_screen_textinput_c: {

  },
  write_screen_textinput: {
    width: 200,
    height: 200,
    textAlign: 'center'
  },
  write_screen_button_c: {
  },
  write_screen_button: {
  },
  write_screen_text_diary_c: {
    marginTop: 20
  },
  write_screen_text_diary: {
    fontSize: 16,
    color: 'gray'
  },
  write_screen_text_note_c: {
    marginTop: 20
  },
  write_screen_text_note: {
    fontSize: 13,
    color: 'purple'
  },
  account_screen_c: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center'
  },
  account_screen_image_c: {

  },
  account_screen_image: {
    width: 200, height: 200
  },
  account_screen_text_c: {
    marginTop: 20
  },
  account_screen_text: {},
  account_screen_textinput_c: {},
  account_screen_textinput: {
    textAlign: 'center'
  },
  read_screen_c: {
    marginTop: 120,
    alignItems: 'center'
  },
  read_screen_text_c: {
    marginBottom: 40
  },
  read_screen_text: {
    fontSize: 17,
    color: 'gray'
  },
  about_screen_c: {
    margin: 60
  },
  about_screen_text: {
    fontSize: 17,
    lineHeight: 25,
    color: '#787878'
  }
});

export default App;
