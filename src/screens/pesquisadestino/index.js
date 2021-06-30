import React, { useState } from "react";
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
import styles from './styles';
import procuraResultados from '../../../assets/data/procura';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const PesquisaDestinoTela = (props) => {

  const [inputText,setInputText] = useState();
  const navigation = useNavigation();

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
            <Pressable onPress={() => navigation.navigate('Guests')} style={styles.row}>
             <View style={styles.iconContainer}>
               <Entypo name={"location-pin"} size={35} />
            </View>
          <Text style={styles.destinotext}>{item.descricao}</Text>
        </Pressable>
        )} 
      />
    </View>
  );
};
export default PesquisaDestinoTela;
