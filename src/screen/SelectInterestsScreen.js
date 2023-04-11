import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import CustomHeader from "../components/CustomHeader/CustomHeader";
import CustomTitle from "../components/CustomTitle/CustomTitle";
import CustomDescription from "../components/CustomDescription/CustomDescription";
import CustomButton from "../components/CustomButton/CustomButton";

const SelectInterestsScreen = () => {
  const [interests, setInterests] = useState([
    { id: "1", name: "Food" },
    { id: "2", name: "Art and culture" },
    { id: "3", name: "Travel" },
    { id: "4", name: "Entertainment" },
    { id: "5", name: "Sports" },
    { id: "6", name: "Technology" },
    { id: "7", name: "Music" },
    { id: "8", name: "Fashion" },
    { id: "9", name: "Fitness" },
    { id: "10", name: "Politics" },
    { id: "11", name: "Business" },
    { id: "12", name: "Education" },
  ]);

  const descriptionText = `Select at least 3 interests to personalize ${"\n"}your Twitter experience.They will be  ${"\n"}visible on your profile.`;

  const renderInterest = ({ item }) => (
    <View style={styles.interest}>
      <Text style={styles.interestText}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <CustomHeader />
        <CustomTitle
          title="What do you want to see on Twitter?"
          align="center"
        />
        <CustomDescription description={descriptionText} />
      </View>

      <FlatList
        data={interests}
        renderItem={renderInterest}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.interestsContainer}
      />

      <View>
        <View style={styles.actionContianer}>
          <View style={styles.action}>
            <View style={styles.selectNumber}>
              <Text style={styles.selectNumberText}> 0 of 3 selected</Text>
            </View>
            <CustomButton
              title="Next"
              onPress={() => onPress(navigation, "customizeScreen")}
              fontSize={18}
              width={100}
              borderRadius={50}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectInterestsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fFF",
  },
  header: {
    backgroundColor: "#fFF",
    paddingHorizontal: 20,
    marginBottom: 70,
    marginTop: 40,
  },
  interestsContainer: {
    padding: 8,
    paddingTop: 50,
    borderColor: "#E1E8ED",
    borderTopWidth: 1,
    justifyContent: "space-between",
  },
  interest: {
    margin: 8,
    width: "45%",
    height: 100,
    borderColor: "#E1E8ED",
    backgroundColor: "#Fff",

    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "flex-end",
    padding: 12,
    shadowColor: "#14171A",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    elevation: 5000,
  },
  interestText: {
    fontSize: 20,
    color: "#14171A",
    fontWeight: "bold",
  },
  actionContianer: {
    justifyContent: "flex-end",
  },
  action: {
    padding: 14,
    paddingRight: 20,

    alignItems: "flex-end",
    justifyContent: "center",
    position: "relative",
  },
  selectNumber: {
    position: "absolute",
    left: 14,
  },
  selectNumberText: {
    color: "green",
  },
});
