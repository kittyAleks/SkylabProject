import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import { Button } from "react-native-elements";

export const StartScreen = ({ navigation }) => {
  useEffect(() => {
    // getNickname();
  }, []);

  // const getNickname = () => {
  //   AsyncStorage.getItem("@save_nickname")
  //     .then(nick => {
  //       if (nick !== null) {
  //         navigation.navigate("Home");
  //       }
  //     }).catch(e => e.message);
  // };

  return (
    <View style={styles.containerStyle}>
        <Button
          title={'Start'}
          onPress={() => navigation.navigate("SignIn")}
          buttonStyle={{ ...styles.button, ...styles.buttonStart }}
          titleStyle={styles.titleStart}
        />
    </View>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: "#efe8e8",
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  button: {
    marginLeft: 5,
    height: 50,
    borderRadius: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#fff",
  },
  buttonStart: {
    backgroundColor: "rgba(57,57,187,0.6)",
  },
  titleStart: {
    color: "white",
  },
});
