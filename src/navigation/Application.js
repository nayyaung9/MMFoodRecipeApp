import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { TabHomeActiveIcon, TabHomeIcon, TabProfileActiveIcon, TabProfileIcon } from "../components/ui/icons/Root";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecipeDetailScreen from "../screens/RecipeDetailScreen";
import OnboardingScreen from "../screens/OnboardingScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ScreenTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          if (route.name === 'Tab-Home') {
            return focused ? <TabHomeActiveIcon /> : <TabHomeIcon />
          } else if (route.name === 'Tab-Profile') {
            return focused ? <TabProfileActiveIcon /> : <TabProfileIcon />
          }
        },
      })}>
      <Tab.Screen name="Tab-Home" component={HomeScreen} />
      <Tab.Screen name="Tab-Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

function AppScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding-Screen"
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="Onboarding-Screen" component={OnboardingScreen} />
      <Stack.Screen
        name="Screen-Tabs"
        component={ScreenTabs}
        options={{
          animation: "fade"
        }}
      />
      <Stack.Screen name="Recipe-Detail-Screen" component={RecipeDetailScreen} />
    </Stack.Navigator>
  )
}

function Application() {
  return (
    <NavigationContainer>
      <AppScreens />
    </NavigationContainer>
  )
}

export default Application;