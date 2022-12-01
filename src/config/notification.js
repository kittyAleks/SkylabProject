import PushNotification from "react-native-push-notification";
import messaging from "@react-native-firebase/messaging";
import { get_notific_token, save_notific_token } from "./storage";

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log("Authorization_status:", authStatus);
    getTokenNotification();
  }
};

// get device token and save asyncstorage
const getTokenNotification = async () => {
  const token_notification = await get_notific_token();

  if (!token_notification) {
    const token = await messaging().getToken();
    // .then()
    save_notific_token(token);
  }
};

//------------------------------

PushNotification.configure({
  onRegister: (token => {
    console.log(`TOKEN ${token}`);
  }),
  onNotification: (notification => {
    console.log(`Local_notification ${notification}`);
  }),
  requestPermissions: true,
  popInitialNotification: true,
});

// PushNotification.createChannel({
//     channelName: "channel name",
//     channelId: "channel-id",
//     bigText: "Welcome",
//     importance: 5,
//     playSound: true,
//     soundName: "default",
//     vibrate: true,
//     vibration: 1000,
//   }, (created => {
//     console.log(`channel created ${created}`);
//   }),
// );

// const getPushData = (message) => {
//   console.log("WWWgetPushData", message);
//   PushNotification.localNotification({
//     channelId: message.messageId,
//     message: message.notification.body,
//     title: 'Welcome',
//   });
// };
export const getPushData = () => {
  messaging().onMessage((message => {
    PushNotification.localNotification({
      channelId: message.messageId,
      message: message.notification.body,
      // title: 'Welcome',
    });
  }))
};
const getBackgroundPushData = (background_message) => {
  PushNotification.localNotification({
    channelId: background_message.messageId,
    message: background_message.notification.body,
    title: background_message.notification.title,
  });
};
//---------------------------
export const notificationListener = () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      "Notification caused app to open from background state:",
      remoteMessage.notification,
    );
  });
  // messaging().setBackgroundMessageHandler(getBackgroundPushData);
  // messaging().onMessage(getPushData);

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          "Notification caused app to open from quit state:",
          remoteMessage.notification,
        );
      }
    });
};
