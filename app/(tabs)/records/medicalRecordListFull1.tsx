import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import EditIcon from "@/assets/icons/EditIcon";

export default function MedicalRecordListEdit1() {
  const router = useRouter();
  
  const handleEditIconPress = () => {
  };
  
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/(tabs)/records/medicalRecordList')} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Medical Record</Text>
        <TouchableOpacity onPress={handleEditIconPress} style={styles.editIconWrapper}>
          <EditIcon width={20} height={20} style={styles.editIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.date}>
        <Text style={styles.dateText}>Date of visit</Text>
      </View>

      <View style={styles.list}>
        <Text style={styles.listText}>2024.11.24</Text>
      </View>

      <View style={styles.date}>
        <Text style={styles.dateText}>Visiting Hospital</Text>
      </View>

      <View style={styles.list}>
        <Text style={styles.listText}>Hanyang Hospital</Text>
      </View>

      <View style={styles.date}>
        <Text style={styles.dateText}>Medical Subjects</Text>
      </View>

      <View style={styles.list}>
        <Text style={styles.listText}>Hanyang Hospital</Text>
      </View>

      <View style={styles.date}>
        <Text style={styles.dateText}>Symptoms</Text>
      </View>

      <View style={styles.list}>
        <Text style={styles.listText}>Hanyang Hospital</Text>
      </View>

      <View style={styles.date}>
        <Text style={styles.dateText}>Treatment Summary</Text>
      </View>

      <View style={styles.list}>
        <Text style={styles.listText}>Hanyang Hospital</Text>
      </View>
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
  editIcon: {
  },
  date: {
    marginTop: 32,
    marginLeft: 24,
    marginBottom: 8,
  },
  dateText: {
    color: "#434343",
    fontSize: 14,
    fontWeight: 400,
  },
  list: {
    marginLeft: 16,
    marginRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 10,
    backgroundColor: "#FFF",
    paddingHorizontal: 16,
    borderBottomColor: "#F5F5F5",
    borderBottomWidth: 1,
  },
  listText: {
    color: "#000",
    fontSize: 18,
    fontWeight: 400,
  },
});
