import { Colors } from "@/shared/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    customTabs: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: Colors.bgScreen,
        borderTopWidth: 0,
        borderBottomWidth: 1,
        flexDirection: 'row',
        width: '100%',
    }
})