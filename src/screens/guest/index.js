import React, {useState} from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const GuestTela = (props) => {

  const [adultos, setadultos] = useState(0); 

  return (
    <View>
      {/*Row 1: Adultos*/}
      <View style={styles.row}>
        {/*Titulos*/}
        <View>
          <Text style={{fontWeight: 'bold'}}>Adultos</Text>
          <Text style={{color:'#8d8d8d'}}>13 anos ou mais</Text>
        </View>
        {/*Botões com valor*/}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* - */}
          <Pressable
            onPress={() => setadultos(Math.max(0,adultos - 1))}
           style={styles.button}>
            <Text style={{fontSize: 20, color: '#5d5d5d'}}> - </Text>
            </Pressable>

          {/*Valor*/}
          <Text style={{marginHorizontal: 20, fontSize: 16}}>{adultos}</Text>
          
          {/* + */}
          <Pressable
            onPress={() => setadultos(adultos + 1)}
           style={styles.button}>
            <Text  style={{fontSize: 20, color: '#5d5d5d'}}> + </Text>
            </Pressable>
        </View>
      </View>

    </View>
  );
};
export default GuestTela;
