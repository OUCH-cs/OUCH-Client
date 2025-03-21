// 들어가자 마자 보이는 화면
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import MedicalRecordDetails from "@/features/auth/services/records/medicalRecordDetails";
import HealthStatusDetails from "@/features/auth/services/records/healthStatusDetails";

export default function RecordsIndex() {
  const router = useRouter(); 
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.topSection}
        onPress={() => {
          router.replace('/(tabs)/records/medicalRecordList');
        }}
        >
        <Text style={styles.sectionTitle}>Medical Record</Text>
        <MedicalRecordDetails />
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.bottomSection}
      onPress={() => {
        router.replace('/(tabs)/records/healthStatusRecordList');
      }}
      >
        <Text style={styles.sectionTitle}>Health Status</Text>
        <HealthStatusDetails />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
// 요까지
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F9FC", 
    marginTop:14,
  },
  topSection: {
    backgroundColor: "#EEF6F9",
    borderRadius: 10,
    marginLeft:16,
    marginRight:16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    marginBottom:20,
  },
  bottomSection: {
    backgroundColor: "#EEF6F9",
    borderRadius: 12,
    marginLeft:16,
    marginRight:16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
  },
  sectionTitle: {
    marginTop:13,
    paddingLeft:16,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12, 
  },
});
