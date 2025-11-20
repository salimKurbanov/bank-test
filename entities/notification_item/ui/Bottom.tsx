import { formatDateFull } from "@/shared/lib/formatDateFull";
import { Text, View } from "react-native";
import { styles } from "../styles/style";

interface Props {
    date: string,
    type: string
}

export default function Bottom({ date, type}: Props) {
    return (
        <View style={styles.bottom}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textBottom}>{formatDateFull(date)}</Text>
            <Text style={styles.textBottom}> · </Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={[styles.textBottom, {textTransform: 'capitalize'}]}>{type}</Text>
        </View>
    );
}