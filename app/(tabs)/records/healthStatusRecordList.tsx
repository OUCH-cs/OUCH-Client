import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function MedicalRecordList() {
  const router = useRouter();

  const diease = [
    'diabetes,colic1',
    'diabetes,colic2',
    'diabetes,colic3',
    'diabetes,colic4',
    'diabetes,colic5',
  ];

  const handleNavigate = (dieaseName) => {
    if (dieaseName === diease[0]) {
      router.push('/(tabs)/records/healthStatusRecordListFull1');
    } else if (dieaseName === diease[1]) {
      router.push('/(tabs)/records/healthStatusRecordListFull2');
    } else if (dieaseName === diease[2]) {
      router.push('/(tabs)/records/healthStatusRecordListFull3');
    } else if (dieaseName === diease[3]) {
      router.push('/(tabs)/records/healthStatusRecordListFull4');
    } else if (dieaseName === diease[4]) {
      router.push('/(tabs)/records/healthStatusRecordListFull5');
    }
  };

  const handleNewPress = () => {
    router.push('/(tabs)/records/healthStatusRecordListEdit1'); 
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
        <Text style={styles.headerTitle}>Health Record</Text>
      </View>

      {diease.map((dieaseItem, index) => (
        <View key={index}>
          <View style={styles.date}>
            <Text style={styles.dateText}>2024.11.20</Text> {/* 임시 날짜 */}
          </View>
          <View style={styles.list}>
            <TouchableOpacity
              onPress={() => handleNavigate(dieaseItem)}  
              style={styles.listItem}
            >
              <Text style={styles.listText}>{dieaseItem}</Text>
              <Ionicons name="chevron-forward" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <TouchableOpacity onPress={handleNewPress} style={styles.fabButton}>
        <Text style={styles.fabText}>+ New</Text>
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
  },
});
