// @flow
import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import Appbar from '../Appbar';

import {connect} from 'react-redux';
import {getReadData} from '../../redux/actions/read';

type Props = {
  navigation: Object,
};

class Read extends React.PureComponent<Props, {}> {
  componentDidMount() {
    const {id} = this.props.navigation.state.params;
    this.props.getReadData(id.toString());
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Appbar
          backAction
          name="Read"
          navigateTo="Detail"
          {...this.props.navigation}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  read: state.read,
});

const mapDispatchToProps = dispatch => ({
  getReadData: id => getReadData(id, dispatch),
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(Read);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
