import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StartScreen } from "../screens/StartScreen";
import { SignInScreen } from "../screens/SignInScreen";

const defaultOptions = {
  headerStyle: {
    backgroundColor: "#754aaf",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};
const Stack = createNativeStackNavigator();
export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Start"
        component={StartScreen}
        options={{
          headerShown: false,
          headerTitle: "",
          ...defaultOptions,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          headerTitle: "",
          ...defaultOptions,
        }}
      />

    </Stack.Navigator>
  );
};
