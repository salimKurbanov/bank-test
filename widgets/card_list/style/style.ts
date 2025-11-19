import { Colors } from "@/shared/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardList: {
        flexDirection: 'row',
        gap: 8,
        height: 100,
    },
    addBtn: {
        borderRadius: 16,
        backgroundColor: Colors.bgSurface,
        paddingHorizontal: 13,
        justifyContent: 'center',
        height: 100,
    }
})