import { View, StyleSheet } from "react-native";
import { Colors } from "@/shared/constants/colors";
import { mockMotification } from "@/shared/constants/mockData";
import Tabs from "@/entities/notification_tabs/Tabs";
import NotificationList from "@/widgets/notification_list/NotificationList";

export default function NotificationsModal() {
  return (
    <View style={styles.notification}>
        <Tabs />

        <NotificationList list={mockMotification}/>
    </View>
  );
}

const styles = StyleSheet.create({
    notification: {
        flex: 1,
        backgroundColor: Colors.bgScreen,
    }
});
