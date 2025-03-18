import { View, Text, Pressable, StyleSheet } from 'react-native';
import CustomButton from '@/shared/components/button/CustomButton';
import { Label } from '@/shared/components/label/Label';
import theme from '@/shared/styles/theme';
import PlusButton from '@/assets/icons/diagnosis/PlusButton';
import SymptomsList from '../SymptomsList';
import { StepProps } from '../../diagnosis.type';
import { useDiagnosisStore } from '../../services/pageState';
import AddSymptoms from './AddSymptomsPage';

const StepTwo = ({ onNext }: StepProps) => {
  const { currentPage, setPage } = useDiagnosisStore();

  return (
    <View style={styles.container} >
      {currentPage === "main" ? (
        <>
          <Text style={styles.question}>Please select your symptoms</Text>
          <SymptomsList/>
          <Pressable
              style={styles.addButton}
              onPress={() => setPage("add")}
          >
            <PlusButton/>
          </Pressable>
          <CustomButton style={styles.nextButton} onPress={()=>{onNext()}}>
            <Label style={styles.nextButtonText}>Next</Label>
          </CustomButton>
        </>
      ) : (
        <AddSymptoms onClose={() => setPage("main")}/>
      )
      }
    </View>
  );
}

export default StepTwo

export const styles = StyleSheet.create({

  container: {
    paddingTop:46,
  },

  question: {
    fontSize: 21,
    textAlign: 'center',
    marginBottom: 33,
  },

  addButton: {
    padding:32,
    marginBottom:60,
    alignItems: 'center',
    justifyContent: 'center'  
  },

  addText: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  nextButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    borderRadius: 10,
    height:48,
    alignItems: 'center',
    justifyContent: 'center'
  },

  nextButtonText: {
    color: theme.colors.white,
    fontSize: 18,
  },
});