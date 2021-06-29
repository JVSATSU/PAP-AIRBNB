import React from "react";
import {View, Text} from "react-native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import GuestTela from "../screens/guest";
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import {NavigationContainer} from "@react-navigation/native";


const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
    return (
        
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#f15454',
                }} >
              <Tab.Screen
                name={"Explore"}
                component={HomeScreen}
                options={{
                  tabBarIcon:({color}) => (
                      <Fontisto name="search" size={25} color={color} />
                  ),
                }}
              />
                <Tab.Screen
                    name={"Salvo"}
                    component={HomeScreen}
                    options={{
                        tabBarIcon:({color}) => (
                            <FontAwesome name="heart-o" size={25} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name={"Airbnb"}
                    component={HomeScreen}
                    options={{
                        tabBarIcon:({color}) => (
                            <FontAwesome5 name="airbnb" size={25} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name={"Mensagens"}
                    component={HomeScreen}
                    options={{
                        tabBarIcon:({color}) => (
                            <Feather name="message-square" size={25} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name={"Perfil"}
                    component={HomeScreen}
                    options={{
                        tabBarIcon:({color}) => (
                            <EvilIcons name="user" size={25} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
        
    );
};

export default HomeTabNavigator;
