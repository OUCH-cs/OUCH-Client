import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Label } from "@/shared/components/label/Label";
import { hospitals } from '@/features/auth/services/records/consts/hospitalData';  // hospital import

export default function MedicalRecordList() {
  const router = useRouter();

  const handleNavigate = (hospitalName) => {
    if (hospitalName === hospitals[0]) {
      router.push('/(tabs)/records/medicalRecord');
    }  // API 연동 후 나머지 부분 처리
  };

  const handleNewPress = () => {
    router.push('/(tabs)/records/medicalRecordEdit'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => router.replace('/(tabs)/records')} 
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Label style={styles.headerTitle}>Medical Record</Label>
      </View>

      {hospitals.map((hospital, index) => (
        <View key={index}>
          <View style={styles.date}>
            <Label style={styles.dateText}>2024.11.20</Label> 
          </View>
          <View style={styles.list}>
            <TouchableOpacity
              onPress={() => handleNavigate(hospital)}  
              style={styles.listItem}
            >
              <Label style={styles.listText}>{hospital}</Label>
              <Ionicons name="chevron-forward" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <TouchableOpacity onPress={handleNewPress} style={styles.fabButton}>
        <Label style={styles.fabText}>+ New</Label>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F9FC",
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
  },
  headerTitle: {
    margin: 0,
    fontSize: 20,
    fontWeight: 500,
    flex: 1,
    color: "#000",
    textAlign: "center",
    left: 0,
    right: 0,
    fontFamily:"Pretendard",
  },
  date: {
    marginTop: 24,
    marginLeft: 24,
    marginBottom: 8,
  },
  dateText: {
    color: "#767676",
    fontSize: 14,
    fontWeight: 400,
    fontFamily:"Pretendard",
  },
  list: {
    marginLeft: 16,
    marginRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 10,
    backgroundColor: "#FFF",
    paddingHorizontal: 16,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listText: {
    color: "#000",
    fontSize: 16,
    fontWeight: 400,
    fontFamily:"Pretendard",
  },
  fabButton: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    backgroundColor: '#0097A7',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 3,
    elevation: 3,
  },
  fabText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    fontFamily:"Pretendard",
  },
});
