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
import {BASE_IMAGE_URI} from '../../config';

import {connect} from 'react-redux';
import {getReadData, removeCurrentReadData} from '../../redux/actions/read';

type Props = {
  navigation: Object,
  read: Object,
  getReadData: () => void,
  removeCurrentReadData: () => void,
};

const {width} = Dimensions.get('window');
const ITEM_HEIGHT = 500;

class Read extends React.PureComponent<Props, {}> {
  componentDidMount() {
    const {id} = this.props.navigation.state.params;
    this.props.getReadData(id.toString());
  }

  // componentWillUnmount() {
  //   this.props.removeCurrentReadData();
  // }

  renderItem({item}) {
    const url = BASE_IMAGE_URI + item[1];
    return (
      <View style={styles.imageContainer}>
        <Image source={{uri: url}} style={styles.imageItem} />
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
    // const images = Array.from({length: 200}).fill([DUMMY_IMAGE_LOCAL]);
    const {images} = this.props.read;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
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
          // initialScrollIndex={images.length ? 0 : images.length - 1}
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
  removeCurrentReadData: () => removeCurrentReadData(dispatch),
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
