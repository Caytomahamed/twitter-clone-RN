import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton/CustomButton";
import CustomHeader from "../components/CustomHeader/CustomHeader";
import CustomTitle from "../components/CustomTitle/CustomTitle";
import CustomDescription from "../components/CustomDescription/CustomDescription";

const EnableNotificationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader />
      <View style={styles.bodyContainer}>
        <View style={styles.header}>
          <CustomTitle title="Turn on Notifications" align="center" />
          <CustomDescription
            description=" Get the most out of twitter by saying up to date with what's
            happening."
          />
        </View>

        <View style={styles.actions}>
          <CustomButton
            title="Next"
            onPress={() => onPress(navigation, "AddProfileImageScreeN")}
            fontSize={18}
            width={"100%"}
            borderRadius={30}
          />
          <CustomButton
            title="Skip for now"
            onPress={() => onPress(navigation, "AddProfileImageScreeN")}
            fontSize={18}
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

export default EnableNotificationScreen;

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
  actions: {
    padding: 20,
  },
});
