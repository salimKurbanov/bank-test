import { Text } from "react-native";
import { TypeTitle } from "./types/types";
import { styles } from "./style/styles";

export default function Title({ label, style }: TypeTitle) {
    return (
        <Text style={[styles.title, style]}>
            {label}
        </Text>
    );
}

