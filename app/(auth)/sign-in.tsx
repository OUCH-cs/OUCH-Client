import { useAuthStore } from "@/features/auth/services/authStore";
import React from "react";
import { View, Text, SafeAreaView, Button } from "react-native";

export default function LoginScreen() {
  const login = useAuthStore((state) => state.login);
  return (
    <SafeAreaView>
      <Text>Login</Text>
      <Button
        title="Login"
        onPress={() => {
          login();
        }}
      />
    </SafeAreaView>
  );
}
