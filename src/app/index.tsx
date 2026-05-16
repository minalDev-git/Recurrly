import { Redirect } from "expo-router";

export default function Index() {
  // In the future, you can check for a user session here:
  // if (!session) return <Redirect href="/(auth)/login" />

  return <Redirect href="/(tabs)" />;
}
