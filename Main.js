import React, { useEffect, useLayoutEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "./src/navigation/RootStack";
import { AuthStack } from "./src/navigation/AuthStack";
import { getStatusValid } from "./src/config/storage";

export const Main = () => {
  const [status, setStatus] = useState(false);
  console.log("QQQQstatusstatus", status);

  useEffect(() => {
    getStatusForm();
  }, [status]);
  const getStatusForm = async () => {
    const statusForm = await getStatusValid();
    const { emailStatus, passwordStatus } = statusForm;
    console.log("QQQQstatusForm", statusForm);
    if (emailStatus === true) {
      setStatus(emailStatus);
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
