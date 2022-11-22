import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const setStatusValid = async (stats) => {
  console.log('WWWstats', stats)
  await AsyncStorage.setItem("stats", JSON.stringify(stats));
};

export const getStatusValid = async () => {
  let statusValidForm =  await AsyncStorage.getItem("stats");
  return JSON.parse(statusValidForm)
};
