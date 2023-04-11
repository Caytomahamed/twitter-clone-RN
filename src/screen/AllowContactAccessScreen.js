import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../components/CustomHeader/CustomHeader";
import CustomTitle from "../components/CustomTitle/CustomTitle";
import Icon from "react-native-vector-icons/AntDesign";
import CustomButton, { onPress } from "../components/CustomButton/CustomButton";
import CustomDescription from "../components/CustomDescription/CustomDescription";

const AllowContactAccessScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader />
      <View style={styles.bodyContainer}>
        <View style={styles.header}>
          <CustomTitle
            title="Connect your address book to find people you may  know on Twitter."
            align="center"
          />
        </View>

        <View style={styles.descriptionContainer}>
          <CustomDescription
            align="left"
            description="When you link your address book to Twitter, the platform will scan your contacts list and compare it to its user database. If it finds matches between your contacts and Twitter users, it will suggest those users as 'people you may know' and give you the option to follow them. This is a common feature on many social media platforms that allows you to expand your network and connect with people who you may have lost touch with or didn't know were on the platform."
          />
          <Text style={styles.learnmore}>Learn more</Text>
        </View>
        <View style={styles.actions}>
          <CustomButton
            title="Next"
            onPress={() => onPress(navigation, "selectInterenstsScreen")}
            fontSize={16}
            width={"100%"}
            borderRadius={30}
          />
          <CustomButton
            title="Skip for now"
            onPress={() => onPress(navigation, "selectInterenstsScreen")}
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

export default AllowContactAccessScreen;

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
  },
  descriptionContainer: {
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 10,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 100,
    backgroundColor: "#657786",
    position: "relative",
  },
  learnmore: {
    fontSize: 16,
    alignSelf: "flex-start",
    color: "#2196F3",
  },
  actions: {
    marginBottom: 12,
  },
});
