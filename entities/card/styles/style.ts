import { Colors } from "@/shared/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 100,
        borderRadius: 16, 
        overflow: 'hidden',
    },
    debit: {

    },
    virtual: {
        
    },
    image: {
        width: '100%',
        height: '100%'
    },
    content: {
        padding: 12,
        width: '100%',
        height: '100%'
    },
    price: {
        fontWeight: 600,
        fontSize: 18,
        color: Colors.textPrimary,
        marginTop: 13,
        marginBottom: 6,
    },
    textContainer: {
        flexDirection: 'row',
        gap: 10,
    },
    text: {
        flexShrink: 0,
        color: Colors.textPrimary,
        fontSize: 14,
        textTransform: 'capitalize',
    },
    cardNumber: {
        flexShrink: 0,
        color: Colors.textPrimary,
        fontSize: 14,
        marginLeft: 'auto',
    }
})