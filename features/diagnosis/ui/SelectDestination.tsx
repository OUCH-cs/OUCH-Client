import { View, Pressable, StyleSheet } from "react-native"
import { Label } from "@/shared/components/label/Label"
import theme from "@/shared/styles/theme"
import { SelectDestinationProps, DestinationType } from "../diagnosis.type";
import { useFormContext } from "react-hook-form";

const SelectDestination = ({selectedDestination}:SelectDestinationProps) => {

    const { setValue } = useFormContext<{ destination: DestinationType }>(); 
    
    return(
        <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.optionButton,
            selectedDestination === 'Hospital' && styles.selectedButton,
          ]}
          onPress={() => setValue("destination", "Hospital")}
        >
          <Label
            style={[
              styles.optionText,
              selectedDestination === 'Hospital' && styles.selectedText,
            ]}
          >
            Hospital
          </Label>
        </Pressable>
        <Pressable
          style={[
            styles.optionButton,
            selectedDestination === 'Pharmacy' && styles.selectedButton,
          ]}
          onPress={() => setValue("destination", "Pharmacy")}
        >
          <Label
            style={[
              styles.optionText,
              selectedDestination === 'Pharmacy' && styles.selectedText,
            ]}
          >
            Pharmacy
          </Label>
        </Pressable>
      </View>
    )
}

export default SelectDestination

export const styles = StyleSheet.create({

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 32,
    
      },
    
      optionButton: {
        flex: 1,
        borderRadius: 10,
        borderWidth: 1,
        height:56,
        borderColor: theme.colors.white_e5,
        alignItems: 'center',
        justifyContent: 'center'
      },
    
      selectedButton: {
        backgroundColor: theme.colors.tertiary,
        borderColor: theme.colors.primary,
      },
    
      optionText: {
        fontSize: 17,
        color: theme.colors.gray_7,
      },
    
      selectedText: {
        color: theme.colors.primary,
      },


})
