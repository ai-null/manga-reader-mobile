// @flow

import React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar as PaperAppBar} from 'react-native-paper';

import {white, black3rd} from '../config';

type Props = {
  name: string,
  backaction: boolean,
};

export default class Appbar extends React.PureComponent<Props, {}> {
  _onPress = () => {
    const {navigateTo} = this.props;

    if (navigateTo) {
      this.props.navigate(navigateTo);
    } else {
      this.props.goBack();
    }
  };

  render() {
    const {name, backaction} = this.props;
    return (
      <PaperAppBar style={styles.appbar}>
        {backaction ? <PaperAppBar.BackAction onPress={this._onPress} /> : null}
        <PaperAppBar.Content title={name} titleStyle={styles.title} />
      </PaperAppBar>
    );
  }
}

const styles = StyleSheet.create({
  appbar: {
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: white,
  },
  title: {
    color: black3rd,
  },
});
