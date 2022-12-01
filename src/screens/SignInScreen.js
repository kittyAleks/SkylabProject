import React, { useState } from "react";
import { TextInput, StyleSheet, ScrollView, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { setStatusValid } from "../config/storage";

export const SignInScreen = () => {
  const [data, setData] = useState({
    email: null,
    password: null,
    isValidEmail: true,
    isValidPassword: true,
  });

  const onChangeEmail = (val) => {
    if (val.trim().length >= 4) {
      setData((prevState) => ({
        ...prevState,
        email: val,
        isValidEmail: true,
      }));
    } else {
      setData((prevState) => ({
        ...prevState,
        email: val,
        isValidEmail: false,
      }));
    }
  };

  const onChangePassword = (val) => {
    if (val.trim().length >= 4) {
      setData((prevState) => ({
        ...prevState,
        password: val,
        isValidPassword: true,
      }));
    } else {
      setData((prevState) => ({
        ...prevState,
        password: val,
        isValidPassword: false,
      }));
    }
  };

  const handleSignIn = (data) => {
    // const { isValidEmail, isValidPassword } = data;
    setStatusValid({
      emailStatus: data.isValidEmail,
      passwordStatus: data.isValidPassword,
    });
  };

  return (
    <ScrollView style={styles.mainTextStyle}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={data.email}
        // placeholder={'email'}
        // keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={data.password}
        // placeholder={'password'}
        // keyboardType="numeric"
      />
      {/*{!data.isValidPassword ?*/}
      {/*  <Text style={{ color: "red", marginLeft: 10 }}>{errorMessagePass}</Text> :*/}
      {/*  <Text style={{ color: "green", marginLeft: 10 }}>{errorMessagePass}</Text>*/}
      {/*}*/}

      <Button
        title={"SignIn"}
        onPress={() => handleSignIn(data)}
        buttonStyle={{ ...styles.button, ...styles.buttonSignIn }}
        titleStyle={styles.titleSignIn}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainTextStyle: {
    backgroundColor: "#efe8e8",
    flexDirection: "column",
    paddingHorizontal: 30,
    textAlign: "center",
    paddingVertical: 150,
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(117,117,117,0.56)",
    padding: 10,
  },

  button: {
    marginTop: 70,
    marginLeft: 5,
    height: 50,
    borderRadius: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#fff",
  },
  buttonSignIn: {
    backgroundColor: "rgba(57,57,187,0.6)",
  },
  titleSignIn: {
    color: "white",
  },
});


