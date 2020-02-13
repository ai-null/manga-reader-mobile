import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import Appbar from '../Appbar';

export default class Read extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Appbar backaction={true} name="Read" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
