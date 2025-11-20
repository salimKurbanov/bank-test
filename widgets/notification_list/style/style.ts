import { Colors } from "@/shared/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    listContainer: {
        marginTop: 16,
        width: '100%',
        flex: 1,
        paddingHorizontal: 16,
    },
    list: {
        // gap: 4,
    },
    title: {
        fontSize: 12,
        fontWeight: 600,
        color: Colors.textSecondary,
        textTransform: 'uppercase',
        marginBottom: 8,
    },
    sectionDivider: {
        height: 1,
        backgroundColor: Colors.borderPrymary,
        // marginTop: 16,
        marginBottom: 16,
    }
})