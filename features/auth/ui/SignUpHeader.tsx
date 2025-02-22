import Arrow from "@/assets/icons/common/Arrow";
import { Label } from "@/shared/components/label/Label";
import { View, StyleSheet, Pressable } from "react-native";
import {
  useSignUpDataStore,
  useSignUpStatusStore,
} from "../services/authStore";
import { useRouter } from "expo-router";
import { initialSignUpData } from "../consts/sign-up";
import { SignUpState } from "../types";

function SignUpHeader() {
  const router = useRouter();
  const signUpStatus = useSignUpStatusStore((state) => state.signUpStatus);
  const setSignUpData = useSignUpDataStore((state) => state.setSignUpData);

  const handleBackPress = () => {
    if (signUpStatus >= 1) {
      useSignUpStatusStore.getState().setSignUpStatus(signUpStatus - 1);
    } else {
      // name일 시에 뒤로가기 누르면 초기화
      router.back();
      setSignUpData(initialSignUpData as Partial<SignUpState>);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.iconWrapper} onPress={handleBackPress}>
        <Arrow width={28} height={28} />
      </Pressable>
      <Label style={styles.label}>Sign Up</Label>
    </View>
  );
}

export { SignUpHeader };

const styles = StyleSheet.create({
  container: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 56,
    marginBottom: 91,
  },

  iconWrapper: {
    position: "absolute",
    left: 16,
    top: 14,
  },

  label: {
    fontSize: 20,
    fontWeight: 500,
  },
});
