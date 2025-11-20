import { Colors } from "@/shared/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root: {
        paddingTop: 35,
        paddingBottom: 16,
        paddingHorizontal: 16,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.bgScreen,
    },
    text: {
        fontSize: 21,
        fontWeight: 500,
        color: Colors.textPrimary
    },
    link: {
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 7,
    }
})