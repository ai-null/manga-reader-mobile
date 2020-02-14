// @flow

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Subheading, Paragraph} from 'react-native-paper';

import {black3rd} from '../config';
import Tags from './Tags';

type Props = {
  section: String,
  content: String,
  categories: Array,
};

const Section = (props: Props) => {
  switch (props.type) {
    case 'genres':
      return (
        <View style={styles.section}>
          <Subheading style={styles.subheading}>{props.section}</Subheading>
          <View style={styles.genresContainer}>
            <Tags data={props.categories || []} />
          </View>
        </View>
      );

    default:
      return (
        <View style={styles.section}>
          <Subheading style={styles.subheading}>{props.section}</Subheading>
          <Paragraph style={styles.paragraph}>{props.content}</Paragraph>
        </View>
      );
  }
};

export default Section;

const styles = StyleSheet.create({
  section: {
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    flex: 6,
  },
  subheading: {color: black3rd, flex: 2},
  paragraph: {
    color: '#5e5e5e',
    flex: 4,
    textAlign: 'justify',
    marginTop: 5,
  },
  genresContainer: {
    position: 'relative',
    flex: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
