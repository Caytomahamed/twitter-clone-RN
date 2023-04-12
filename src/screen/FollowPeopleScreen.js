import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../components/CustomHeader/CustomHeader";
import CustomDescription from "../components/CustomDescription/CustomDescription";
import CustomTitle from "../components/CustomTitle/CustomTitle";
import SimpleProfile from "../components/Profile/SimpleProfile";
import CallActionScreensButtom from "../components/CustomCallActionScreensButtom/CustomCallActionScreensButtom";

const twitterProfile1 = {
  name: "Emily Davis",
  bio: "Coffee lover ☕️ | Travel enthusiast ✈️ | Bookworm 📚",
  username: "emilydavis",
  image: "https://xsgames.co/randomusers/avatar.php?g=female",
};

const twitterProfile2 = {
  name: "David Lee",
  bio: "Tech enthusiast | Basketball fan 🏀 | Foodie 🍔🍟",
  username: "davidlee",
  image: "https://xsgames.co/randomusers/avatar.php?g=male",
};

const twitterProfile3 = {
  name: "Amanda Garcia",
  bio: "Marketing professional | Yoga lover 🧘‍♀️ | Wine connoisseur 🍷",
  username: "amandagarcia",
  image: "https://xsgames.co/randomusers/avatar.php?g=female",
};

const twitterProfile4 = {
  name: "Michael Johnson",
  bio: "Web developer | Musician 🎸 | Hiker 🏔️",
  username: "michaeljohnson",
  image: "https://xsgames.co/randomusers/avatar.php?g=pixel",
};

const twitterProfile5 = {
  name: "Samantha Smith",
  bio: "Art lover | Dog mom 🐶🐾 | Beach bum 🏖️",
  username: "samanthasmith",
  image: "https://xsgames.co/randomusers/avatar.php?g=female",
};

const twitterProfiles = [
  twitterProfile1,
  twitterProfile2,
  twitterProfile3,
  twitterProfile4,
  twitterProfile5,
];
const FollowPeopleScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <CustomHeader />
          <CustomTitle title="Suggested follows" align="center" />
          <CustomDescription
            description="You'll see Tweets from people you follow in your Home Timeline"
            align="center"
          />
        </View>
        <View style={styles.people}>
          <CustomTitle type="third" title="You may be intersted in" />
          <View style={{ marginBottom: 15 }}></View>
          <View style={styles.profile}>
            {twitterProfiles.map((item) => (
              <SimpleProfile
                key={item.name}
                name={item.name}
                bio={item.bio}
                username={item.username}
                image={item.image}
              />
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.action}>
        <CallActionScreensButtom
          color="#E1E8ED"
          width={2}
          padding={20}
          nextScreen="customizeScreen"
          goTo={navigation}
        />
      </View>
    </SafeAreaView>
  );
};

export default FollowPeopleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  header: {
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  people: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 15,
  },
  action: {
    backgroundColor: "#FFf",
  },
});
