import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import CustomButton from "../CustomButton/CustomButton";

const SimpleProfile = ({ name, bio, username, image }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.username}>@{username}</Text>
        </View>
        <View>
          <CustomButton
            title="Follow"
            color="#fff"
            textColor="#2196F3"
            width={110}
            borderRadius={50}
            padding={6}
            fontSize={16}
            style={{ borderColor: "#2196F3", borderWidth: 1 }}
          />
        </View>
      </View>
      <View style={styles.bio}>
        <Text style={styles.image}></Text>
        <Text style={styles.nameContainer}>{bio}</Text>
        <View style={{ width: 20 }}></View>
      </View>
    </View>
  );
};

export default SimpleProfile;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
  },
  profile: {
    flexDirection: "row",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 35,
  },
  nameContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  username: {
    fontSize: 15,
    color: "#657786",
  },
  bio: {
    fontSize: 16,
    marginTop: -10,
    padding: 0,
    flexDirection: "row",
  },
});
