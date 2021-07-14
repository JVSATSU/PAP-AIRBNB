import React from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import styles from './styles';
const PostCarrossel = props => {
  const post = props.post;
  const width = useWindowDimensions().width;
  return (
    <View style={[styles.container, {width: width - 60}]}>
      <View style={styles.innerContainer}>
        {/*Imagem*/}
        <Image style={styles.image} source={{uri: post.image}} />
        <View style={{marginHorizontal: 10, flex: 1}}>
          {/*Cama e Quartos*/}
          <Text style={styles.quartos}>
            {post.cama} cama {post.quartos} quarto
          </Text>
          {/*Tipo e Descrição*/}
          <Text style={styles.descricao} numberOfLines={2}>
            {post.tipo}. {post.title}
          </Text>
          {/*Preço antigo e Preço Novo*/}
          <Text style={styles.preco}>
            <Text style={styles.npreco}>€{post.novpreco} </Text>/ noite
          </Text>


        </View>
      </View>
    </View>
  );
};
export default PostCarrossel;
