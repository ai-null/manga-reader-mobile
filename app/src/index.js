import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {fromRight} from 'react-navigation-transitions';

// screens
import Discover from './components/screens/Discover';

const rootStack = createStackNavigator(
  {
    Discover,
  },
  {
    transitionConfig: fromRight,
    initialRouteName: 'Discover',
    headerMode: 'none',
  },
);

export default createAppContainer(rootStack);
