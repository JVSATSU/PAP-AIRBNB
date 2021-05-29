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
<<<<<<< Updated upstream
import 'react-native-gesture-handler';
=======
import Router from "./src/navigation/router";

>>>>>>> Stashed changes
const post1 = Feed[1];

const App: () => Node = () => {
  return (
<<<<<<< Updated upstream
    <SafeAreaView>
      <HomeScreen/>
      {/*<Post post={post1} />*/}
      {/*<PaginaPesquisa/>*/}
      {/*<PesquisaDestinoTela/>*/}
      {/*<GuestTela/>*/}
    </SafeAreaView>
=======
    <>
      <Router/>
    </>
>>>>>>> Stashed changes
  );
};
export default App;
