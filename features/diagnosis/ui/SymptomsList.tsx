import { FlatList, Pressable, StyleSheet } from "react-native";
import { Label } from "@/shared/components/label/Label";
import theme from "@/shared/styles/theme";
import { useFormContext } from "react-hook-form"; 
import { useSymptomsStore } from "../services/useDiagnosisStore";
import { SYMPTOMS } from '@/shared/mocks/data';

// 한줄당 렌더링할 증상의 개수
const ITEMS_PER_ROW = 5; 

// 증상 카테고리 리스트 컴포넌트
const SymptomsList = () => {
    const { setValue, watch } = useFormContext<{ symptoms: string[] }>(); 
    const selectedSymptoms: string[] = watch("symptoms") || []; 
    const { customSymptoms } = useSymptomsStore();
    const allSymptoms = [...SYMPTOMS, ...customSymptoms];

    // 증상 선택시 선택된 증상 상태 변경
    const toggleSymptom = (symptom: string) => {
      const updatedSymptoms = selectedSymptoms.includes(symptom)
        ? selectedSymptoms.filter((s: string) => s !== symptom) 
        : [...selectedSymptoms, symptom]; 

      setValue("symptoms", updatedSymptoms); 
    };

    // 한 줄에 몇개 씩 끊어 렌더링하기 위한 함수
    const chunkArray = (arr: string[], size: number) => {
      return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
      );
    };

    const groupedSymptoms = chunkArray(allSymptoms, ITEMS_PER_ROW);

    return (
        <>
        {groupedSymptoms.map((group, index) => (
            <FlatList
              key={`group-${index}`}
              data={group}
              horizontal
              pagingEnabled
              scrollEnabled={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item}
              contentContainerStyle={styles.symptomsContainer}
              renderItem={({ item }) => (
                <Pressable
                  style={[
                    styles.symptomButton,
                    selectedSymptoms.includes(item) && styles.selectedButton,
                  ]}
                  onPress={() => toggleSymptom(item)}
                >
                  <Label
                    style={[
                      styles.symptomText,
                      selectedSymptoms.includes(item) && styles.selectedText,
                    ]}
                  >
                    {item}
                  </Label>
                </Pressable>
              )}
            />
          ))}
        </>
    );
}

export default SymptomsList;



export const styles = StyleSheet.create({

    container: {
      paddingTop:46,
    },
  
    question: {
      fontSize: 21,
      textAlign: 'center',
      marginBottom: 33,
    },
  
    symptomsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop:16,
      gap:4,
    },
  
    row: {
      gap:4,
    },
  
    symptomButton: {
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 400,
      borderWidth: 1,
      borderColor: theme.colors.white_e5,
      alignItems: 'center',
      justifyContent: 'center'
    },
  
    selectedButton: {
      backgroundColor: theme.colors.tertiary,
      borderColor: theme.colors.primary,
    },
  
    symptomText: {
      fontSize: 16,
      color: theme.colors.gray_7,
    },

    selectedText: {
        color: theme.colors.primary,
      },
  });