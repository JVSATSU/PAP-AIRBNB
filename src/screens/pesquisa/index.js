import React from "react";
import { View, Text, FlatList } from "react-native";
import Feed from '../../../assets/data/feed';
import Post from '../../components/Post';

const PaginaPesquisa = (props) => {
  return (
    <View>
      <FlatList data={Feed}
      renderItem={({item}) => <Post post={item} />}
      />
    </View>
  );
};
export default PaginaPesquisa;
