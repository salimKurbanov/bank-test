import { Text, View } from "react-native";
import { styles } from "../style/style";
import { TypeUser } from "../types/types";
import IconUser from "@/shared/icons/IconUser";
import IconChevronLeft from "@/shared/icons/IconChevronLeft";

export default function User({ name }: TypeUser) {
    return (
        <View style={styles.user}>
            <View style={styles.icon}>
                 <IconUser size={16}/>
            </View>
            <Text style={styles.text}>
                {name}
            </Text>
            <IconChevronLeft />
        </View>
    );
}