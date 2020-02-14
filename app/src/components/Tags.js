// @flow
import React from 'react';
import {TouchableNativeFeedback, View, Text, StyleSheet} from 'react-native';

type Props = {
  data: Array,
  onPress?: () => void,
};

const Tags = (props: Props) => {
  let {data, onPress = () => {}} = props;
  console.log(data);

  return data.map((tag, index) => (
    <TouchableNativeFeedback onPress={onPress} key={index}>
      <View style={styles.tag}>
        <Text style={styles.text}>{tag}</Text>
      </View>
    </TouchableNativeFeedback>
  ));
};

export default Tags;

const styles = StyleSheet.create({
  tag: {
    padding: 7,
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
    margin: 2.5,
  },
  text: {
    color: '#616161',
  },
});
