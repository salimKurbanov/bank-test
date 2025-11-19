import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";
import MessageCard from "@/entities/message_card/MessageCard";
import { Colors } from "@/shared/constants/colors";
import Card from "@/entities/card/Card";
import NavBtn from "@/shared/ui/nav_btn/NavBtn";
import IconEarth from "@/shared/icons/IconEarth";
import HeadPanel from "@/widgets/head_panel/HeadPanel";

export default function HomePage() {
    return (
        <View style={styles.container}>
            <HeadPanel />
            {/* <Pressable onPress={() => router.push("/(modals)/notifications")} style={styles.button}>
                <Text style={styles.buttonText}>Открыть уведомления</Text>
            </Pressable> */}
            <MessageCard 
                source={require('@/assets/images/starbuks.png')}
                price={10000}
                type="Money Transfer"
                date="2024-06-09T12:08:00Z"
                username="Matthew Billson"
            />
            {/* <Card 
                type={'virtual'}
                price={10000}
                cardNumber={3565}
            />  */}
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
