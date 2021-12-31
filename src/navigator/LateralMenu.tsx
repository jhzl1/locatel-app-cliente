import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen";
import TransactionsScreen from "../screens/TransactionsScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import AboutScreen from "../screens/AboutScreen";
import CardManagement from "../screens/CardManagement";

const Drawer = createDrawerNavigator();

const LateralMenu = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "white",
        },
        headerTintColor: "#01962D",
      }}
    >
      <Drawer.Screen name="Inicio" component={HomeScreen} />
      <Drawer.Screen
        name="MyAccount"
        options={{
          title: "Mi cuenta",
        }}
        component={MyAccountScreen}
      />
      <Drawer.Screen
        name="CardManagement"
        options={{
          title: "Gestión de tarjeta",
        }}
        component={CardManagement}
      />
      <Drawer.Screen
        name="CustomerService"
        options={{
          title: "Servicio al cliente",
        }}
        component={TransactionsScreen}
      />
      <Drawer.Screen
        name="About"
        options={{
          title: "Acerca de ",
        }}
        component={AboutScreen}
      />
    </Drawer.Navigator>
  );
};

export default LateralMenu;
