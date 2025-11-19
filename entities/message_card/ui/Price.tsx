import { formatNumberToShort } from "@/shared/lib/formatNymberToShort";
import { Text } from "react-native";
import { styles } from "../style/styles";

interface Props {
    value?: number
}

export default function Price({ value }: Props) {
    const price = value ? formatNumberToShort(value) : '0.00'

    return (
        <Text style={styles.textTop}>${price}</Text>
    );
}