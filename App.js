// @flow
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as ReduxProvider} from 'react-redux';
import store from './app/src/redux/index';
import SplashScreen from 'react-native-splash-screen';

import AppContainer from './app/src/index';

type State = {
  isLoading: Boolean,
};

export default class App extends React.Component<{}, State> {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <ReduxProvider store={store}>
        <PaperProvider>
          <AppContainer />
        </PaperProvider>
      </ReduxProvider>
    );
  }
}
