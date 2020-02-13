// @flow
import React from 'react';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Animated,
  Dimensions,
  View,
  ActivityIndicator,
} from 'react-native';
import Appbar from '../Appbar';
import Card from '../Card';
import {connect} from 'react-redux';
import {white, white2nd} from '../../config';
import {getDiscoverData} from '../../redux/actions/main';

const HEADER_HEIGHT = 56;
const {Value, event} = Animated;
const {width} = Dimensions.get('window');

type State = {
  data: array,
};

class Discover extends React.Component<{}, State> {
  constructor(props) {
    super(props);

    this.state = {
      isReady: false,
    };

    this.scrollY = new Value(0);

    this.onScroll = event(
      [
        {
          nativeEvent: {
            contentOffset: {y: this.scrollY},
          },
        },
      ],
      {
        useNativeDriver: true,
      },
    );
  }

  componentDidMount() {
    this.props.getDiscoverData(1);
  }

  _renderItem = ({item}) => {
    const {t, im, s} = item;
    const source = 'https://cdn.mangaeden.com/mangasimg/' + im;

    return (
      <Card title={t} subtitle={s} source={source} {...this.props.navigation} />
    );
  };

  render() {
    let translateY = Animated.diffClamp(
      this.scrollY,
      0,
      HEADER_HEIGHT,
    ).interpolate({
      inputRange: [0, 1],
      outputRange: [0, -1],
    });

    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor={white} />
        <SafeAreaView style={styles.container}>
          <Animated.View
            style={{
              ...styles.appbar,
              transform: [{translateY}],
            }}>
            <Appbar name="MangaEden" />
          </Animated.View>
          {this.props.manga_list !== undefined ? (
            <Animated.FlatList
              onScroll={this.onScroll}
              style={styles.flatlist}
              contentContainerStyle={styles.content}
              numColumns={3}
              data={this.props.manga_list}
              scrollEventThrottle={16}
              renderItem={this._renderItem}
              keyExtractor={key => key.i}
              bounces={false}
              alwaysBounceVertical={false}
            />
          ) : (
            <ActivityIndicator color="red" size="large" />
          )}
        </SafeAreaView>
      </>
    );
  }
}

const mapStateToPorps = state => {
  return {
    manga_list: state.main.manga_list,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDiscoverData: page => getDiscoverData(page, dispatch),
  };
};

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToPorps, mapDispatchToProps)(Discover);

const styles = StyleSheet.create({
  flatlist: {
    marginTop: 0,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  content: {
    padding: 5,
    paddingTop: HEADER_HEIGHT + 15,
    backgroundColor: white2nd,
    width: width,
  },
  appbar: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
    height: HEADER_HEIGHT,
  },
});
