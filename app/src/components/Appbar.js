// @flow

import React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar as PaperAppBar} from 'react-native-paper';

import {white} from '../config';

type Props = {
  name: string,
};

const Appbar = ({name}: Props) => {
  return (
    <PaperAppBar style={styles.appbar}>
      <PaperAppBar.Content title={name} />
    </PaperAppBar>
  );
};

const styles = StyleSheet.create({
  appbar: {
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: white,
  },
});

export default Appbar;
