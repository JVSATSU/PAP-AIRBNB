import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import styles from './styles';

const PesquisaDestinoTela = (props) => {

  const [inputText,setInputText] = useState();

  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="Para onde voce vai?"
      />
    </View>
  );
};
export default PesquisaDestinoTela;
