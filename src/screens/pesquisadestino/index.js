import React, { useState } from "react";
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
import styles from './styles';
import procuraResultados from '../../../assets/data/procura';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SugestaoRow from "./SugestaoRow";


const PesquisaDestinoTela = (props) => {

  
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={{height: 500}}>
      <GooglePlacesAutocomplete
        placeholder='Para onde voce deseja ir?'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests');
        }}
        fetchDetails
        style={{
          textInput: styles.textInput,
        }}

        query={{
          key: 'AIzaSyA11IyUmn7cWkXpnc4y63J6rN2e_sjd2pI',
          language: 'pt',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={(item) => <SugestaoRow item={item}/>}
        
      />
      </View>
    </View>
  );
};
export default PesquisaDestinoTela;
