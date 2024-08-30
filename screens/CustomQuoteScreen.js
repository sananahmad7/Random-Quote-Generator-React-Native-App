import React, { useState } from "react";
import CustomQuote from "../components/CustomQuote";
import { StyleSheet, View, FlatList, Text, Image } from "react-native";

const CustomQuoteScreen = () => {
  const [customQuotes, setCustomQuotes] = useState([]);

  const addCustomQuote = (quote) => {
    // Add the new quote to the existing list of custom quotes
    setCustomQuotes([...customQuotes, quote]);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.i1}
        source={require("../assets/mountain.png")} // Ensure the path and filename are correct
      />
      <CustomQuote onAddQuote={addCustomQuote} />
      <FlatList
        data={customQuotes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.quoteContainer}>
            <Text style={styles.quoteText}>{item}</Text>
          </View>
        )}
        ListHeaderComponent={
          <Text style={styles.headerText}>Your Custom Quotes:</Text>
        }
      />
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
  quoteContainer: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    width: "100%",
  },
  quoteText: {
    fontSize: 16,
    textAlign: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
});

export default CustomQuoteScreen;
