import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {fromRight} from 'react-navigation-transitions';

// screens
import Discover from './components/screens/Discover';
import Favorite from './components/screens/Favorite';

const discoverStack = createStackNavigator(
  {
    Discover,
  },
  {
    transitionConfig: fromRight,
    initialRouteName: 'Discover',
    headerMode: 'none',
  },
);

const rootStack = createBottomTabNavigator(
  {
    Discover: {
      screen: discoverStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="md-compass" color={tintColor} size={24} />
        ),
      },
    },
    Favorite: {
      screen: Favorite,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="md-heart" color={tintColor} size={24} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Discover',
  },
);

export default createAppContainer(rootStack);
