import React, {PureComponent} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Appbar from '../Appbar';
import ChapterItem from '../ChapterItem';
import {white, white3rd} from '../../config';

const ITEM_HEIGHT = 49.0;

type State = {
  chapters: array,
};

export default class Chapters extends PureComponent<{}, State> {
  constructor(props) {
    super(props);

    this.state = {
      chapters: [
        'Chapter 1 - ainul ganteng ea',
        'Chapter 2 - gatau ah',
        'Chapter 3 - males',
        'Chapter 4 - pen beli truck',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
        'Chapter 5 - title yaaaaang sangaaat panjaaaaang',
      ],
    };
  }

  _renderItem = ({item}) => {
    return <ChapterItem title={item} />;
  };

  _renderLoading = () => {
    return <ActivityIndicator color={white3rd} />;
  };

  _getItemLayout = (data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  });

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor={white} />
        <SafeAreaView>
          <Appbar
            backaction={true}
            name={this.props.navigation.state.routeName}
            {...this.props.navigation}
          />
          <FlatList
            style={styles.flatlist}
            contentContainerStyle={{backgroundColor: white}}
            data={this.state.chapters}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => JSON.stringify(index)}
            initialNumToRender={15}
            maxToRenderPerBatch={15}
            windowSize={17}
            getItemLayout={this._getItemLayout}
            ListEmptyComponent={this._renderLoading}
            removeClippedSubviews={true}
          />
          {/* <View style={styles.container}>
            {this.state.chapters.map(e => (
              <ChapterItem title={e} />
            ))}
          </View> */}
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  flatlist: {
    marginBottom: 56,
  },
});
