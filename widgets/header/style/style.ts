import { Colors } from "@/shared/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.bgScreen,
        paddingHorizontal: 16,
    },
    user: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 12,
    },
    text: {
        color: Colors.textPrimary,
        fontSize: 18,
        fontWeight: 500,
    },
    icon: {
        width: 36,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.bgSurface,
        borderRadius: '50%',
    }
})