import { useAuthStore } from "@/features/auth/services/authStore";
import { Link, Redirect } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import Logo from "@/assets/icons/Logo";
import CustomButton from "@/shared/components/button/CustomButton";
import InputField from "@/shared/components/input-field/InputField";

export default function SignInScreen() {
  const isSignedIn = useAuthStore((state) => state.isSignedIn);
  const signIn = useAuthStore((state) => state.signIn);

  console.log(isSignedIn);

  if (isSignedIn) {
    return <Redirect href={"/"} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Logo width={166} height={164} />
      <InputField autoFocus placeholder="Enter your name" />

      <CustomButton
        onPress={() => {
          signIn();
        }}
        width={328}
        height={48}
        radius={10}
      >
        Login
      </CustomButton>

      <Link href={"/"}>Navigate to index</Link>
      <Link href={"/sign-up"}>회원가입으로 이동</Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
});
