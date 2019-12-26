import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {fromRight} from 'react-navigation-transitions';

// screens
import Discover from './components/screens/Discover';
import Detail from './components/screens/Detail';
import Favorite from './components/screens/Favorite';
import {white} from './config';

const discoverStack = createStackNavigator(
  {
    Discover,
    Detail,
  },
  {
    transitionConfig: () => fromRight(),
    initialRouteName: 'Discover',
    headerMode: 'none',
  },
);

const favoriteStack = createStackNavigator(
  {
    Favorite,
    Detail,
  },
  {
    transitionConfig: () => fromRight(),
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
