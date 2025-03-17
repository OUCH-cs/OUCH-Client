import { SYMPTOMS } from '@/shared/mocks/data';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { Label } from '@/shared/components/label/Label';
import theme from '@/shared/styles/theme';
import { useStore } from '../services/useStore';

const ITEMS_PER_ROW = 5; // 한 줄에 3개씩 배치

const SymptomsList = () => {
    const { selectedSymptoms, addSymptom, removeSymptom } = useStore();

    const toggleSymptom = (symptom: string) => {
        if (selectedSymptoms.includes(symptom)) {
          removeSymptom(symptom);
        } else {
          addSymptom(symptom);
        }
      };
    
    const chunkArray = (arr: string[], size: number) => {
      return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
      );
    };
    
    const groupedSymptoms = chunkArray(SYMPTOMS, ITEMS_PER_ROW);

    return(
        <>
        {groupedSymptoms.map((group, index) => (
            <FlatList
              key={`group-${index}`}
              data={group}
              horizontal
              pagingEnabled
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
        
    )
}
export default SymptomsList


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
      flexWrap: 'wrap',
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