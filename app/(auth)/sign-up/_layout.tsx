import { SignUpHeader } from "@/features/auth/ui";
import theme from "@/shared/styles/theme";
import { Slot } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaView style={styles.container}>
      <SignUpHeader />
      <Slot />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
});
