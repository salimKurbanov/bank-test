import { Text, Pressable } from "react-native";
import { styles } from "./style/style";
import { TypeNavBtn } from "./types/types";
import { Colors } from "@/shared/constants/colors";

export default function NavBtn({ label, icon, gap, fontSize, fontColor=Colors.textPrimary, callback }: TypeNavBtn) {
    return (
        <Pressable style={[styles.root]} onPress={callback ? () => callback() : () => {}}>
            {icon}
            {!!label 
            && <Text style={{fontSize, marginTop: gap, color: fontColor}}>
                {label}
               </Text>
            }
        </Pressable>
    );
}