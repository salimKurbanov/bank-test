import { View } from "react-native";
import { styles } from "./style/style";
import User from "./ui/User";
import IconQR from "@/shared/icons/IconQR";
import QRBtn from "./ui/QRBtn";

export default function Header() {
    return (
        <View style={styles.root}>
            <User name="Charlotte"/>
            <QRBtn />
        </View>
    );
}