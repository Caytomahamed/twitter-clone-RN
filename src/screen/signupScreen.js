import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import CustomHeader from "../components/CustomHeader/CustomHeader";
import CustomTitle from "../components/CustomTitle/CustomTitle";
import CustomInput from "../components/CustomInput/CustomInput";
import CustomButton, { onPress } from "../components/CustomButton/CustomButton";
import CallActionScreensButtom from "../components/CustomCallActionScreensButtom/CustomCallActionScreensButtom";

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const windowHeight = Dimensions.get("window").height;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.contianer} height={windowHeight}>
        <View height={windowHeight / 2}>
          <CustomHeader type="cancle" goback={navigation} />
          <CustomTitle
            title="Create your account"
            align="center"
            margin="margin"
          />

          <View style={styles.inputs}>
            <CustomInput placeholder="Name" value={name} setValue={setName} />
            <CustomInput
              placeholder="Phone number or email address"
              value={name}
              setValue={setName}
            />
            <CustomInput
              placeholder="Date of birth"
              value={name}
              setValue={setName}
            />
          </View>
        </View>
        <View style={styles.actionContianer}>
          <CallActionScreensButtom
            color="#E1E8ED"
            width={2}
            padding={20}
            nextScreen="customizeScreen"
            goTo={navigation}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
  inputs: {
    padding: 10,
    alignItems: "center",
  },
  actionContianer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  action: {
    padding: 14,
    paddingRight: 20,

    alignItems: "flex-end",
  },
});

export default SignupScreen;
