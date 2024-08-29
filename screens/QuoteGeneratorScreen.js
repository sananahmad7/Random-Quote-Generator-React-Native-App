import React from "react";
import QuoteGenerator from "../components/QuoteGenerator";
import { StyleSheet, View } from "react-native";

const QuoteGeneratorScreen = () => {
  return (
    <View style={styles.container}>
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
});

export default QuoteGeneratorScreen;
