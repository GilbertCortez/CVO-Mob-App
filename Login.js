import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      	<Text>THIS IS LOGIN</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
