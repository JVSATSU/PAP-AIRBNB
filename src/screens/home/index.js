import React from 'react';
import {Text, View, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import PesquisaDestinoTela from "../pesquisadestino";
const HomeScreen = props => {
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        <Pressable
          style={styles.searchbutton}
          onPress={() => navigation.navigate("PesquisaDestinoTela")}>
          <Fontisto name="search" size={25} color="#f15454" />
          <Text style={styles.searchbuttontext}>Para onde voce está indo?</Text>
        </Pressable>
        <Text style={styles.title}>Vá Perto</Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Guests")}>
          <Text style={styles.buttontext}>Explore as redondezas</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
