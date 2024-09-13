import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  Image,
  StyleSheet,
} from "react-native";

// Import the logo image
import logoGrey from "../assets/little-lemon-logo-grey.png";

// Import the validateEmail function
import { validateEmail } from "../utils";

const SubscribeScreen = () => {
  // State to store the email input
  const [email, setEmail] = useState("");

  // Function to handle the subscription action
  const handleSubscribe = () => {
    if (validateEmail(email)) {
      Alert.alert(
        "Subscription Confirmed",
        `You have been subscribed with the email: ${email}`,
        [{ text: "OK" }]
      );
      setEmail(""); // Clear the email input after subscription
    } else {
      Alert.alert("Invalid Email", "Please enter a valid email address.", [
        { text: "OK" },
      ]);
    }
  };

  // Check if the email is valid
  const isEmailValid = validateEmail(email);

  return (
    <View style={styles.container}>
      {/* Display the grey logo image */}
      <Image source={logoGrey} style={styles.logo} />

      {/* Text Input for email address */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Pressable button to handle subscription */}
      <Pressable
        style={[
          styles.button,
          { backgroundColor: isEmailValid ? "#007BFF" : "#CCCCCC" },
        ]}
        onPress={isEmailValid ? handleSubscribe : null}
        disabled={!isEmailValid}
      >
        <Text style={styles.buttonText}>Subscribe</Text>
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
    padding: 20,
  },
  logo: {
    width: 150,
    height: 264,
    marginBottom: 30,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default SubscribeScreen;
