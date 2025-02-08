import TabRecords from "@/assets/icons/tabs/TabRecords";
import CustomButton from "@/shared/components/button/CustomButton";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";

export default function RecordsScreen() {
  return (
    <SafeAreaView>
      <View>
        <Text>Custom Button</Text>
        <CustomButton width={312} height={48} radius={10}>
          Login
        </CustomButton>
        <CustomButton
          width={83}
          height={46}
          radius={100}
          icon={<TabRecords color="white" strokeWidth={1} />}
        >
          New
        </CustomButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
