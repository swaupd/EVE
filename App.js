const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import IPhone81 from "./screens/IPhone81";
import Home2 from "./screens/Home2";
import Homepage1 from "./screens/Homepage1";
import Confirmation from "./screens/Confirmation";
import SignIn from "./screens/SignIn";
import Frame from "./components/Frame";
import Homepage from "./screens/Homepage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Lalezar-Regular": require("./assets/fonts/Lalezar-Regular.ttf"),
    "Dosis-Regular": require("./assets/fonts/Dosis-Regular.ttf"),
    "Dosis-Medium": require("./assets/fonts/Dosis-Medium.ttf"),
    "Dosis-Bold": require("./assets/fonts/Dosis-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IPhone81"
              component={IPhone81}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home2"
              component={Home2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Homepage1"
              component={Homepage1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Confirmation"
              component={Confirmation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Homepage"
              component={Homepage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
