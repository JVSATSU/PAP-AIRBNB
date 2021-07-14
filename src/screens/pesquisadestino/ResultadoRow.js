import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import Entypo from 'react-native-vector-icons/Entypo';




const ResultadoRow = ({item}) => (

    

    <Pressable  style={styles.row}>
     <View style={styles.iconContainer}>
       <Entypo name={"location-pin"} size={35} />
    </View>
  <Text style={styles.destinotext}>  {item.description}</Text>
</Pressable>
)

export default ResultadoRow;