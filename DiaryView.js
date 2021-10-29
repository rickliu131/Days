import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Post = ({content, date, author}) => {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>{content}</Text>
      <Text style={styles.text_footnote}>{author}</Text>
      <Text style={styles.text_footnote}>{date}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    marginLeft: 50,
    marginRight: 50,
    padding: 20,
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 3,
  },
  text: {
    color: 'slategray',
    fontSize: 15
  },
  text_footnote: {
    color: '#8C826B',
    fontSize: 14,
    textAlign: 'right'
  }
});

export default Post;
