import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import QuoteOfTheDay from "../components/QuoteOfTheDay";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Random Quote App</Text>
      <QuoteOfTheDay />
      <View style={styles.buttonContainer}>
        <Button
          title="Generate Random Quote"
          onPress={() => navigation.navigate("Quote Generator")}
        />
        <View style={styles.buttonSpacer} />
        <Button
          title="Add Custom Quote"
          onPress={() => navigation.navigate("Custom Quote")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  buttonContainer: {
    marginTop: 40,
    width: "100%",
    padding: 10,
  },
  buttonSpacer: {
    height: 20, // Adjust the height as needed for spacing
  },
});

export default HomeScreen;
