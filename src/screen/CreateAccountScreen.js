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

const CreateAccountScreen = ({ navigation }) => {
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

          <Text style={styles.terms}>
            By signing up, you agree to{" "}
            <Text style={styles.termsText}>Term, Privacy Policy, </Text>
            and <Text style={styles.termsText}>Cookie Use.</Text>
          </Text>
        </View>
        <View style={styles.actionContianer}>
          <View style={styles.action}>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("verifyScreen")}
            >
              <Text style={styles.btnxt}>Sign up</Text>
            </Pressable>
          </View>
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
    flex: 1,
    justifyContent: "flex-end",
    padding: 10,
  },
  button: {
    fontSize: 20,
    fontWeight: 500,
    color: "#fff",
    backgroundColor: "#1DA1F2",
    padding: 10,
    textAlign: "center",
    borderRadius: 30,
  },
  btnxt: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 700,
    textAlign: "center",
  },
  terms: {
    fontSize: 14,
    padding: 20,
    transform: [{ translateY: -35 }],
  },
  termsText: {
    color: "#1DA1F2",
  },
});
export default CreateAccountScreen;
