import { useAuthStore } from "@/features/auth/services/authStore";
import { View, FlatList, Pressable, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Label } from "@/shared/components/label/Label";
import { Ionicons } from "@expo/vector-icons";
import theme from "@/shared/styles/theme";
import HomeDiagnosis from "@/assets/icons/home/HomeDiagnosis";
import HomeCamera from "@/assets/icons/home/HomeCamera";
import HomeGuide from "@/assets/icons/home/HomeGuide";
import HospitalRate from "@/assets/icons/hospital/HospitalRate";
import { Dimensions } from "react-native";
import { useRouter } from "expo-router";
import HomeLocation from "@/assets/icons/home/HomeLocation";


export default function HomeScreen() {
  const isSignedIn = useAuthStore((state) => state.isSignedIn);
  const signOut = useAuthStore((state) => state.signOut);
  const router = useRouter();
  //mock data 처리
  const hospitals = [
    { id: "1", name: "Hanyang Hospital", rating: 4.3, distance: "768m", openStatus: "Open / Closed every Wednesday" },
    { id: "2", name: "Hanyang Hospital", rating: 4.3, distance: "768m", openStatus: "Open / Closed every Wednesday" },
    { id: "3", name: "Hanyang Hospital", rating: 4.3, distance: "768m", openStatus: "Open / Closed every Wednesday" },
    { id: "4", name: "Hanyang Hospital", rating: 4.3, distance: "768m", openStatus: "Open / Closed every Wednesday" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* 헤더, 상단 위치, 언어 선택 임시 */}
      <View style={styles.header}>
        <View style={styles.location}>
          <HomeLocation/>
          <Label style={styles.locationText} >Banseok-dong </Label>
        </View>
        <Label style={styles.language}>ENG</Label>
      </View>
      <Pressable style={styles.diagnosisContainer} onPress={() => router.push("/diagnosis")}>
        <HomeDiagnosis style={styles.homeIcon}/>
        <Label style={styles.cardText}>
          Let’s fill out the <Label style={{color: theme.colors.primary}}>self-diagnosis form</Label> to explain your disease!
        </Label>
      </Pressable>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <HomeCamera style={styles.buttonIcon}/>
          <Label style={styles.buttonText}>Text translation</Label>
        </Pressable>
        <Pressable style={[styles.button, styles.selectedButton]} onPress={() => {}}>
          <HomeGuide style={styles.buttonIcon}/>
          <Label style={[styles.buttonText, styles.selectedText]}>OUCH guide</Label>
        </Pressable>
      </View>
      <>
        <Label style={styles.sectionTitle}>recommended hospital</Label>
        <>
          <FlatList
            data={hospitals}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <Pressable style={styles.hospitalCard} onPress={()=>{}}>
                <Label style={styles.hospitalName}>{item.name}</Label>
                <Label style={styles.hospitalStatus}>{item.openStatus}</Label>
                <View style={styles.hospital}>
                  <HospitalRate/>
                  <Label style={styles.ratingText}>{item.rating}</Label>
                  <Label style={styles.separator}> · </Label>
                  <Label style={styles.hospitalDistance}>{item.distance}</Label>
                </View>
              </Pressable>
            )}
          />
        </>   
      </>
    </SafeAreaView>
  );
}



const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal:16,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical:13,
    marginBottom: 27,
  },

  location: {
    flexDirection: "row",
    alignItems: "center",
  },

  locationText: {
    fontSize: 14,
    marginLeft: 8,
  },
  
  language: {
    fontSize: 16,
    fontFamily: "Pretendard-Bold"
  },
  
  diagnosisContainer: {
    backgroundColor: theme.colors.white,
    height: height * 0.25,
    borderRadius: 20,
    padding: 36,
    alignItems: "center",
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    marginBottom:8,
  },

  homeIcon: {
    marginBottom: 6,
  },

  cardText: {
    fontSize: 18,
    textAlign: "center",
    color: theme.colors.black,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap:8
  },

  button: {
    flex: 1,
    height: height * 0.15,
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    paddingVertical:42,
    alignItems: "center",
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04, 
    shadowRadius: 4,
    marginBottom:60,
  },

  buttonIcon: {
    marginBottom:6,
  },

  buttonText: {
    fontSize: 14,
  },

  selectedButton: { 
    backgroundColor: theme.colors.tertiary
  },

  selectedText: {
    color: theme.colors.primary
  },

  sectionTitle: {
    fontSize: 18,
    marginBottom: 16,
  },

  hospitalCard: {
    height: height * 0.15,
    width: width*0.65,
    backgroundColor: theme.colors.white,
    padding: 26,
    borderRadius: 20,
    marginRight: 10,
    shadowColor: theme.colors.white,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04, 
    shadowRadius: 4,
  },

  hospitalName: { 
    fontSize: 16
  },

  hospitalStatus: {
    fontSize: 12,
    color: theme.colors.gray_7,
    marginVertical: 5,
    marginBottom:14,
  },

  hospital: { 
    flexDirection: "row",
    alignItems: "center",
  },

  hospitalDistance: {
    fontSize:12,
  },
  separator: {
    fontSize:12,
  },

  ratingText: {
    fontSize: 12,
    color: theme.colors.yellow 
  },
});