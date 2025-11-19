import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";
import MessageCard from "@/entities/message_card/MessageCard";
import { Colors } from "@/shared/constants/colors";

export default function HomePage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.bgScreen
    },
    title: {
        fontSize: 32,
        marginBottom: 20,
    },
    button: {
        padding: 12,
        backgroundColor: "#007AFF",
        borderRadius: 8,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
});
