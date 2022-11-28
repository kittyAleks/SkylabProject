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
      <Text>Home Screen</Text>
      <Button
        title={"LogOut"}
        onPress={LogOut}
        buttonStyle={styles.button}
        titleStyle={styles.titleSignIn}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',

  },
  button: {
    marginLeft: 5,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "rgba(57,57,187,0.6)",
  },
  titleSignIn: {
    color: "white",
  },
});
