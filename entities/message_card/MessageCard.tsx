import { TypeMessageCard } from "./types/types";
import { Text, View } from "react-native";
import { styles } from "./style/styles";
import Price from "./ui/Price";
import Avatar from "@/shared/ui/avatar/Avatar";
import { formatDateShort } from "@/shared/lib/formatDateShort";

export default function MessageCard({ source, style, price, date, type, username }: TypeMessageCard) {
    return (
        <View style={[styles.root, style]}>
            <Avatar 
                style={styles.avatar}
                size={36}
                source={source}
            />
            <View style={styles.content}>
                <View style={styles.textContainer}>
                    <Text style={styles.textTop}>{username}</Text>
                    <Price value={price}/>
                </View>
                <View style={styles.textContainer}>
                    <View>
                        <View></View>
                        <Text style={styles.textBottom}>{type}</Text>
                    </View>
                    <Text style={styles.textBottom}>
                        {formatDateShort(date)}
                    </Text>
                </View>
            </View>
        </View>
    );
}

