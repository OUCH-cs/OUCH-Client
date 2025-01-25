import { useAuthStore } from "@/features/auth/services/authStore";
import { Link } from "expo-router";
import { StyleSheet, Text, SafeAreaView, Button } from "react-native";

export default function HomeScreen() {
  const logout = useAuthStore((state) => state.logout);

  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Text>Home</Text>
      <Link href={"/login"}>Navigate to Login</Link>
      <Button
        title="Logout"
        onPress={() => {
          logout();
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
