import { StyleSheet, ScrollView, Text, View, Dimensions } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../components/CustomHeader/CustomHeader";
import CustomTitle from "../components/CustomTitle/CustomTitle";
import CustomDescription from "../components/CustomDescription/CustomDescription";
import CustomCallActionScreensButtom from "../components/CustomCallActionScreensButtom/CustomCallActionScreensButtom";
import { onPress } from "../components/CustomButton/CustomButton";

const descriptionText = `Select at least 3 interests to personalize ${"\n"}your Twitter experience.They will be  ${"\n"}visible on your profile.`;

const SelectInterestsDetailScreen = ({ navigation }) => {
  const [interests, setInterests] = useState([
    {
      id: "1",
      name: "Food",
      areas: [
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
        { id: "11", name: "Business and finance" },
        { id: "12", name: "Education" },
      ],
    },
    {
      id: "2",
      name: "Art and culture",
      areas: [
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
        { id: "11", name: "Business and finance" },
        { id: "12", name: "Education" },
      ],
    },
    {
      id: "3",
      name: "Travel",
      areas: [
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
        { id: "11", name: "Business and finance" },
        { id: "12", name: "Education" },
      ],
    },
    {
      id: "4",
      name: "Entertainment",
      areas: [
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
        { id: "11", name: "Business and finance" },
        { id: "12", name: "Education" },
      ],
    },
    {
      id: "5",
      name: "Sports",
      areas: [
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
        { id: "11", name: "Business and finance" },
        { id: "12", name: "Education" },
      ],
    },
    {
      id: "6",
      name: "Technology",
      areas: [
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
        { id: "11", name: "Business and finance" },
        { id: "12", name: "Education" },
      ],
    },
    {
      id: "7",
      name: "Music",
      areas: [
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
        { id: "11", name: "Business and finance" },
        { id: "12", name: "Education" },
      ],
    },
    {
      id: "8",
      name: "Fashion",
      areas: [
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
        { id: "11", name: "Business and finance" },
        { id: "12", name: "Education" },
      ],
    },
    {
      id: "9",
      name: "Fitness",
      areas: [
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
        { id: "11", name: "Business and finance" },
        { id: "12", name: "Education" },
      ],
    },
    {
      id: "10",
      name: "Politics",
      areas: [
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
        { id: "11", name: "Business and finance" },
        { id: "12", name: "Education" },
      ],
    },
    {
      id: "11",
      name: "Business and finance",
      areas: [
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
        { id: "11", name: "Business and finance" },
        { id: "12", name: "Education" },
      ],
    },
    {
      id: "12",
      name: "Education",
      areas: [
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
        { id: "11", name: "Business and finance" },
        { id: "12", name: "Education" },
      ],
    },
  ]);

  const windowwidth = Dimensions.get("window").height;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <CustomHeader />
          <CustomTitle
            title="What do you want to see on Twitter?"
            align="center"
          />
          <CustomDescription description={descriptionText} />
        </View>

        <View style={[styles.interestsContainer]}>
          {interests.map((item) => (
            <View style={{ marginVertical: 12 }} key={item.id}>
              <CustomTitle type="third" title={item.name} />
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={[styles.interests, { width: windowwidth }]}>
                  {item.areas.map((area) => (
                    <View style={styles.interest} key={area.id}>
                      <Text style={styles.interestText}>{area.name}</Text>
                    </View>
                  ))}
                </View>
              </ScrollView>
            </View>
          ))}
        </View>
      </ScrollView>

      <View>
        <View style={styles.actionContianer}>
          <CustomCallActionScreensButtom
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

export default SelectInterestsDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fFF",
  },
  header: {
    paddingHorizontal: 20,
    backgroundColor: "#fFF",
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  interestsContainer: {
    paddingHorizontal: 20,
    paddingTop: 15,
    borderColor: "#E1E8ED",
    borderTopWidth: 1,
  },
  interests: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  interest: {
    margin: 4,
    paddingVertical: 8,
    paddingHorizontal: 25,
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
    fontSize: 16,
    color: "#14171A",
    fontWeight: "bold",
  },
  actionContianer: {
    justifyContent: "flex-end",
  },
  selectNumber: {
    position: "absolute",
    left: 0,
  },
  selectNumberText: {
    color: "green",
  },
});
