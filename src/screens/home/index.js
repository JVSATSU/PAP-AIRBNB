import React from "react";
import { Text, View, ImageBackground, Pressable } from "react-native";
import styles from "./styles";
import Fontisto from "react-native-vector-icons/Fontisto";
const HomeScreen =(props) => {
  return(
    <View>
      <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} style={styles.image}>

        <Pressable style={styles.searchbutton} onPress={console.warn('Btn Procura acionado')}>
          <Fontisto name="search" size={25} color="#f15454"/>
          <Text style={styles.searchbuttontext}>Para onde voce está indo?</Text>
        </Pressable>
           <Text style={styles.title} >Vá Perto</Text>
        <Pressable style={styles.button} onPress={console.warn('Btn Explore acionado')}>
           <Text style={styles.buttontext}>Explore as redondezas</Text>
        </Pressable>

      </ImageBackground>

    </View>
  );
};

export default HomeScreen;
