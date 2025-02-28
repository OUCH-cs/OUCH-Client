import { View, Text, Button, Pressable, StyleSheet, FlatList } from "react-native";
import { useRouter } from 'expo-router';
import Collapsible from "react-native-collapsible";
import { useState } from "react";
import theme from "@/shared/styles/theme";
import { Ionicons } from "@expo/vector-icons";
import { Label } from "@/shared/components/label/Label";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/shared/components/button/CustomButton";
import { FAQ_DATA } from "@/shared/mocks/data";

export default function DiagnosisScreen() {
  const router = useRouter();
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id : any) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/*헤더는 임시.*/}
      <Label style={styles.header}>Self-diagnosis</Label>
      {/*드롭다운 공통 컴포넌트 구현 후 수정 예정*/}
      <FlatList
        data={FAQ_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Pressable onPress={() => toggleAccordion(item.id)} style={styles.cardHeader}>
              <Label style={styles.question}>{item.question}</Label>
              <Ionicons name={openId === item.id ? "chevron-up" : "chevron-down"} size={20} color="black" />
            </Pressable>
            {openId === item.id && <View style={styles.fullWidthLine} />}
            <Collapsible collapsed={openId !== item.id}>
              <View style={styles.answerContainer}>
                <Text style={styles.answer}>{item.answer}</Text>
              </View>
            </Collapsible>
          </View>
        )}
        ListFooterComponent={ 
          <CustomButton style={styles.nextButton} onPress={()=> {}}>
            <Text style={styles.nextButtonText}>Next</Text>
          </CustomButton>
        }
      />
      {/*뒤로가기는 임시*/}
      <Button title="뒤로 가기" onPress={() => router.back()} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal:16,
  },
  header: {
    fontSize: 20,
    marginBottom: 48,
    marginTop: 16,
    alignSelf: "center",
  },

  card: {
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    borderColor: theme.colors.white_e5,
    borderWidth:1,
    paddingVertical: 13,
    paddingHorizontal: 18,
    marginBottom: 12,
    elevation: 3,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },

  question: {
    fontSize: 16,
  },
  
  answerContainer: {
    paddingTop: 8,
    paddingVertical: 13,
    paddingHorizontal: 18,
  },

  answer: {
    lineHeight: 20,
    fontSize: 14,
    color: theme.colors.black,
  },

  fullWidthLine: {
    height: 1,
    backgroundColor: theme.colors.white_e5,
    margin: 12,
    marginHorizontal: -18,
  },

  nextButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    borderRadius: 10,
    height:48,
    marginTop:30,
    alignItems: 'center',
    justifyContent: 'center'
  },

  nextButtonText: {
    color: theme.colors.white,
    fontSize: 18,

  },
});

