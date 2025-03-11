import { View, Pressable, StyleSheet} from 'react-native';
import { Label } from '@/shared/components/label/Label';
import theme from '@/shared/styles/theme';
import { useFormContext } from "react-hook-form"


const SelectedSymptoms = () => {
    const { getValues, setValue } = useFormContext<{ symptoms: string[] }>();
    const selectedSymptoms = getValues("symptoms") || []; 
      
    const removeSymptom = (symptom: string) => {
      const updatedSymptoms = selectedSymptoms.filter((s) => s !== symptom);
      setValue("symptoms", updatedSymptoms); 
    };

    return (
        <View style={styles.symptomsContainer}>
            <Label style={styles.selectedSymptoms}>selected symptoms</Label>
            {selectedSymptoms.map((symptom) => (
            <View key={symptom} style={styles.symptomBadge}>
                <Label style={styles.symptomText}>{symptom}</Label>
                <Pressable onPress={() => removeSymptom(symptom)}>
                <Label style={styles.removeText}>✕</Label>
                </Pressable>
            </View>
            ))}
        </View>
    )
}

export default SelectedSymptoms

export const styles = StyleSheet.create({
    symptomsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 18,
      },
    
      selectedSymptoms: {
        fontSize:16,
        marginLeft:16, 
        marginRight:12
      },
    
      symptomBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 7,
        paddingHorizontal: 12,
        borderRadius: 100,
        borderColor:theme.colors.gray_de,
        borderWidth:1,
        marginRight: 5,
      },
    
      symptomText: {
        fontSize: 12,
        color: theme.colors.gray_4,
        marginRight: 5,
      },
    
      removeText: {
        fontWeight: 'bold',
      },
})