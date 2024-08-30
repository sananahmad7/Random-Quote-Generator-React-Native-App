import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";

const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await axios.get(
        "https://api.api-ninjas.com/v1/quotes?category=fear",
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
      console.error(error.message);
      setQuote("Fuck Not working");
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.QOTD}>Quote of the Day</Text>
      <Text style={styles.quoteText}>{quote}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    width: "100%",
  },
  QOTD: {
    fontSize: 22,
    fontStyle: "italic",
    textAlign: "center",
    fontWeight: "bold",
  },
  quoteText: {
    fontSize: 18,
    fontStyle: "italic",
    textAlign: "center",
  },
});

export default QuoteOfTheDay;
