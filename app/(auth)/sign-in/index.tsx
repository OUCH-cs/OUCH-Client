import { useAuthStore } from "@/features/auth/services/authStore";
import { Link, Redirect } from "expo-router";
import { Platform, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native";
import Logo from "@/assets/icons/Logo";
import CustomButton from "@/shared/components/button/CustomButton";
import InputField from "@/shared/components/input-field/InputField";
import { Label } from "@/shared/components/label/Label";
import theme from "@/shared/styles/theme";

export default function SignInScreen() {
  const isSignedIn = useAuthStore((state) => state.isSignedIn);
  const signIn = useAuthStore((state) => state.signIn);

  const handleSubmit = () => {
    signIn(); // 임시로 로그인 처리

    // 로그인 API 호출
  };

  if (isSignedIn) {
    return <Redirect href={"/"} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoImgWrapper}>
        <Logo width={166} height={164} />
      </View>
      <Label style={styles.loginLabel}>Login</Label>
      <View style={styles.inputContainer}>
        <InputField autoFocus placeholder="ID" />
        <InputField autoFocus placeholder="PW" />
      </View>
      <View style={styles.buttonWrapper}>
        <CustomButton
          onPress={handleSubmit}
          width={328}
          height={48}
          radius={10}
        >
          Log In
        </CustomButton>
      </View>

      <Link href={"/forgot/id"} style={styles.forgotLabel}>
        Forgot ID/PW
      </Link>

      <View style={styles.signUpNavWrapper}>
        <Label style={[styles.signUpNavLabel, styles.guide]}>
          Don't have an account?
        </Label>
        <Link style={[styles.signUpNavLabel, styles.signUp]} href={"/sign-up"}>
          Sign Up
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  logoImgWrapper: {
    position: "absolute",
    top: 107,
    left: "32%",
  },

  loginLabel: {
    marginTop: Platform.OS === "ios" ? 198 : 242,
    marginBottom: 48,
    fontSize: 32,
    fontWeight: 600,
    color: theme.colors.black,
  },

  inputContainer: {
    gap: 12,
    marginBottom: 52,
  },

  buttonWrapper: {
    marginBottom: 16,
  },

  forgotLabel: {
    marginBottom: 86,
    fontSize: 14,
    fontWeight: 400,
    color: theme.colors.gray_7,
  },

  signUpNavWrapper: {
    flexDirection: "row",
    gap: 8,
  },

  signUpNavLabel: {
    fontSize: 14,
    fontWeight: 400,
  },
  guide: {
    color: theme.colors.gray_7,
  },
  signUp: {
    color: theme.colors.primary,
  },
});
