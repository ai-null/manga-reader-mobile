// @flow
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

import AppContainer from './app/src/index';

type State = {
  isLoading: Boolean,
};

export default class App extends React.Component<{}, State> {
  render() {
    return (
      <PaperProvider>
        <AppContainer />
      </PaperProvider>
    );
  }
}
