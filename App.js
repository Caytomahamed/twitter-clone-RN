import CreateAccountScreen from "./src/screen/CreateAccountScreen";
import CustomizeScreen from "./src/screen/CustomizeScreen";
import VerifyScreen from "./src/screen/VerifyScreen";
import HomePage from "./src/screen/homePage";
import SignupScreen from "./src/screen/signupScreen";
import StartScreen from "./src/screen/startScreen";


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
