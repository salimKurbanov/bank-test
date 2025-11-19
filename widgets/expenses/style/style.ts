import { Colors } from "@/shared/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    expenses: {
        width: '100%',
    },
    top: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    text: {
        color: Colors.textPrimary,
        fontWeight: 500,
        fontSize: 21,
    },
    textPrimary: {
        color: Colors.primary
    },
    price: {
        color: Colors.textSecondary,
        fontSize: 18,
    },
    indicator: {
        width: '100%',
        flexDirection: 'row',
        gap: 2,
    },
    indicatorItem: {
        height: 8,
        borderRadius: 3,
        overflow: "hidden",
    }
})