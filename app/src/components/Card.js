// @flow
import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {Card as PaperCard, Text} from 'react-native-paper';
import {black2nd, PLACEHOLDER_IMAGE, IMAGE_URI} from '../config';

type Props = {
  title: String,
  subtitle: String,
  source: String,
  id: Number,
  navigation: Object,
};

type State = {
  isFailed: Boolean,
};

const {width} = Dimensions.get('window');

class Card extends React.PureComponent<Props, State> {
  constructor(props) {
    super();

    this.state = {
      isFailed: false,
    };
  }

  _onError = () => {
    this.setState({isFailed: true});
  };

  _onCardPress = () => {
    const {id, title, subtitle, source} = this.props;
    this.props.navigate('Detail', {
      id,
      title,
      status: subtitle,
      source,
    });
  };

  render() {
    const {title, subtitle, source} = this.props;
    const {isFailed} = this.state;

    return (
      <PaperCard style={styles.card} onPress={this._onCardPress}>
        <PaperCard.Cover
          source={isFailed ? PLACEHOLDER_IMAGE : {uri: IMAGE_URI + source}}
          style={styles.cover}
          defaultSource={PLACEHOLDER_IMAGE}
          onError={this._onError}
          progressiveRenderingEnabled
        />
        <PaperCard.Content style={styles.contentContainer}>
          <Text
            numberOfLines={2}
            children={title || 'Load failed'}
            style={styles.title}
          />
          <View style={styles.subtitleWrapper}>
            <Text
              numberOfLines={1}
              children={
                subtitle === 1 ? 'On going' : 'Completed' || 'Load failed'
              }
              style={styles.subtitle}
            />
          </View>
        </PaperCard.Content>
      </PaperCard>
    );
  }
}

export default Card;

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    marginHorizontal: 2.5,
    flex: 1,
    overflow: 'hidden',
  },
  contentContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    flex: 1,
  },
  cover: {
    width: (width - 20) / 3,
    height: 150,
    resizeMode: 'cover',
  },
  title: {
    fontWeight: '500',
    color: black2nd,
    fontSize: 17,
  },
  subtitle: {
    color: '#757575',
    marginTop: 10,
  },
  subtitleWrapper: {
    justifyContent: 'flex-end',
    flex: 1,
  },
});
