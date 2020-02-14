import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  ToastAndroid,
  Animated,
  ActivityIndicator,
} from 'react-native';
import {Title, Surface, Button, Subheading} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Appbar from '../Appbar';
import Section from '../Section';
import ChapterItem from '../ChapterItem';
import {
  white,
  white2nd,
  black3rd,
  PLACEHOLDER_IMAGE,
  IMAGE_URI,
} from '../../config';
import {connect} from 'react-redux';
import {getDetailData, removeCurrentData} from '../../redux/actions/detail';

const {width} = Dimensions.get('window');
const {Value, event} = Animated;
const THROTTLE = 50 + 155 + 20;

class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favorite: false,
    };

    this.scrollY = new Value(0);

    this.onScroll = event(
      [
        {
          nativeEvent: {
            contentOffset: {y: this.scrollY},
          },
        },
      ],
      {
        useNativeDriver: true,
      },
    );
  }

  componentDidMount() {
    // payload: {aka, author, categories, description},
    const {id} = this.props.navigation.state.params;

    this.props.getDetailData(id);
  }

  componentWillUnmount() {
    this.props.removeCurrentData();
  }

  _onFavoritePress = () => {
    let message = this.state.favorite
      ? 'removed from favorite'
      : 'added to favorite';

    this.setState({favorite: !this.state.favorite});
    ToastAndroid.show(message, 2000);
  };

  _onReadPress = () => {
    this.props.navigation.navigate('Read');
  };

  renderContent(translateY, title, status, uri) {
    if (this.props.detail !== undefined) {
      const {author, categories, description} = this.props.detail;

      return (
        <>
          <Surface style={styles.header}>
            <Animated.Image
              source={{uri}}
              style={{
                ...styles.backgroundCover,
                transform: [
                  {
                    translateY,
                  },
                ],
              }}
              blurRadius={0.6}
              defaultSource={PLACEHOLDER_IMAGE}
            />
            <View style={styles.wrapper}>
              <View>
                <Image
                  source={{uri}}
                  style={styles.cover}
                  defaultSource={PLACEHOLDER_IMAGE}
                />
              </View>
              <View style={styles.titleWrapper}>
                <Title style={styles.title} numberOfLines={3}>
                  {title}
                </Title>
              </View>
              <LinearGradient
                style={styles.gradient}
                colors={['transparent', '#333333']}
              />
            </View>
            <View style={styles.buttonGroup}>
              <View style={styles.button}>
                <Button
                  color="#1e88e5"
                  mode="outlined"
                  children="read"
                  icon="book-open-page-variant"
                  onPress={this._onReadPress}
                />
              </View>
              <View style={styles.button}>
                <Button
                  color="#e63b3b"
                  mode="outlined"
                  children={this.state.favorite ? 'favorited' : 'favorite'}
                  icon={this.state.favorite ? 'heart' : 'heart-outline'}
                  onPress={this._onFavoritePress}
                />
              </View>
            </View>
          </Surface>
          <Surface style={styles.contentDescription}>
            <Subheading style={styles.subheading}>About</Subheading>
            <Section section="Description" content={description} />
            <Section section="Genres" type="genres" categories={categories} />
            <Section section="Author" content={author} />
            <Section
              section="Status"
              content={status === 1 ? 'On going' : 'Completed' || 'Load failed'}
            />
          </Surface>
          <Surface style={styles.chapters}>
            {/* eslint-disable-next-line react-native/no-inline-styles */}
            <Subheading style={{...styles.subheading, marginBottom: 20}}>
              Chapters
            </Subheading>
            <Surface style={styles.subChapters}>
              <ChapterItem title="Chapter 1 - ainul ganteng ea" />
              <ChapterItem title="Chapter 2 - gatau ah" />
              <ChapterItem title="Chapter 3 - males" />
              <ChapterItem title="Chapter 4 - pen beli truck" />
              <ChapterItem title="Chapter 5 - title yaaaaang sangaaat panjaaaaang" />
              <View style={styles.buttonContainer}>
                <Button
                  mode="outlined"
                  onPress={() => this.props.navigation.navigate('Chapters')}
                  color="#1e88e5">
                  view all chapters
                </Button>
              </View>
            </Surface>
          </Surface>
        </>
      );
    }

    return <ActivityIndicator color="red" size="large" />;
  }

  render() {
    const {title, status, source} = this.props.navigation.state.params;
    const uri = IMAGE_URI + source;
    let translateY = this.scrollY.interpolate({
      inputRange: [0, THROTTLE],
      outputRange: [0, THROTTLE / 2 - 20],
      extrapolate: 'clamp',
    });

    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor={white} />
        <SafeAreaView>
          <Appbar
            backaction={true}
            navigateTo="Discover"
            name={title}
            {...this.props.navigation}
          />
          <Animated.ScrollView
            bounces={false}
            scrollEventThrottle={1}
            onScroll={this.onScroll}
            contentContainerStyle={styles.container}
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}>
            {this.renderContent(translateY, title, status, uri)}
          </Animated.ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const mapStateToProps = state => ({
  detail: state.detail,
});

const mapDispatchToProps = dispatch => ({
  getDetailData: id => getDetailData(id, dispatch),
  removeCurrentData: () => removeCurrentData(dispatch),
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(Detail);

const styles = StyleSheet.create({
  container: {backgroundColor: white2nd},
  scrollView: {marginBottom: 56},
  header: {elevation: 2, overflow: 'hidden'},
  backgroundCover: {
    width: width,
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: -1,
  },
  wrapper: {
    padding: 20,
    paddingTop: 50,
    flexDirection: 'row',
    position: 'relative',
  },
  cover: {width: 105, height: 150, resizeMode: 'contain'},
  titleWrapper: {
    justifyContent: 'flex-end',
    marginLeft: 10,
    width: width / 3 + 20,
  },
  title: {color: white2nd, marginVertical: 0},
  gradient: {
    position: 'absolute',
    bottom: 0,
    height: '100%',
    width: width,
    zIndex: -1,
  },
  contentDescription: {
    marginTop: 20,
    elevation: 2,
    padding: 20,
    paddingTop: 0,
  },
  buttonGroup: {
    backgroundColor: white,
    flexDirection: 'row',
    flex: 3,
    display: 'flex',
  },
  button: {
    flex: 1,
    padding: 10,
  },
  subheading: {
    marginTop: 10,
    color: black3rd,
    fontWeight: 'bold',
  },
  chapters: {
    elevation: 2,
    // width: width - 40,
    marginTop: 20,
    padding: 20,
    paddingTop: 0,
    marginBottom: 20,
  },
  subChapters: {
    elevation: 1.3,
  },
  buttonContainer: {
    padding: 10,
  },
});
