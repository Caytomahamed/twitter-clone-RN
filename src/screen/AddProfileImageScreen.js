import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../components/CustomHeader/CustomHeader";
import CustomTitle from "../components/CustomTitle/CustomTitle";
import Icon from "react-native-vector-icons/AntDesign";
import CustomButton, { onPress } from "../components/CustomButton/CustomButton";
import CustomDescription from "../components/CustomDescription/CustomDescription";

const AddProfileImageScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader />
      <View style={styles.bodyContainer}>
        <View style={styles.header}>
          <CustomTitle title="Pick a profile picture" align="center" />
          <CustomDescription description=" Have a favorite selfie? upload now" />
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.image}>
            <Image
              source={require("../../assets/default-user.jpg")}
              style={styles.image}
            />
            <View style={styles.imageIcon}>
              <Icon name="pluscircle" size={32} color="#2196F3" />
            </View>
          </View>
        </View>
        <View style={styles.actions}>
          <CustomButton
            title="Next"
            onPress={() => onPress(navigation, "addBioScreen")}
            fontSize={16}
            width={"100%"}
            borderRadius={30}
          />
          <CustomButton
            title="Skip for now"
            onPress={() => onPress(navigation, "addBioScreen")}
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

export default AddProfileImageScreen;

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
    padding: 20,
  },
  imageContainer: {
    alignItems: "center",
    alignSelf: "center",
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 100,
    backgroundColor: "#657786",
    position: "relative",
  },
  imageIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: -23,
    right: 0,

    alignItems: "center",
    justifyContent: "center",
  },
  actions: {
    marginBottom: 12,
  },
});
