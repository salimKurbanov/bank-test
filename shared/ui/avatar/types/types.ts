import { ReactNode } from "react";
import { ImageProps } from "react-native";

export type TypeAvatar = ImageProps & {
    size: number,
    style?: any,
    icon?: ReactNode
}