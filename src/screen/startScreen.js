import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import CustomHeader from "../components/CustomHeader/CustomHeader";
import CustomTitle from "../components/CustomTitle/CustomTitle";

const StartScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader />
      {/* # body */}
      <View style={styles.body}>
        <View>
          <CustomTitle type="primary"/>
          <TouchableOpacity onPress={() => navigation.navigate("signupScreen")}>
            <Text style={styles.button}>Create account </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.act}>
        Have an account already? <Text style={styles.login}>Log in</Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  body: {
    justifyContent: "space-between",
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: -50,
  },
  button: {
    fontSize: 20,
    fontWeight: 500,
    color: "#fff",
    backgroundColor: "#1DA1F2",
    padding: 12,
    textAlign: "center",
    borderRadius: 30,
  },
  act: {
    paddingLeft: 30,
    paddingBottom: 40,
  },
  login: {
    color: "#1DA1F2",
  },
});
export default StartScreen;
