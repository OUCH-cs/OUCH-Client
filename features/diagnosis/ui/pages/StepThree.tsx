import { useState } from 'react';
import { View, Pressable, StyleSheet, Button } from 'react-native';
import SelectedSymptoms from './SelectedSymptoms';
import CustomButton from '@/shared/components/button/CustomButton';
import theme from '@/shared/styles/theme';
import { Label } from '@/shared/components/label/Label';
import Collapsible from 'react-native-collapsible';
import { Ionicons } from "@expo/vector-icons";
import { DURATION_OPTIONS } from '@/shared/mocks/data';
import { useFormContext } from "react-hook-form"; 
import { StepProps } from '../diagnosis.type';

const StepThree = ({ onNext }: StepProps) => {
  const { setValue, watch } = useFormContext<{ duration: string}>();
  const duration: string = watch("duration") || "";
  const [dropdownOpen, setDropdownOpen] = useState(true);

  return (
    <View style={styles.container}>
      <Label style={styles.question}>How long did the symptoms lasted?</Label>
      <SelectedSymptoms/>
      <View style={styles.card}>
        <Pressable
          style={styles.dropdownButton}
          onPress={() => setDropdownOpen(!dropdownOpen)}
        >
          <Label style={styles.dropdownText}>
            {duration ? duration : 'Duration of symptoms'}
          </Label>
          <Ionicons name={!dropdownOpen ? "chevron-up" : "chevron-down"} size={20} color="black" />
        </Pressable>
        <Collapsible collapsed={dropdownOpen}>
        {!dropdownOpen && <View style={styles.fullWidthLine} />}
        {DURATION_OPTIONS.map((item)=>(
              <Pressable
                key={item}
                style={[
                  styles.dropdownItem,
                  duration === item && styles.selectedDropdownItem,
                ]}
                onPress={() => {
                  setValue("duration", item);
                  setDropdownOpen(false);
                }}
              >
                <Label
                  style={[
                    styles.dropdownItemText,
                  ]}
                >
                  {item}
                </Label>
              </Pressable>
            )
          )
        }
        </Collapsible>
      </View>
      
      <CustomButton style={styles.nextButton} disabled={!duration} onPress={()=>{onNext()}}>
        <Label style={styles.nextButtonText}>Next</Label>
      </CustomButton>
    </View>
  );
};

export default StepThree;

export const styles = StyleSheet.create({

  container: {
    paddingTop:46,
  },

  question: {
    fontSize: 21,
    textAlign: 'center',
    marginBottom: 22,
  },
  
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    borderColor: theme.colors.white_e5,
    borderWidth:1,
    paddingVertical: 13,
    marginBottom: 24,
    //그림자 안드로이드랑 ios 따로
  },
  fullWidthLine: {
    height: 1,
    margin: 5,// 간격 조정
    marginHorizontal: -18, 
  },
  dropdownButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  dropdownText: {
    fontSize: 16,
    color: theme.colors.gray_7,
  },
  
  dropdownItem: {
    height:56,
    justifyContent: 'center',
    paddingVertical: 13,
    paddingHorizontal: 18,
  },

  selectedDropdownItem: {
    backgroundColor: theme.colors.tertiary
  },

  dropdownItemText: {
    fontSize: 16,
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