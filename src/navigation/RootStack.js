import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from "../screens/HomeScreen";

const defaultOptions = {
  headerStyle: {
    backgroundColor: "#754aaf",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    elevation: 5,
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator>
      {/*<Stack.Screen*/}
      {/*  name="SignIn"*/}
      {/*  component={SignInScreen}*/}
      {/*  options={{*/}
      {/*    headerTitle: "",*/}
      {/*    ...defaultOptions,*/}
      {/*  }}*/}
      {/*/>*/}

      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          headerTitle: "",
          ...defaultOptions,
        }}
      />
    </Stack.Navigator>
  );
};
