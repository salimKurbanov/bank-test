import { ImageSourcePropType } from "react-native"

export type TypeNotificationItem = {
    id?: number,
    title: string,
    money?: string,
    text_top: string,
    text_bottom: string,
    source: ImageSourcePropType | undefined
    date: string,
    type: string,
    isViewed: boolean
}