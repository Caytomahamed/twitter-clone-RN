import CreateAccountScreen from "./src/screen/CreateAccountScreen";
import CustomizeScreen from "./src/screen/CustomizeScreen";
import SetPasswordScreen from "./src/screen/SetPasswordScreen";
import VerifyScreen from "./src/screen/VerifyScreen";
import HomePage from "./src/screen/homePage";
import SignupScreen from "./src/screen/signupScreen";
import StartScreen from "./src/screen/startScreen";
import AddProfileImageScreen from "./src/screen/AddProfileImageScreen";
import AddBioScreen from "./src/screen/AddBioScreen";
import EnableNotificationScreen from "./src/screen/EnableNotificationScreen";
import AllowContactAccessScreen from "./src/screen/AllowContactAccessScreen";
import SelectInterestsScreen from "./src/screen/SelectInterestsScreen";
import SelectInterestsDetailScreen from "./src/screen/SelectInterestsDetailScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FollowPeopleScreen from "./src/screen/FollowPeopleScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="startScreen"
          component={StartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signupScreen"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="customizeScreen"
          component={CustomizeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="createAccountScreen"
          component={CreateAccountScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="verifyScreen"
          component={VerifyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="setPasswordScreen"
          component={SetPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddProfileImageScreen"
          component={AddProfileImageScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="addBioScreen"
          component={AddBioScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EnableNotificationScreen"
          component={EnableNotificationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="allowContactAccessScreen"
          component={AllowContactAccessScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="selectInterenstsScreen"
          component={SelectInterestsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="selectInterestsDetailScreen"
          component={SelectInterestsDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="followPeopleScreen"
          component={FollowPeopleScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
