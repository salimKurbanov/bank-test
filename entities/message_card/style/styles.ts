import { StyleSheet } from "react-native";
import { Colors } from "@/shared/constants/colors";

export const styles = StyleSheet.create({
    root: {
        width: '100%',
        backgroundColor: Colors.bgSurface,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingHorizontal: 16,
        paddingVertical: 17,
        height: 70,
    },
    avatar: {

    },
    content: {
        flex: 1,
        alignSelf: 'stretch',
        gap: 4,
        justifyContent: 'space-between',
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textTop: {
        fontWeight: 500,
        fontSize: 14,
        color: Colors.textPrimary
    },
    transactionType: {
        flexDirection: 'row',
        gap: 6,
        alignItems: 'center',
    },
    textBottom: {
        fontWeight: 400,
        fontSize: 14,
        color: Colors.textTertiary
    },
    typeContainer: {
        flexDirection: 'row',
        gap: 6,
        alignItems: 'center',
    },
    dot: {
        width: 6,
        height: 6,
        backgroundColor: Colors.primary,
        borderRadius: '50%',
    }
})