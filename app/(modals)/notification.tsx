import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function NotificationsModal() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Уведомления</Text>
      {/* Здесь — содержимое уведомлений, можно список */}
      <Pressable onPress={() => router.back()} style={styles.button}>
        <Text style={styles.buttonText}>Закрыть</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    padding: 12,
    backgroundColor: "#007AFF",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
