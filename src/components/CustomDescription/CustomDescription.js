import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomDescription = ({ description, align = "center" }) => {
  return (
    <View>
      <Text style={[styles.text, { textAlign: align }]}>{description}</Text>
    </View>
  );
};

export default CustomDescription;

const styles = StyleSheet.create({
  text: {
    marginTop: 15,
    color: "#657786",
    fontSize: 18,
  },
});
