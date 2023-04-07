import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const CustomInput = ({ placeholder, value, setValue }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#657786"
      value={value}
      onChange={setValue}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "90%",
    fontSize: 17,
    paddingBottom: 15,
    borderBottomColor: "#E1E8ED",
    borderBottomWidth: 1,
    marginBottom: 35,
    color: "#1DA1F2",
  },
});

export default CustomInput;
