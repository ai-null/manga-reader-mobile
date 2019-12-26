import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import {Title, Surface, Button, Subheading} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Appbar from '../Appbar';
import Section from '../Section';
import ChapterItem from '../ChapterItem';
import {white, white2nd, black3rd, IMAGE_URI} from '../../config';

const {width} = Dimensions.get('window');

export default class Detail extends Component {
  state = {
    favorite: false,
  };

  _onFavoritePress = () => {
    let message = this.state.favorite
      ? 'removed from favorite'
      : 'added to favorite';

    this.setState({favorite: !this.state.favorite});
    ToastAndroid.show(message, 2000);
  };

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
          <ScrollView
            contentContainerStyle={styles.container}
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}>
            <Surface style={styles.header}>
              <Image
                source={{uri: IMAGE_URI}}
                style={styles.backgroundCover}
                blurRadius={1}
              />
              <View style={styles.wrapper}>
                <View>
                  <Image
                    source={{uri: IMAGE_URI}}
                    style={styles.cover}
                    defaultSource={require('../../../assets/1.jpg')}
                  />
                </View>
                <View style={styles.titleWrapper}>
                  <Title style={styles.title} numberOfLines={3}>
                    Attack on Titan Movie: Setsubou hen
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
                    onPress={() => {}}
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
              <Section section="Description" />
              <Section section="Genres" type="genres" content="everyone" />
              <Section section="Author" content="AinulBedjo" />
            </Surface>
            <Surface style={styles.chapters}>
              <Subheading style={{...styles.subheading, marginBottom: 20}}>
                Chapters
              </Subheading>
              <Surface style={{elevation: 1.3, width: width - 40}}>
                <ChapterItem title="Chapter 1 - ainul ganteng ea" />
                <ChapterItem title="Chapter 2 - gatau ah" />
                <ChapterItem title="Chapter 3 - males" />
                <ChapterItem title="Chapter 4 - pen beli truck" />
                <ChapterItem title="Chapter 5 - title yaaaaang sangaaat panjaaaaang" />
                <View style={styles.buttonContainer}>
                  <Button mode="outlined" onPress={() => {}} color="#1e88e5">
                    view all chapters
                  </Button>
                </View>
              </Surface>
            </Surface>
            <View
              style={{
                justifyContent: 'center',
                padding: 0,
                paddingBottom: 20,
                alignItems: 'center',
                // backgroundColor: 'white',
              }}>
              <Text style={{color: black3rd}}>
                made with love by Ainulbedjo
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {backgroundColor: white2nd},
  scrollView: {marginBottom: 56},
  header: {elevation: 2},
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
  buttonContainer: {
    padding: 10,
  },
});
