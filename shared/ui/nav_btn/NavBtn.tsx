import { Text, Pressable } from "react-native";
import { styles } from "./style/style";
import { TypeNavBtn } from "./types/types";

export default function NavBtn({ label, icon, gap, fontSize, callback }: TypeNavBtn) {
    return (
        <Pressable style={[styles.root]} onPress={callback ? () => callback() : () => {}}>
            {icon}
            {!!label 
            && <Text style={[styles.text, {fontSize, marginTop: gap}]}>
                {label}
               </Text>
            }
        </Pressable>
    );
}