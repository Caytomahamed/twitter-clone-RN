import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import CustomHeader from "../components/CustomHeader/CustomHeader";
import CustomTitle from "../components/CustomTitle/CustomTitle";
import CustomButton, { onPress } from "../components/CustomButton/CustomButton";

const StartScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader />
      {/* # body */}
      <View style={styles.body}>
        <View>
          <CustomTitle type="primary" />
          <CustomButton
            title="Create account"
            onPress={() => onPress(navigation,"signupScreen")}
            fontSize={20}
            width={"100%"}
            borderRadius={30}
          />
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
    paddingHorizontal:20,
    marginTop: -50,
  },
  act: {
    paddingLeft: 20,
    paddingBottom: 30,
  },
  login: {
    color: "#1DA1F2",
  },
});
export default StartScreen;
