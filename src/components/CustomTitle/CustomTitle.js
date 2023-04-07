import { View, Text, StyleSheet } from "react-native";
import React from "react";

const CustomTitle = ({ type = "secondary", title, align, margin }) => {
  return (
    <View>
      {type === "primary" && (
        <Text style={styles.title}>
          See what's {"\n"}happening in the {"\n"}world right now.
        </Text>
      )}
      {type === "third" && (
        <Text
          style={[
            styles.titleThird,
            styles[`${align}`],
            styles[`${margin}`],
          ]}
        >
          {title}
        </Text>
      )}
      {type === "secondary" && (
        <Text
          style={[
            styles.titleSecondary,
            styles[`${align}`],
            styles[`${margin}`],
          ]}
        >
          {title}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 42,
    fontWeight: 700,
    color: "#14171A",
    marginBottom: 20,
  },
  titleSecondary: {
    fontSize: 30,
    fontWeight: 700,
    color: "#14171A",
    marginBottom: 5,
  },
  titleThird: {
    fontSize: 22,
    fontWeight: 700,
    color: "#14171A",
    marginBottom: 5,
  },
  center: {
    textAlign: "center",
  },
  margin: {
    marginTop: 4,
  },
});

export default CustomTitle;
