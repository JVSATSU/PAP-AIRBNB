import React from "react";
import { View, Text } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PesquisaDestinoTela   from "../screens/pesquisadestino";
import HomeScreen from "../screens/home";
import GuestTela from "../screens/guest";

const Stack = createStackNavigator();

const Router = (props) => {
  return (

    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
            name={"Pesquisa Destino"}
            component={PesquisaDestinoTela}
            options={{
              title: 'Procure seu Destino'
            }}
            />
          <Stack.Screen
            name={"Pagina de Pesquisa"}
            component={GuestTela}
            options={{
              title: 'Quantos são?'
            }}
          />
      </Stack.Navigator>
    </NavigationContainer>

  );
};
export default Router;
