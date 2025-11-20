import { Colors } from "@/shared/constants/colors";
import { StyleSheet, Text, View } from "react-native";

export default function Tabs() {
    const activeLink = 'all'
    const tabs = ['all', 'payments', 'system', 'delivery', 'travel']

    return (
        <View style={styles.root}>
            {tabs.map(el => 
            <View 
                key={el}
                style={[styles.item, { borderBottomColor: activeLink === el ? Colors.primary : '' }]}
            >
                <Text style={[styles.text, { color: activeLink === el ? Colors.primary : Colors.textSecondary }]}>{el}</Text>
            </View>)}
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        backgroundColor: Colors.bgScreen
    },
    item: {
        width: 'auto',
        padding: 12,
        borderBottomWidth: 1,
    },
    text: {
        fontSize: 14,
        textTransform: 'capitalize',
    }
})