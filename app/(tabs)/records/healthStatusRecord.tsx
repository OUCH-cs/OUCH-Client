import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import EditIcon from "@/assets/icons/EditIcon";
import HealthStatusList from "@/features/auth/services/records/healthStatusList"; //healthstatusList import

export default function healthStatusRecord() {
  const router = useRouter();
  
  const handleEditIconPress = () => {
  };
  
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/(tabs)/records/healthStatusRecordList')} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Health Status</Text>

        <TouchableOpacity onPress={handleEditIconPress} style={styles.editIconWrapper}>
          <EditIcon width={20} height={20} />
        </TouchableOpacity>
      </View>
      <HealthStatusList />
    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", 
  },
  backButton: {
    left: 24,
    position: "absolute",
    zIndex: 1,
  },
  header: {
    marginTop: 16,
    flexDirection: "row", 
    position: "relative", 
    paddingHorizontal: 24, 
  },
  headerTitle: {
    margin: 0,
    fontSize: 20,
    fontWeight: 500,
    flex: 1, 
    color: "#000",
    textAlign: "center", 
  },
  editIconWrapper: {
    position: 'absolute', 
    right: 24, 
    top: 0, 
  },

});
