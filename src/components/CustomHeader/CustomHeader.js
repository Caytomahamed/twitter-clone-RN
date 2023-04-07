import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";

const CancleButton = ({ goback }) => {
  return (
    <Pressable>
      <Text style={styles.button} onPress={() => goback.goBack()}>
        Cancle
      </Text>
    </Pressable>
  );
};
const IconButton = ({goback}) => {
  return (
    <Pressable style={styles.button} onPress={() => goback.goBack()}>
      <Icon name="left" size={20} color="#1DA1F2" />
    </Pressable>
  );
};

const CustomHeader = ({ type, goback }) => {
  return (
    <View style={styles.header}>
      {type === "cancle" && <CancleButton goback={goback} />}
      {type === "icon" && <IconButton goback={goback} />}

      <View style={styles.logo}>
        <Image
          source={require("../../../assets/icon_blue.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  logo: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 58,
  },
  button: {
    color: "#1DA1F2",
    fontSize: 18,
    transform: [{ translateX: 12 }],
  },
});

export default CustomHeader;
