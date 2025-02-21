import { Text, SafeAreaView, Button } from "react-native";
import { Link } from "expo-router";

export default function SignUp() {
  const serverHealthCheck = async () => {
    const res = await fetch("http://52.78.221.55:8080/health");
    // const data = await res.json();
    console.log(res.json());
    console.log("api 요청 완료");
  };

  return (
    <SafeAreaView>
      <Text>SignUp</Text>
      <Link href="/sign-in">로그인으로 이동</Link>

      <Button title="api 요청" onPress={serverHealthCheck} />
    </SafeAreaView>
  );
}
