import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");

  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get(
        "https://api.api-ninjas.com/v1/quotes?category=happiness",
        {
          headers: {
            "X-Api-Key": "F90ofpD3WeDbOrnRxDpuMw==NRVptexIcJ4nScIA",
          },
        }
      );
      if (!response) {
        throw new error("Network not responding");
      }
      const data = response.data[0];
      setQuote(`${data.quote} — ${data.author}`);
    } catch (error) {
      console.error("Failed to fetch quote: ", error.message);
      alert(
        "Failed to fetch quote. Please check your internet connection or API key."
      );
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.quoteText}>{quote}</Text>
      <Button title="New Quote" onPress={fetchRandomQuote} />
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
  quoteText: {
    fontSize: 18,
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
});

export default QuoteGenerator;
