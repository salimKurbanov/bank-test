import { ImageSourcePropType } from "react-native"

export type TypeMessageCard = {
    source: ImageSourcePropType | undefined,
    price: number,
    type: string,
    date: string,
    username: string,
    style?: any
}