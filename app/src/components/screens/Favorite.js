import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

export default class Favorite extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text>Favorite Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
