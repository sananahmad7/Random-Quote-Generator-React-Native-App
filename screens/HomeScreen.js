import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import QuoteOfTheDay from "../components/QuoteOfTheDay";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.i1}
        source={require("../assets/mountain.png")} // Ensure the path and filename are correct
      />
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
  i1: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: "cover", // Use cover to fill the background
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#fff", // Change text color for visibility against the background
  },
  buttonContainer: {
    marginTop: 40,
    width: "100%",
    padding: 10,
  },
  buttonSpacer: {
    height: 20,
  },
});

export default HomeScreen;
