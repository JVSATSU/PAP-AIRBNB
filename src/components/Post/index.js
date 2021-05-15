import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
const Post = (props) => {
  return (
    <View style={styles.container}>

        {/*Titulo*/}
        <Image style={styles.image} source={{uri: 'https://www.ocasaldafoto.com/wp-content/uploads/2018/09/Foto-de-Paisagem-Lago-da-Pampulha-Belo-Horizonte-Charles-Torres.jpg'}}/>
        {/*Cama e Quartos*/}
          <Text  style={styles.quartos}>1 cama 1 quarto</Text>
        {/*Tipo e Descrição*/}
          <Text style={styles.descricao}>
            Flat Completo. Puerto de la cruz blablablalablablalbalblalb
          </Text>
        {/*Preço antigo e Preço Novo*/}
          <Text style={styles.preco}>
            <Text style={styles.apreco}>€36</Text>
            <Text style={styles.npreco}>€29</Text>
            /texto
          </Text>
        {/*Preço Total*/}
          <Text style={styles.precot}>€230 Total</Text>
    </View>
  );
};
export default Post;
