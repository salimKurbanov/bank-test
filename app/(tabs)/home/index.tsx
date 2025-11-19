import { View, StyleSheet } from "react-native";
import { Colors } from "@/shared/constants/colors";
import HeadPanel from "@/widgets/head_panel/HeadPanel";
import CardList from "@/widgets/card_list/CardList";
import Expenses from "@/widgets/expenses/Expenses";
import List from "@/widgets/transaction_list/List";
import { mockTransactions } from "@/shared/constants/mockData";

export default function HomePage() {
    return (
        <View style={styles.container}>
            <HeadPanel />

            <CardList />

            <Expenses />

            <List list={mockTransactions}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: "center",
        backgroundColor: Colors.bgScreen
    }
});
