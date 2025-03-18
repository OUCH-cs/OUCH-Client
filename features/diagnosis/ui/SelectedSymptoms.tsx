import { View, Pressable, FlatList, StyleSheet } from 'react-native';
import { Label } from '@/shared/components/label/Label';
import theme from '@/shared/styles/theme';
import { useFormContext } from "react-hook-form";

// 선택된 증상 렌더링 컴포넌트
const SelectedSymptoms = () => {
    const { getValues, setValue } = useFormContext<{ symptoms: string[] }>();
    const selectedSymptoms = getValues("symptoms") || []; 

    // 증상 제거 함수
    const removeSymptom = (symptom: string) => {
      const updatedSymptoms = selectedSymptoms.filter((s) => s !== symptom);
      setValue("symptoms", updatedSymptoms); 
    };

    return (
        <View style={styles.container}>
            <Label style={styles.selectedSymptoms}>Selected symptoms</Label>
            <FlatList
                data={selectedSymptoms}
                horizontal={true} 
                keyExtractor={(item) => item}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.symptomsContainer}
                renderItem={({ item }) => (
                    <View style={styles.symptomBadge}>
                        <Label style={styles.symptomText}>{item}</Label>
                        <Pressable onPress={() => removeSymptom(item)}>
                            <Label style={styles.removeText}>✕</Label>
                        </Pressable>
                    </View>
                )}
            />
        </View>
    );
}

export default SelectedSymptoms;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 18,
    },

    selectedSymptoms: {
        fontSize: 16,
        marginLeft: 16, 
        marginRight: 12
    },

    symptomsContainer: {
        flexDirection: "row",
        alignItems: "center",
        
    },

    symptomBadge: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 7,
        paddingHorizontal: 12,
        borderRadius: 100,
        borderColor: theme.colors.gray_de,
        borderWidth: 1,
        marginRight: 5,
    },

    symptomText: {
        fontSize: 12,
        color: theme.colors.gray_4,
        marginRight: 5,
    },

    removeText: {
        fontWeight: "bold",
    },
});


