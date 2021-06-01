import React from "react";
import { View, Text } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PesquisaDestinoTela   from "../screens/pesquisadestino";
import HomeScreen from "../screens/home";
import GuestTela from "../screens/guest";
import HomeTabNavigator from "./HomeTabNavigator";
import PaginaPesquisa from "../screens/pesquisa";

const Stack = createStackNavigator();

const Router = (props) => {
  return (

    <NavigationContainer>
      <Stack.Navigator>

          <Stack.Screen
            name={"Home"}
            component={HomeTabNavigator}
            options={{
              headerShown: false
            }}
            />}
          <Stack.Screen
            name="PesquisaDestinoTela"
            component={PesquisaDestinoTela}
            options={{
              title: 'Para onde deseja ir?'
            }}
          />
          <Stack.Screen
              name={"Guests"}
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
