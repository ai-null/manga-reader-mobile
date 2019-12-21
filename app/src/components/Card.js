import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {Card as PaperCard, Text} from 'react-native-paper';
import {black2nd} from '../config';

type Props = {
  title: string,
  subtitle: string,
  source: string,
};

const {width} = Dimensions.get('window');

// TODO: make simpler cards
const Card = ({title, subtitle, source}): Props => {
  return (
    <PaperCard style={styles.card} onPress={() => {}}>
      <PaperCard.Cover
        source={{uri: source}}
        style={styles.cover}
        resizeMode="cover"
      />
      <PaperCard.Content style={styles.contentContainer}>
        <Text
          numberOfLines={2}
          children={title || 'Error'}
          style={styles.title}
        />
        <View style={styles.subtitleWrapper}>
          <Text
            numberOfLines={1}
            children={subtitle || 'Error'}
            style={styles.subtitle}
          />
        </View>
      </PaperCard.Content>
    </PaperCard>
  );
};

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
