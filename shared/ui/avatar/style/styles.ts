import { Colors } from "@/shared/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root: {
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: Colors.bgSurface,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    loader: {
        ...StyleSheet.absoluteFillObject,
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
    }
})