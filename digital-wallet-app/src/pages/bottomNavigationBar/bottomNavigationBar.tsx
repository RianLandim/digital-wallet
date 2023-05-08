import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

// Screens
import { Home } from "../home";

// Icons
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';




const { Navigator, Screen } = createBottomTabNavigator();

export function BottomNavigationBar() {
  return (
    <Navigator
    screenOptions={{ headerShown: false}}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          headerShadowVisible: false,
          headerShown: false,
          tabBarLabelStyle: {
            color: "#fff",
            fontSize: 1,
          },
          tabBarIcon: ({ size, focused }) => {
            if (focused) {
              return (
                <Entypo name="home" size={size} color="#5AE468" />
              );
            }
            return <Entypo name="home" size={size} color="#000" />
          },
        }}
      />
      <Screen
        name="money"
        component={Home}
        options={{
          headerShadowVisible: false,
          headerShown: false,
          tabBarLabelStyle: {
            color: "#fff",
            fontSize: 1,
          },
          tabBarIcon: ({ size, focused }) => {
            if (focused) {
              return <MaterialIcons name="attach-money" size={size} color="#5AE468" />
            }
            return <MaterialIcons name="attach-money" size={size} color="#000" />;
          },
        }}
      />
      <Screen
        name="relatorios"
        component={Home}
        options={{
          headerShadowVisible: false,
          headerShown: false,
          tabBarLabelStyle: {
            color: "#fff",
            fontSize: 1,
          },
          tabBarIcon: ({ size, focused }) => {
            if (focused) {
              return (
                <MaterialIcons
                  name="assignment"
                  size={size}
                  color="#5AE468"
                />
              );
            }
            return (
              <MaterialIcons
                name="assignment"
                size={size}
                color="#000"
              />
            );
          },
        }}
      />
      <Screen
        name="settings"
        component={Home}
        options={{
          headerShadowVisible: false,
          headerShown: false,
          tabBarLabelStyle: {
            color: "#fff",
            fontSize: 1,
          },
          tabBarIcon: ({ size, focused }) => {
            if (focused) {
              return <Ionicons name="settings-sharp" size={size} color="#5AE468" />;
            }
            return <Ionicons name="settings-sharp" size={size} color="#000" />;
          },
        }}
      />
    </Navigator>
  );
}