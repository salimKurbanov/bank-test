import { TypeAddBtn } from "../types/types";
import { Pressable } from "react-native";
import { Colors } from "@/shared/constants/colors";
import { styles } from "../style/style";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function AddBtn({ callback }: TypeAddBtn) {
    return (
        <Pressable style={styles.addBtn} onPress={callback ? () => callback() : () => {}}>
            <AntDesign name="plus" size={14} color={Colors.textPrimary} />
        </Pressable>
    );
}