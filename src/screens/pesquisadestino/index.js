import React, { useState } from "react";
import { View, TextInput, Text, FlatList } from "react-native";
import styles from './styles';
import procuraResultados from '../../../assets/data/procura';
import Entypo from 'react-native-vector-icons/Entypo';

const PesquisaDestinoTela = (props) => {

  const [inputText,setInputText] = useState();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Para onde voce vai?"
        value={inputText}
        onChangeText={setInputText}
      />


        <FlatList 
        data={procuraResultados}
        renderItem= {({item})=> (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={"location-pin"} size={35} />
            </View>
          <Text style={styles.destinotext}>{item.descricao}</Text>
        </View>
        )} 
      />
    </View>
  );
};
export default PesquisaDestinoTela;
