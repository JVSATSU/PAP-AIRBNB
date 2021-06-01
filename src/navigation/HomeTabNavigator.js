import React from "react";
import {View, Text} from "react-native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import 



const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
    return (
        <Tab.Navigator>
          <Tab.Screen
            name={"Explore"}
            component={HomeScreen}
            options={{
              tabBarIcon: ({color:}) => (

              )
            }}
          />
        </Tab.Navigator>
    );
};

export default HomeTabNavigator;
