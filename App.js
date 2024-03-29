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
import Feed from './assets/data/feed';
import PaginaPesquisa from "./src/screens/pesquisa";
import PesquisaDestinoTela from "./src/screens/pesquisadestino";
import GuestTela from "./src/screens/guest";
import 'react-native-gesture-handler';
import Router from "./src/navigation/router";
import HomeTabNavigator from "./src/navigation/HomeTabNavigator";
import {StatusBar} from 'react-native';

const post1 = Feed[1];

const App: () => Node = () => {
  return (



    <>
      <StatusBar barStyle="dark-content"/>
      <Router />
    </>

  );
};
export default App;
