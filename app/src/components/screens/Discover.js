// @flow
import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

type Props = {};

export default class Discover extends Component<Props, {}> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#333" />
        <Text>Hello World</Text>
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
