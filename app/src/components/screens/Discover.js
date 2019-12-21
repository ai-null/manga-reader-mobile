// @flow
import React, {Component} from 'react';
import {StyleSheet, StatusBar, SafeAreaView, FlatList} from 'react-native';

import {white, white2nd} from '../../config';
import Appbar from '../Appbar';
import Card from '../Card';

type State = {
  data: array,
};

export default class Discover extends Component<{}, State, void> {
  state = {
    data: [
      {
        id: 1,
        title: 'title sangat panjang',
        subtitle: 'ainulbedjo',
        source:
          'https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg/220px-Shingeki_no_Kyojin_manga_volume_1.jpg',
      },
      {
        id: 2,
        title: 'title1',
        source:
          'https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg/220px-Shingeki_no_Kyojin_manga_volume_1.jpg',
      },
      {
        id: 3,
        title: 'title2',
        source:
          'https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg/220px-Shingeki_no_Kyojin_manga_volume_1.jpg',
      },
      {
        id: 4,
        title: 'title3',
        source:
          'https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg/220px-Shingeki_no_Kyojin_manga_volume_1.jpg',
      },
      {
        id: 5,
        title: 'title3',
        source:
          'https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg/220px-Shingeki_no_Kyojin_manga_volume_1.jpg',
      },
      {
        id: 6,
        title: 'title3',
        source:
          'https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg/220px-Shingeki_no_Kyojin_manga_volume_1.jpg',
      },
      {
        id: 7,
        title: 'title3',
        source:
          'https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg/220px-Shingeki_no_Kyojin_manga_volume_1.jpg',
      },
      {
        id: 8,
        title: 'title3',
        source:
          'https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg/220px-Shingeki_no_Kyojin_manga_volume_1.jpg',
      },
      {
        id: 9,
        title: 'title3',
        source:
          'https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg/220px-Shingeki_no_Kyojin_manga_volume_1.jpg',
      },
      {
        id: 10,
        title: 'title3',
        source:
          'https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg/220px-Shingeki_no_Kyojin_manga_volume_1.jpg',
      },
      {
        id: 11,
        title: 'title3',
        source:
          'https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg/220px-Shingeki_no_Kyojin_manga_volume_1.jpg',
      },
      {
        id: 12,
        title: 'title3',
        source:
          'https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg/220px-Shingeki_no_Kyojin_manga_volume_1.jpg',
      },
    ],
  };

  renderItem = ({item}) => {
    const {title, subtitle, source} = item;

    return <Card title={title} subtitle={subtitle} source={source} />;
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor={white} />
        <SafeAreaView>
          <Appbar name="MangaEden" />
          <FlatList
            style={styles.flatlist}
            contentContainerStyle={styles.content}
            numColumns={3}
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={key => JSON.stringify(key.id)}
          />
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  flatlist: {
    marginBottom: 56,
  },
  content: {
    padding: 15,
    backgroundColor: white2nd,
  },
});
