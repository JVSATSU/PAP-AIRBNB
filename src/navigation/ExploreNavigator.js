import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import PaginaPesquisa from '../screens/pesquisa';
import ResultadoPesquisaTabNavigator from '../navigation/ResultadoPesquisaTabNavigator';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'BemVindo'}
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            
            <Stack.Screen
                name={'ResultadoPagina'}
                component={ResultadoPesquisaTabNavigator}
                options={{
                    title: 'Pesquise seu Destino',
                }}
            />
        </Stack.Navigator>
    );
};

export default Router;