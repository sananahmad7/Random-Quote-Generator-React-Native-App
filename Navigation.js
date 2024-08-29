import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import QuoteGeneratorScreen from "./screens/QuoteGeneratorScreen";
import CustomQuoteScreen from "./screens/CustomQuoteScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Quote Generator" component={QuoteGeneratorScreen} />
        <Stack.Screen name="Custom Quote" component={CustomQuoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
