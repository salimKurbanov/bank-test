import { ScrollView, View } from "react-native";
import { styles } from "./style/style";
import AddBtn from "./ui/AddBtn";
import Card from "@/entities/card/Card";

export default function CardList() {
    return (
        <View style={{
            height: 100,
            marginBottom: 24,
        }}
        >
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.cardList}
            >
                <Card 
                    type={'debit'}
                    price={4098.12}
                    cardNumber={4385}
                /> 
                <Card 
                    type={'virtual'}
                    price={14.71}
                    cardNumber={9081}
                /> 
                <Card 
                    type={'virtual'}
                    price={14.71}
                    cardNumber={9081}
                /> 
                <AddBtn />
            </ScrollView>
        </View>
    );
}