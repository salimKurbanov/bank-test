import { router } from "expo-router";
import { Pressable, View } from "react-native";
import { styles } from "./style/style";
import { Colors } from '@/shared/constants/colors';

import Ionicons from '@expo/vector-icons/Ionicons';
import User from "./ui/User";
import QRBtn from "./ui/QRBtn";

export default function Header() {
    return (
        <View style={styles.root}>
            <User name="Charlotte"/>
            <View style={{flexDirection: 'row', gap: 20}}>
                <Pressable onPress={() => router.push("/modals/notification")}>
                    <Ionicons name="notifications" size={20} color={Colors.textPrimary} />
                </Pressable>
                <QRBtn />
            </View>
        </View>
    );
}