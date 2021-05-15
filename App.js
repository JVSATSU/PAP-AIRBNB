/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Text, SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/home';
import Post from './src/components/Post';
const App: () => Node = () => {
  return (
    <SafeAreaView>
      <HomeScreen />
    </SafeAreaView>
  );
};
export default App;