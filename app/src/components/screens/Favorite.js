import React, {Component} from 'react';
import {View, Image, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {white, black3rd} from '../../config';

import Appbar from '../Appbar';
import {Headline, Title} from 'react-native-paper';

export default class Favorite extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor={white} />
        <SafeAreaView style={styles.safeAreaView}>
          <Appbar name="Favorite" />
          <View style={styles.container}>
            <Image
              source={require('../../../assets/under_construction210x300.png')}
              height={210}
              width={300}
              style={styles.image}
            />
            <Title style={styles.title}>
              This feature is still under construction
            </Title>
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
  safeAreaView: {
    flex: 1,
  },
  image: {
    height: 210,
    width: 300,
  },
  title: {
    color: black3rd,
    marginTop: 20,
    textAlign: 'center',
  },
});
