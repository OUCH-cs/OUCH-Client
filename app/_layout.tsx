import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { ThemeProvider } from "@/shared/config";
import { setCustomText } from "react-native-global-props";
import { customTextProps } from "@/shared/config/customFont";
import { RootNavigator } from "@/shared/components";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    PretendardRegular: require("@/assets/fonts/Pretendard-Regular.ttf"),
    PretendardMedium: require("@/assets/fonts/Pretendard-Medium.ttf"),
    PretendardSemiBold: require("@/assets/fonts/Pretendard-SemiBold.ttf"),
  });

  setCustomText(customTextProps);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider>
        <RootNavigator />
        <StatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
