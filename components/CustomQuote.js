import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

const CustomQuote = ({ onAddQuote }) => {
  const [customQuote, setCustomQuote] = useState("");
  const [author, setAuthor] = useState("");

  const handleAddQuote = () => {
    if (customQuote && author) {
      onAddQuote(`${customQuote} — ${author}`);
      setCustomQuote("");
      setAuthor("");
    } else {
      Alert.alert("Error", "Please enter both a quote and an author.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your quote"
        value={customQuote}
        onChangeText={setCustomQuote}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter author name"
        value={author}
        onChangeText={setAuthor}
        style={styles.input}
      />
      <Button title="Add Quote" onPress={handleAddQuote} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default CustomQuote;
