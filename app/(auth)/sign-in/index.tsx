import { useAuthStore } from "@/features/auth/services/authStore";
import { Label } from "@/shared/components/label/Label";
import { Link, Redirect } from "expo-router";
import { StyleSheet } from "react-native";
import { Text, SafeAreaView, Button } from "react-native";

export default function SignInScreen() {
  const isSignedIn = useAuthStore((state) => state.isSignedIn);
  const signIn = useAuthStore((state) => state.signIn);

  console.log(isSignedIn);

  if (isSignedIn) {
    return <Redirect href={"/"} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>로그인 페이지</Text>
      <Label style={styles.text_test}>로그인 페이지</Label>
      <Button
        title="signIn"
        onPress={() => {
          signIn();
        }}
      />
      <Link href={"/"}>Navigate to index</Link>
      <Link href={"/sign-up"}>회원가입으로 이동</Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },

  text: {
    fontFamily: "Pretendard",
    fontSize: 40,
    fontWeight: 400,
  },

  text_test: {
    fontSize: 40,
    fontWeight: 500,
  },
});
