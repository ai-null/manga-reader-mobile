// @flow
import React from 'react';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
  Animated,
  View,
  Dimensions,
} from 'react-native';
import Appbar from '../Appbar';
import Card from '../Card';
import {connect} from 'react-redux';
import {white, white2nd} from '../../config';
import {getDiscoverData} from '../../redux/actions/main';

const HEADER_HEIGHT = 56;
const {Value, event, diffClamp, multiply} = Animated;
const {height} = Dimensions.get('window');

type State = {
  data: array,
};

class Discover extends React.Component<{}, State> {
  constructor(props) {
    super(props);

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
    const {i, t, im, s} = item;

    return (
      <Card
        id={i}
        title={t}
        subtitle={s}
        source={im}
        {...this.props.navigation}
      />
    );
  };

  render() {
    let translateY = multiply(
      diffClamp(
        this.scrollY.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolateLeft: 'clamp',
        }),
        0,
        HEADER_HEIGHT + 2,
      ),
      -1,
    );

    // 112.0, 242.0

    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor={white} />
        <SafeAreaView>
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
            <View style={styles.indicatorContainer}>
              <ActivityIndicator color="red" size="large" />
            </View>
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
  indicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height / 2,
  },
  content: {
    padding: 5,
    paddingTop: HEADER_HEIGHT + 15,
    backgroundColor: white2nd,
    // width: 'auto',
  },
  appbar: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
    height: HEADER_HEIGHT,
  },
});
