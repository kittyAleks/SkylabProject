import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const setStatusValid = async (stats) => {
  console.log("WWWstats", stats);
  await AsyncStorage.setItem("stats", JSON.stringify(stats));
};

export const getStatusValid = async () => {
  let statusValidForm = await AsyncStorage.getItem("stats");
  return JSON.parse(statusValidForm);
};

export const removeUserStatus = async () => {
  await AsyncStorage.removeItem("stats");
};

export const save_notific_token = async (token) => {
  await AsyncStorage.setItem("notification_token", JSON.stringify(token));
};
export const get_notific_token = async () => {
  const notific_token = await AsyncStorage.getItem("notification_token");
  return JSON.parse(notific_token);
};
