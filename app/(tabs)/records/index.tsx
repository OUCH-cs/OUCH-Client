import { View, Text, StyleSheet, SafeAreaView } from "react-native";



export default function RecordsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Medical Record섹션 */}
      <View style={styles.topSection}>
        <Text style={styles.sectionTitle}>Medical Record</Text>
          <View style={styles.recordItemTop}>
            <Text style={styles.labelTop}>Date of visit</Text>
            <Text style={styles.valueTop}>2024.11.24</Text>
          </View>
          <View style={styles.recordItemTop}>
            <Text style={styles.labelTop}>Visiting Hospital</Text>
            <Text style={styles.valueTop}>Hanyang Hospital</Text>
          </View>
          <View style={styles.recordItemTop}>
            <Text style={styles.labelTop}>Medical Subjects</Text>
            <Text style={styles.valueTop}>sgdfgsdgfg</Text>
          </View>
          <View style={styles.recordItemTop}>
            <Text style={styles.labelTop}>Symptoms</Text>
            <Text style={styles.valueTop}>sgdfgsdgfg</Text>
          </View>
          <View style={styles.cornerRadiusTop}>
            <Text style={styles.labelTop}>Treatment Summary</Text>
            <Text style={styles.valueTop}>asdfasdfasasdfasdfasdfasf</Text>
          </View>
      </View>

      {/* Health Status 섹션 */}
      <View style={styles.bottomSection}>
        <Text style={styles.sectionTitle}>Health Status</Text>
          <View style={styles.recordItemBottom}>
            <Text style={styles.labelBottom}>Disease</Text>
            <Text style={styles.valueBottom}>asdfasdfasd</Text>
          </View>
          <View style={styles.recordItemBottom}>
            <Text style={styles.labelBottom}>Allergy</Text>
            <Text style={styles.valueBottom}>asdfasdfasd</Text>
          </View>
          <View style={styles.cornerRadiusBotttom}>
            <Text style={styles.labelBottom}>Blood pressure</Text>
            <Text style={styles.valueBottom}>asdfasdfasd</Text>
          </View>
        </View>
    </SafeAreaView>
  );
}

// 스타일
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F9FC", 
    marginTop:14,
  },
  topSection: {
    backgroundColor: "#E3F5F6",
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
    backgroundColor: "#E3F5F6",
    borderRadius: 12,
    marginLeft:16,
    marginRight:16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
  },
  inner: {
    backgroundColor: "#FFFFFF",
    margin:0,
  },
  sectionTitle: {
    marginTop:13,
    paddingLeft:16,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12, 
  },
  recordItemTop: {
    backgroundColor:"#FFFFFF",
    paddingLeft:16,
    justifyContent: "space-between",
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  recordItemBottom: {
    backgroundColor:"#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    borderBottomColor: "#E5E7EB",
  },
  cornerRadiusTop: {
    backgroundColor:"#FFFFFF",
    paddingLeft:16,
    justifyContent: "space-between",
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  cornerRadiusBotttom: {
    backgroundColor:"#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    borderBottomColor: "#E5E7EB",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  labelTop: {
    fontSize: 16,
    fontWeight: "400",
    color: "#000",
    marginBottom:4,
    marginTop:9,
  },
  valueTop: {
    fontSize: 14,
    color: "#656565",
    fontWeight: "400",
    marginBottom: 9,
  },
  labelBottom: {
    fontSize: 16,
    fontWeight: "400",
    color: "#000",
    marginVertical: 9,
    marginLeft:16,
  },
  valueBottom: {
    fontSize: 14,
    color: "#656565",
    fontWeight: "400",
    marginVertical: 9,
    marginRight:16,
  },
});

