import React from "react";
import { createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import PaginaPesquisa from "../screens/pesquisa";
import PesquisaMapa from "../screens/pesquisamapa/pesquisamapa";
const Tab = createMaterialTopTabNavigator();

const ResultadoPesquisaTabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={{
          activeTintColor: '#f15454',
          indicatorStyle: {
            backgroundColor: '#f15454',
          }
        }}>
          <Tab.Screen name={"lista"} component={PaginaPesquisa}/>
          <Tab.Screen name={"mapa"} component={PesquisaMapa}/>
        </Tab.Navigator>
    );
};

export default ResultadoPesquisaTabNavigator;
