import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Ionicons, MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Screens/Home/Index';
import NewTransaction from '../Screens/NewTransaction';
import Transaction from '../Screens/Transaction';
import ConfigScreen from '../Screens/Config';
import EditBalance from '../Screens/EditBalance';
import Category from '../Screens/Category';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (

    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: false,
        headerTitleAlign: 'center',
        headerShown: false,
        tabBarStyle: {
          paddingTop: 10,
        },
        tabBarActiveTintColor: "#43B38E",
        
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome name='home' color={focused ? "#43B38E" : "black"} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Despesas"
        component={Transaction}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcons name="receipt-long" size={26} color={focused ? "#43B38E" : "black"} />
          ),
        }}
      />
      <Tab.Screen
        name="Nova Despesa"
        component={NewTransaction}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome name='plus' color={focused ? "#43B38E" : "black"} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Configuração"
        component={ConfigScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome name='gear' color={focused ? "#43B38E" : "black"} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Editar Saldo"
        component={EditBalance}
        options={{
          tabBarButton: () => null,
          tabBarItemStyle: { display: 'none' },
        }}
      />
      <Tab.Screen
        name="Categorias"
        component={Category}
        options={{
          tabBarButton: () => null,
          tabBarItemStyle: { display: 'none' },
        }}
      />
     
    </Tab.Navigator>


  );
}