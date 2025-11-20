import { Colors } from "@/shared/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        gap: 12,
        flex: 1,
        marginBottom: 16,
        marginTop: 8,
    },
    content: {
        flex: 1,
    },
    top: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 14,
        fontWeight: 500,
        color: Colors.textPrimary,
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        backgroundColor: Colors.primary
    },
    money: {
        marginTop: 4,
        color: Colors.primary,
        fontWeight: 600,
        fontSize: 21,
    },
    middle: {
        marginTop: 6,
    },
    textMiddle: {
        fontSize: 14,
        color: Colors.textSecondary,
    },
    bottom: {
        marginTop: 6,
        flexDirection: 'row',
    },
    textBottom: {
        fontSize: 12,
        color: Colors.textMuted,
    },
})