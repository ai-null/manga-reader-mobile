// @flow
import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import Appbar from '../Appbar';
import {DUMMY_IMAGE_LOCAL} from '../../config';

import {connect} from 'react-redux';
import {getReadData} from '../../redux/actions/read';

type Props = {
  navigation: Object,
};

const {width, height} = Dimensions.get('window');
const ITEM_HEIGHT = 500;

class Read extends React.PureComponent<Props, {}> {
  // componentDidMount() {
  //   const {id} = this.props.navigation.state.params;
  //   this.props.getReadData(id.toString());
  // }

  renderItem({item}) {
    return (
      <View style={styles.imageContainer}>
        <Image source={item[0]} style={styles.imageItem} />
      </View>
    );
  }

  getItemLayout(data, index) {
    return {
      length: width,
      offset: width * index,
      index,
    };
  }

  render() {
    const images = Array.from({length: 200}).fill([DUMMY_IMAGE_LOCAL]);
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Appbar
          backAction
          name="Read"
          navigateTo="Detail"
          {...this.props.navigation}
        />

        <FlatList
          data={images}
          renderItem={this.renderItem}
          horizontal
          snapToInterval={width}
          disableIntervalMomentum
          initialNumToRender={3}
          maxToRenderPerBatch={3}
          getItemLayout={this.getItemLayout}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
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
    backgroundColor: 'black',
  },
  imageItem: {
    height: ITEM_HEIGHT,
    width: width,
    resizeMode: 'contain',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
