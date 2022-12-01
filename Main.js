import React, { useEffect, useLayoutEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "./src/navigation/RootStack";
import { AuthStack } from "./src/navigation/AuthStack";
import { getStatusValid } from "./src/config/storage";
import { getPushData, notificationListener, requestUserPermission } from "./src/config/notification";

export const Main = () => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, [status]);

  useEffect(() => {
    getStatusForm();
  }, );
  const getStatusForm = async () => {
    const statusForm = await getStatusValid();
    if (statusForm.emailStatus === true) {
      setStatus(statusForm.emailStatus);
    }
    getPushData()
  };

  return (
    <NavigationContainer>
      {status === true ?
        <RootStack /> :
        <AuthStack />
      }
    </NavigationContainer>
  );
};
