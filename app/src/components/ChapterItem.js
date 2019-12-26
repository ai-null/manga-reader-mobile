// @flow
import React from 'react';
import {TouchableNativeFeedback, View, Text, StyleSheet} from 'react-native';

type Props = {
  title: string,
};

const ChapterItem = (props: Props) => {
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple('#cfcfcf')}>
      <View style={styles.chapterWrapper}>
        <Text numberOfLines={1} style={styles.chapter}>
          {props.title}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default ChapterItem;

const styles = StyleSheet.create({
  chapterWrapper: {
    width: '100%',
    padding: 15,
    backgroundColor: '#fafafa',
  },
  chapter: {
    color: '#494949',
  },
});
