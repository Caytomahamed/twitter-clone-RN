import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import CustomHeader from "../components/CustomHeader/CustomHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomTitle from "../components/CustomTitle/CustomTitle";
import CustumVerifyInput from "../components/CustumVerifyInput/CustumVerifyInput";

const VerifyScreen = ({ navigation }) => {
  const [code, setCode] = useState();

  const windowHeight = Dimensions.get("window").height;

  const onCode = () => setCode(1);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView>
        <CustomHeader type="icon" goback={navigation} />
        <CustomTitle title="We sent you a code" align="center" />
        <Text style={styles.description}>
          Enter it below to verify +44 7552 1324567
        </Text>
        <View height={(windowHeight * 2) / 3} style={styles.verifyContainer}>
          <View style={styles.verifyBox}>
            <CustumVerifyInput value={code} setValue={onCode} />
            <CustumVerifyInput value={code} setValue={onCode} />
            <CustumVerifyInput value={code} setValue={onCode} />
            <CustumVerifyInput value={code} setValue={onCode} />
            <CustumVerifyInput value={code} setValue={onCode} />
            <CustumVerifyInput value={code} setValue={onCode} />
          </View>
          <View style={styles.actionContianer}>
            <View style={styles.action}>
              <Text style={styles.recieve}>Don't recieve SMS?</Text>
              <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("verifyScreen")}
              >
                <Text style={styles.btnxt}>Next </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  verifyContainer: {
    // backgroundColor: "red",
  },
  description: {
    color: "#657786",
    textAlign: "center",
  },
  verifyBox: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },
  actionContianer: {
    height: 180,
    justifyContent: "flex-end",
  },
  recieve: {
    color: "#1DA1F2",
    marginVertical: 10,
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
});
export default VerifyScreen;
