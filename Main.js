import React, { useEffect, useLayoutEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "./src/navigation/RootStack";
import { AuthStack } from "./src/navigation/AuthStack";
import { getStatusValid } from "./src/config/storage";
import { notificationListener, requestUserPermission } from "./src/config/notification";

export const Main = () => {
  const [status, setStatus] = useState(false);
  console.log("QQQQstatusstatus", status);

  useEffect(() => {
    requestUserPermission();
    notificationListener();
    // createChannel();
  }, []);

  useEffect(() => {
    getStatusForm();
  }, [status]);
  const getStatusForm = async () => {
    const statusForm = await getStatusValid();
    console.log("QQQQstatusForm", statusForm);
    if (statusForm.emailStatus) {
      setStatus(statusForm.emailStatus);
    }
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
