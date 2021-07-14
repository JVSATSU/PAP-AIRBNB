import React from 'react';
import {View, Text} from 'react-native';
import Post from '../../components/DetalhePost';
import {useRoute} from '@react-navigation/native';

import lugares from '../../../assets/data/feed';
const post = lugares[0];
const PostScreen = props => {
  const route = useRoute();

  const post = lugares.find(place => place.id === route.params.postId);

  return (
    <View>
      <Post post={post} />
    </View>
  );
};

export default PostScreen;
