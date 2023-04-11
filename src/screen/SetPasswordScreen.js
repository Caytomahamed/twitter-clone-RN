import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../components/CustomHeader/CustomHeader";
import CustomTitle from "../components/CustomTitle/CustomTitle";
import CustomInput from "../components/CustomInput/CustomInput";
import Tweet from "../components/Tweet";

import CustomButton, { onPress } from "../components/CustomButton/CustomButton";
import CustomDescription from "../components/CustomDescription/CustomDescription";

import Icon from "react-native-vector-icons/AntDesign";
const SetPasswordScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <CustomHeader goback={navigation} />
        <CustomTitle title="You'll need a password" align="center" />
        <CustomDescription description=" Make sure it's 8 characters or more" />
        <View style={styles.body}>
          <View style={styles.box}>
            <View style={styles.inputs}>
              <CustomInput />
              <View style={styles.icon}>
                <Icon name="check" size={17} color="green" />
              </View>
            </View>
          </View>
          <View style={styles.passwordReveal}>
            <Text style={styles.passwordRevealText}>Reveal password</Text>
          </View>
          <CustomButton
            title="Next"
            onPress={() => onPress(navigation, "AddProfileImageScreeN")}
            fontSize={18}
            width={"100%"}
            borderRadius={30}
            style={{ marginTop: 40 }}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  box: {
    marginTop: 25,
  },
  inputs: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordReveal: {
    alignItems: "flex-end",
  },
  icon: {
    transform: [{ translateY: -20 }, { translateX: -20 }],
    color: "red",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "green",
    borderWidth: 1,
    width: 25,
    height: 25,
    borderRadius: 50,
  },
  passwordRevealText: {
    transform: [{ translateY: -25 }, { translateX: -20 }],
    color: "#2196F3",
  },
});

export default SetPasswordScreen;
