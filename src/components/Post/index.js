import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";



const Post = (props) => {
  const navigation = useNavigation();

  const post = props.post;

  const irParaPostScreen = () => {
    navigation.navigate('Posts',{postId: post.id })
  }

  return (
    <Pressable onPress={irParaPostScreen} style={styles.container}>

        {/*Titulo*/}
        <Image style={styles.image} source={{uri: post.image}}/>
        {/*Cama e Quartos*/}
          <Text  style={styles.quartos}>{post.cama} cama {post.quartos} quarto</Text>
        {/*Tipo e Descrição*/}
          <Text style={styles.descricao}>
            {post.tipo}. {post.title}
          </Text>
        {/*Preço antigo e Preço Novo*/}
          <Text style={styles.preco}>
            <Text style={styles.apreco}>€{post.antpreco} </Text>
            <Text style={styles.npreco}>€{post.novpreco} </Text>
            / noite
          </Text>
        {/*Preço Total*/}
          <Text style={styles.precot}>€{post.precottl} Total</Text>
    </Pressable>
  );
};
export default Post;
