import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { removeUserStatus } from "../config/storage";

export const HomeScreen = ({navigation}) => {

  const LogOut = () => {
    navigation.navigate('Start')
    // removeUserStatus()
  };

  return (
    <View style={styles.container}>
      <Text>Hello world!!!</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
