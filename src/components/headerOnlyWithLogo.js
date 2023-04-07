import { View, StyleSheet, Image } from "react-native";
import React from 'react'

const HeaderOnlyWithLogo = () => {
  return (
    <View style={styles.imageBox}>
      <Image
        source={require("../../assets/icon_blue.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageBox: {
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 58,
  },
});

export default HeaderOnlyWithLogo