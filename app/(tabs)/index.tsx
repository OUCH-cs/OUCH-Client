import { useAuthStore } from "@/features/auth/services/authStore";
import { Link } from "expo-router";
import { StyleSheet, Text, SafeAreaView, Button, View } from "react-native";

export default function HomeScreen() {
  const signOut = useAuthStore((state) => state.signOut);

  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Link href={"/sign-in"}>Navigate to Login</Link>
      <Link href={"/diagnosis"}>Navigate to 자가진단</Link>
      <Button
        title="signOut"
        onPress={() => {
          signOut();
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
