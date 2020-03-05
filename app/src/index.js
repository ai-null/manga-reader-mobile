import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {
  createStackNavigator,
  StackViewTransitionConfigs,
} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

// screens
import Discover from './components/screens/Discover';
import Detail from './components/screens/Detail';
import Favorite from './components/screens/Favorite';
import Chapters from './components/screens/Chapters';
import Read from './components/screens/Read';
import {white} from './config';

const {SlideFromRightIOS} = StackViewTransitionConfigs;

const detailStack = createStackNavigator(
  {
    Detail,
    Chapters,
    Read,
  },
  {
    transitionConfig: () => SlideFromRightIOS,
    initialRouteName: 'Detail',
    headerMode: 'none',
  },
);

const discoverStack = createStackNavigator(
  {
    Discover,
    detailStack,
  },
  {
    transitionConfig: () => SlideFromRightIOS,
    initialRouteName: 'Discover',
    headerMode: 'none',
  },
);

const favoriteStack = createStackNavigator(
  {
    Favorite,
    detailStack,
  },
  {
    transitionConfig: () => SlideFromRightIOS,
    initialRouteName: 'Favorite',
    headerMode: 'none',
  },
);

function hideNavigatorOnDetail(navigation, icon) {
  let tabBarVisible = true;

  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarIcon: ({tintColor}) => (
      <Icon name={icon} color={tintColor} size={24} />
    ),
    tabBarVisible,
  };
}

const rootStack = createMaterialBottomTabNavigator(
  {
    Discover: {
      screen: discoverStack,
      navigationOptions: ({navigation}) => {
        return hideNavigatorOnDetail(navigation, 'md-compass');
      },
    },
    Favorite: {
      screen: favoriteStack,
      navigationOptions: ({navigation}) => {
        return hideNavigatorOnDetail(navigation, 'md-heart');
      },
    },
  },
  {
    initialRouteName: 'Discover',
    barStyle: {backgroundColor: white},
    activeColor: '#1e88e5',
    inactiveColor: '#9e9e9e',
    shifting: true,
  },
);

export default createAppContainer(rootStack);
