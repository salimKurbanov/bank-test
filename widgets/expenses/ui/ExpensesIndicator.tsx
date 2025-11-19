import { View } from "react-native";
import { TypeIndicator } from "../types/types";
import { styles } from "../style/style";

export default function ExpensesIndicator({ list }: TypeIndicator) {
    const total = list.reduce((sum, item) => sum + item.amount, 0);

    return (
        <View style={styles.indicator}>
            {list.map((item, i) => {
                const percent = item.amount / total;
                const width = percent * 100;

                return (
                    <View
                        key={i}
                        style={[styles.indicatorItem, {
                            width: `${width}%`,
                            backgroundColor: item.color,
                        }]}
                    >
                    </View>
                );
            })}
        </View>
    );
}