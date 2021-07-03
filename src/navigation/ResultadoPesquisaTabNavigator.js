import React from "react";
import { View, Text } from "react-native";
import { createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import PaginaPesquisa from "../screens/pesquisa";
const Tab = createMaterialTopTabNavigator();

const ResultadoPesquisaTabNavigator = () => {
    return (
        <Tab.Navigator>
          <Tab.Screen name={"lista"} component={PaginaPesquisa}/>
          <Tab.Screen name={"mapa"} component={PaginaPesquisa}/>
        </Tab.Navigator>
    );
};

export default ResultadoPesquisaTabNavigator;
