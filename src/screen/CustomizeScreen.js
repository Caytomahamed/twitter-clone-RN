import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Switch,
  Pressable,
} from "react-native";
import CustomHeader from "../components/CustomHeader/CustomHeader";
import CustomTitle from "../components/CustomTitle/CustomTitle";
import CustomButton, { onPress } from "../components/CustomButton/CustomButton";

const CustomizeScreen = ({ navigation }) => {
  const windowHeight = Dimensions.get("window").height;
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View height={(4 * windowHeight) / 5}>
        <CustomHeader type="icon" goback={navigation} />
        <CustomTitle title="Customiz your a acount" align="center" />
        <View style={styles.content}>
          <CustomTitle
            type="third"
            title="Connect with people you know"
            align="left"
          />
          <View style={styles.box}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                Let others find your Twitter account by your phone number
              </Text>
            </View>
            <View style={styles.switchContainer}>
              <Switch
                style={styles.switch}
                trackColor={{ false: "#767577", true: "#1DA1F2" }}
                thumbColor={isSwitchOn ? "#fff" : "#fff"}
                value={isSwitchOn}
                onChange={onToggleSwitch}
              />
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <CustomTitle type="third" title="Personalized ads" align="left" />
          <View style={styles.box}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                You will see always ads on Twitter based you Twitter
                activities.Whe the setting in enable.Twitter may be futher
                personalize ads from Twitter advertisers, on and of Twitter, by
                combining your Twitter activities with other online activities
                and information from our partners
              </Text>
            </View>
            <View style={styles.switchContainer}>
              <Switch
                style={styles.switch}
                trackColor={{ false: "#767577", true: "#1DA1F2" }}
                thumbColor={isSwitchOn ? "#fff" : "#fff"}
                value={isSwitchOn}
                onChange={onToggleSwitch}
              />
            </View>
          </View>
          <Text style={styles.more}>
            Fore more detials about these settings,visit the{" "}
            <Text style={styles.helpCenter}>Help Center</Text>
          </Text>
        </View>
      </View>

      <View style={styles.action}>
        <CustomButton
          title="Next"
          onPress={() => onPress(navigation, "createAccountScreen")}
          fontSize={18}
          width={"100%"}
          borderRadius={30}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 10,
    paddingHorizontal: 20,
  },
  box: {
    flexDirection: "row",
  },
  textContainer: {
    flex: 1,
    marginRight: 20,
  },
  switchContainer: {
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: 600,
  },
  switch: {
    transform: [{ scaleX: 1.45 }, { scaleY: 1.5 }],
  },
  more: {
    fontSize: 14,
    marginTop: 30,
  },
  helpCenter: {
    color: "#1DA1F2",
  },
  action: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 17,
    paddingHorizontal: 20,
  },
});
export default CustomizeScreen;
