import React, {useState} from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const GuestTela = (props) => {

  const [adultos, setadultos] = useState(0);
  const [criancas, setCriancas] = useState(0);
  const [bebes, setBebes] = useState(0);

  const navigation = useNavigation(); 

  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
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
        {/*Row 2: Crianças*/}
        <View style={styles.row}>
          {/*Titulos*/}
          <View>
            <Text style={{fontWeight: 'bold'}}>Crianças</Text>
            <Text style={{color:'#8d8d8d'}}>12 a 5 anos</Text>
          </View>
          {/*Botões com valor*/}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* - */}
            <Pressable
              onPress={() => setCriancas(Math.max(0,criancas - 1))}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#5d5d5d'}}> - </Text>
            </Pressable>

            {/*Valor*/}
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{criancas}</Text>

            {/* + */}
            <Pressable
              onPress={() => setCriancas(criancas + 1)}
              style={styles.button}>
              <Text  style={{fontSize: 20, color: '#5d5d5d'}}> + </Text>
            </Pressable>
          </View>
        </View>
        {/*Row 2: Bebes*/}
        <View style={styles.row}>
        {/*Titulos*/}
        <View>
          <Text style={{fontWeight: 'bold'}}>Bêbes</Text>
          <Text style={{color:'#8d8d8d'}}>5 anos ou menos</Text>
        </View>
        {/*Botões com valor*/}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* - */}
          <Pressable
            onPress={() => setBebes(Math.max(0,bebes - 1))}
            style={styles.button}>
            <Text style={{fontSize: 20, color: '#5d5d5d'}}> - </Text>
          </Pressable>

          {/*Valor*/}
          <Text style={{marginHorizontal: 20, fontSize: 16}}>{bebes}</Text>

          {/* + */}
          <Pressable
            onPress={() => setBebes(bebes + 1)}
            style={styles.button}>
            <Text  style={{fontSize: 20, color: '#5d5d5d'}}> + </Text>
          </Pressable>
        </View>
      </View>
      </View>

      <View>
        <Pressable 
          onPress={() => navigation.navigate('Home',{
            screen: 'Explore',
            params: {
              screen: 'ResultadoPagina',
            }
          })}
          style={{
          marginBottom: 20,
          backgroundColor: '#f15454',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          marginHorizontal: 20,
          borderRadius: 10,
          }}>
          <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>Pesquisar</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default GuestTela;
