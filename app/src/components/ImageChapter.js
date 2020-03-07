// @flow
import React, {PureComponent} from 'react';
import {StyleSheet, Animated, Dimensions} from 'react-native';
import {TapGestureHandler, State} from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');
const ITEM_HEIGHT = 500;
const {Value, timing} = Animated;

type Props = {
  source: String,
};

export default class ImageChapter extends PureComponent<Props, {}> {
  constructor(props) {
    super(props);

    this.zoom = new Value(0);
  }

  _onSingleTap = ({nativeEvent}) => {
    nativeEvent.state === State.ACTIVE;
  };

  _onDoubleTap = ({nativeEvent}) => {
    nativeEvent.state === State.ACTIVE &&
      timing(this.zoom, {
        toValue: 1,
        useNativeDriver: true,
        duration: 100,
      }).start();
  };

  render() {
    const doubleTap = React.createRef();
    let scale = this.zoom.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1.5],
      extrapolate: 'clamp',
    });

    return (
      <TapGestureHandler
        waitFor={doubleTap}
        onHandlerStateChange={this._onSingleTap}>
        <Animated.View style={{...styles.imageContainer}}>
          <TapGestureHandler
            ref={doubleTap}
            numberOfTaps={2}
            onHandlerStateChange={this._onDoubleTap}>
            <Animated.Image
              source={{uri: this.props.source}}
              style={{...styles.imageItem, transform: [{scale}]}}
            />
          </TapGestureHandler>
        </Animated.View>
      </TapGestureHandler>
      // <TapGestureHandler
      //   onHandlerStateChange={({nativeEvent}) =>
      //     nativeEvent.state === State.ACTIVE && Alert.alert('Single tap!')
      //   }
      //   waitFor={doubleTap}>
      //   <Animated.View style={{...styles.imageContainer}}>
      //     <TapGestureHandler
      //       ref={doubleTap}
      //       onHandlerStateChange={({nativeEvent}) =>
      //         nativeEvent.state === State.ACTIVE &&
      //         Alert.alert("You're so fast")
      //       }
      //       numberOfTaps={2}>
      //       <Animated.Image
      //         source={{uri: this.props.source}}
      //         style={{...styles.imageItem, transform: [{scale}]}}
      //       />
      //     </TapGestureHandler>
      //   </Animated.View>
      // </TapGestureHandler>
    );
  }
}

const styles = StyleSheet.create({
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
