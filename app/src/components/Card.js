import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Card as PaperCard} from 'react-native-paper';

type Props = {
  title: string,
  subtitle: string,
  source: string,
};

const {height, width} = Dimensions.get('window');

const Card = ({title, subtitle, source}): Props => {
  return (
    <PaperCard style={styles.card} onPress={() => {}}>
      <PaperCard.Cover source={{uri: source}} style={styles.cover} />
      <PaperCard.Title
        title={title}
        titleStyle={styles.title}
        subtitle={subtitle}
      />
    </PaperCard>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    marginHorizontal: 2.5,
    flex: 1,
  },
  cover: {
    height: 150,
  },
  title: {
    fontSize: 17,
  },
});
