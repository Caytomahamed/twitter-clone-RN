import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton, { onPress } from "../CustomButton/CustomButton";

const CallActionScreensButtom = ({
  description,
  color,
  width,
  padding,
  nextScreen,
  goTo,
}) => {
  return (
    <View
      style={[
        styles.action,
        { borderColor: color, borderWidth: width, paddingHorizontal: padding },
      ]}
    >
      {description && (
        <View style={styles.selectNumber}>
          <Text style={styles.selectNumberText}> 0 of 3 selected</Text>
        </View>
      )}
      <CustomButton
        title="Next"
        onPress={() => onPress(goTo, nextScreen)}
        fontSize={16}
        width={80}
        borderRadius={50}
      />
    </View>
  );
};

export default CallActionScreensButtom;

const styles = StyleSheet.create({
  action: {
    paddingVertical: 10,
    alignItems: "flex-end",
    justifyContent: "center",
    position: "relative",
  },
  selectNumber: {
    position: "absolute",
    left: 20,
  },
  selectNumberText: {
    color: "green",
  },
});
