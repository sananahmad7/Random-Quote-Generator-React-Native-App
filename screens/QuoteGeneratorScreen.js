import React from "react";
import QuoteGenerator from "../components/QuoteGenerator";
import { StyleSheet, View, Image } from "react-native";

const QuoteGeneratorScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.i1}
        source={require("../assets/mountain.png")} // Ensure the path and filename are correct
      />
      <QuoteGenerator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  i1: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: "cover", // Use cover to fill the background
  },
});

export default QuoteGeneratorScreen;
