// @flow
import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {Card as PaperCard, Text} from 'react-native-paper';
import {black2nd, PLACEHOLDER_IMAGE} from '../config';

type Props = {
  title: String,
  subtitle: String,
  source: String,
  type: String,
};

type State = {
  uri: String,
  isFailed: Boolean,
};

const {width} = Dimensions.get('window');

class Card extends React.PureComponent<Props, State> {
  constructor(props) {
    super();

    this.state = {
      uri: require('../../assets/placeholder_no_image.png'),
      isFailed: false,
    };
  }

  _onError = () => {
    this.setState({isFailed: true});
  };

  render() {
    const {title, subtitle, source} = this.props;
    const {uri, isFailed} = this.state;

    return (
      <PaperCard
        style={styles.card}
        onPress={() => this.props.navigate('Detail')}>
        <PaperCard.Cover
          source={isFailed ? uri : {uri: PLACEHOLDER_IMAGE + source}}
          style={styles.cover}
          defaultSource={require('../../assets/placeholder_no_image.png')}
          onError={this._onError}
          resizeMode="cover"
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
    width: width / 3 - 15,
    height: 150,
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
