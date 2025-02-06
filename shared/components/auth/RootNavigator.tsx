import { useAuthStore } from "@/features/auth/services/authStore";
import { Slot } from "expo-router";
import LoginScreen from "@/app/(auth)/sign-in";

export default function RootNavigator() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return <>{isLoggedIn ? <Slot /> : <LoginScreen />}</>;
}
