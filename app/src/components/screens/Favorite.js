import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {white} from '../../config';

import Appbar from '../Appbar';
import {Button} from 'react-native-paper';

export default class Favorite extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor={white} />
        <SafeAreaView style={{flex: 1}}>
          <Appbar name="Favorite" />
          <View style={styles.container}>
            <Button
              onPress={() => this.props.navigation.navigate('Detail')}
              mode="contained">
              to detail
            </Button>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
