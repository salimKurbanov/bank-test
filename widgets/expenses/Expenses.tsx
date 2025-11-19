import { Text, View } from "react-native";
import { styles } from "./style/style";
import ExpensesIndicator from "./ui/ExpensesIndicator";
import { expenses } from "@/shared/constants/mockExpenses";

export default function Expenses() {
    return (
        <View style={styles.expenses}>
            <View style={styles.top}>
                <Text style={styles.text}>Expenses in <Text style={[styles.text, styles.textPrimary]}>June</Text></Text>

                <Text style={styles.price}>
                    $5,091
                </Text>
            </View>

            <ExpensesIndicator list={expenses}/>
        </View>
    );
}