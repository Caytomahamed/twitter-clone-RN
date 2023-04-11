import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import CustomHeader from "../components/CustomHeader/CustomHeader";
import CustomTitle from "../components/CustomTitle/CustomTitle";
import CustomDescription from "../components/CustomDescription/CustomDescription";
import CustomButton, { onPress } from "../components/CustomButton/CustomButton";
import CustomCallActionScreensButtom from "../components/CustomCallActionScreensButtom/CustomCallActionScreensButtom";

const SelectInterestsScreen = ({ navigation }) => {
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
      <ScrollView>
        <View style={styles.header}>
          <CustomHeader />
          <CustomTitle
            title="What do you want to see on Twitter?"
            align="center"
          />
          <CustomDescription description={descriptionText} />
        </View>

        <View style={styles.interestsContainer}>
          {interests.map((item) => (
            <View style={styles.interest} key={item.id}>
              <Text style={styles.interestText}>{item.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View>
        <View style={styles.actionContianer}>
          <CustomCallActionScreensButtom
            description="0 of 3 selected"
            nextScreen="selectInterestsDetailScreen"
            color="#E1E8ED"
            width={2}
            padding={20}
            goTo={navigation}
          />
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
    marginBottom: 40,
    marginTop: 40,
  },
  interestsContainer: {
    padding: 8,
    paddingTop: 15,
    borderColor: "#E1E8ED",
    flexDirection: "row",
    flexWrap: "wrap",
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
    borderRadius: 20,
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
    fontSize: 18,
    color: "#14171A",
    fontWeight: "bold",
  },
  actionContianer: {
    justifyContent: "flex-end",
  },
});
