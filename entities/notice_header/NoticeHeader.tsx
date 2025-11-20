import { Pressable, Text, View } from "react-native";
import { styles } from "./style/style";
import { Link, router } from "expo-router";
import IconLeftChevron from "@/shared/icons/IconLeftChevron";
import IconNoticeChat from "@/shared/icons/IconNoticeChat";

export default function NoticeHeader() {
    const isPresented = router.canGoBack();

    return (
        <View style={styles.root}>
            {isPresented && <Link style={styles.link} href="../">
                <IconLeftChevron />
            </Link>}

            <Text style={styles.text}>Notifications</Text>

            <Pressable>
                <IconNoticeChat size={24}/>
            </Pressable>
        </View>
    );
}