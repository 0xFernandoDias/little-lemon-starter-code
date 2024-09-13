import * as React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";

// Import the logo image
import logo from "../assets/little-lemon-logo.png";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Display the logo image */}
      <Image source={logo} style={styles.logo} />

      {/* Display the welcome text */}
      <Text style={styles.welcomeText}>Welcome to Little Lemon!</Text>

      {/* Pressable button to navigate to Subscribe screen */}
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Subscribe")}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

// Define the styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 150,
    height: 264,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default WelcomeScreen;
