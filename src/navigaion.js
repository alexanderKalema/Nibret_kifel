import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/login";
//import { Provider as ReduxProvider } from "react-redux";

//const store = configureStore();

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
   headerShown: false,
  }; 

  return (
    // <ReduxProvider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
      screenOptions={screenOptions}>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
    // </ReduxProvider>
  );
}
