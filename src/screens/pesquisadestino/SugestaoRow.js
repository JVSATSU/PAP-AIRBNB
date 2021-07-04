import React from "react";
import {View, Text} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import styles from "./styles";

const SugestaoRow = ({item}) =>(
   <View>
        <Pressable style={styles.row}>
            <View style={styles.iconContainer}>
                <Entypo name={"location-pin"} size={30}/>
            </View>
            <Text style={styles.destinotext}> {item.description}</Text>
        </Pressable>
   </View>
);


export default SugestaoRow;