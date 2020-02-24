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
import {connect} from 'react-redux';

const ITEM_HEIGHT = 49.0;

class Chapters extends PureComponent<{}, {}> {
  constructor(props) {
    super(props);
  }

  _renderItem = ({item}) => {
    const t = `Chapter ${item[0]}`;
    return <ChapterItem title={t} />;
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
    let detail = this.props.detail;
    let data = detail.hasOwnProperty('chapters') ? detail.chapters : [];
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor={white} />
        <SafeAreaView>
          <Appbar
            backAction
            name={this.props.navigation.state.routeName}
            {...this.props.navigation}
          />
          <FlatList
            style={styles.flatlist}
            contentContainerStyle={{backgroundColor: white}}
            data={data}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => detail.chapters[index][3]}
            initialNumToRender={15}
            maxToRenderPerBatch={15}
            windowSize={17}
            getItemLayout={this._getItemLayout}
            ListEmptyComponent={this._renderLoading}
            removeClippedSubviews={true}
          />
        </SafeAreaView>
      </>
    );
  }
}

const mapStateToProps = state => ({
  detail: state.detail,
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, null)(Chapters);

const styles = StyleSheet.create({
  flatlist: {
    marginBottom: 56,
  },
});
