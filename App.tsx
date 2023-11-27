/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Main from './src/components/main/Main';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Toast from 'react-native-toast-message';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Main />
      <Toast />
    </Provider>
  );
}

export default App;
