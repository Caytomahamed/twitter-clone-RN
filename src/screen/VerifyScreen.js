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
import CustomButton, { onPress } from "../components/CustomButton/CustomButton";
import CustomDescription from "../components/CustomDescription/CustomDescription";

const VerifyScreen = ({ navigation }) => {
  const [code, setCode] = useState();

  const windowHeight = Dimensions.get("window").height;

  const onCode = () => setCode(1);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView>
        <CustomHeader type="icon" goback={navigation} />
        <CustomTitle title="We sent you a code" align="center" />
        <CustomDescription description="    Enter it below to verify +44 7552 1324567" />
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
              <CustomButton
                title="Next"
                onPress={() => onPress(navigation, "setPasswordScreen")}
                fontSize={16}
                width={"100%"}
                borderRadius={30}
              />
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
    paddingHorizontal: 20,
  },
});
export default VerifyScreen;
