import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { ThemeProvider } from "@/shared/config";
import { setCustomText } from "react-native-global-props";
import { customTextProps } from "@/shared/config/customFont";
import { useAuthStore } from "@/features/auth/services/authStore";
import { Slot, useRouter } from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const isSignedIn = useAuthStore((state) => state.isSignedIn);

  const [fontsLoaded] = useFonts({
    PretendardRegular: require("@/assets/fonts/Pretendard-Regular.ttf"),
    PretendardMedium: require("@/assets/fonts/Pretendard-Medium.ttf"),
    PretendardSemiBold: require("@/assets/fonts/Pretendard-SemiBold.ttf"),
  });

  setCustomText(customTextProps);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    if (fontsLoaded && !isSignedIn) {
      router.replace("/sign-in");
    }
  }, [fontsLoaded, isSignedIn]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider>
        <Slot />
        <StatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
