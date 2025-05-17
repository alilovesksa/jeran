// app/layout.js
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack initialRouteName="screens/LoginScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="screens/LoginScreen" />
      <Stack.Screen name="screens/HomeScreen" />
    </Stack>
  );
}
