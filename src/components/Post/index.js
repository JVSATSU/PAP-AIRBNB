import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
const Post = (props) => {
  return (
    <View>
      <Text style={styles.container}>
        {/*Titulo*/}
        <Image style={style.image} source={{uri: ''}}/>
        {/*Cama e Quartos*/}
        {/*Tipo e Descrição*/}
        {/*Preço antigo e Preço Novo*/}
        {/*Preço Total*/}
      </Text>
    </View>
  );
};
export default Post;
