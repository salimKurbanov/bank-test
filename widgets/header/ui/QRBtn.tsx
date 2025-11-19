import IconQR from "@/shared/icons/IconQR";
import { Pressable } from "react-native";
import { TypeQRBtn } from "../types/types";

export default function QRBtn({ callback }: TypeQRBtn) {
    return (
        <Pressable onPress={callback ? () => callback() : () => {}}>
            <IconQR size={20}/>
        </Pressable>
    );
}