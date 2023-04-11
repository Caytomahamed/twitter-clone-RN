import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton, { onPress } from "../components/CustomButton/CustomButton";
import CustomHeader from "../components/CustomHeader/CustomHeader";
import CustomTitle from "../components/CustomTitle/CustomTitle";
import CustomInput from "../components/CustomInput/CustomInput";
import CustomDescription from "../components/CustomDescription/CustomDescription";

const AddBioScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader />
      <View style={styles.bodyContainer}>
        <View style={styles.header}>
          <CustomTitle title="Describe your self" align="center" />
          <CustomDescription description=" What makes you special? Do not think to hard. just have fun it." />

          <View style={styles.input}>
            <CustomInput placeholder="Your bio" />
            <Text style={styles.maxLength}>160</Text>
          </View>
        </View>

        <View style={styles.actions}>
          <CustomButton
            title="Next"
            onPress={() => onPress(navigation, "EnableNotificationScreen")}
            fontSize={16}
            width={"100%"}
            borderRadius={30}
          />
          <CustomButton
            title="Skip for now"
            onPress={() => onPress(navigation, "EnableNotificationScreen")}
            fontSize={16}
            width={"100%"}
            borderRadius={30}
            color="#Fff"
            textColor="#2196F3"
            style={{ marginTop: 10 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddBioScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  bodyContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    flex: 1,
    padding: 20,
  },
  headerDescription: {
    color: "#657786",
    textAlign: "center",
  },
  input: {
    marginTop: 40,
  },
  maxLength: {
    alignSelf: "flex-end",
    color: "green",
    transform: [{ translateY: -20 }],
  },
  actions: {
    marginBottom: 12,
  },
});
