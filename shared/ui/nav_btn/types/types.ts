import { ReactNode } from "react"

export type TypeNavBtn = {
    icon: ReactNode,
    label?: string,
    gap: number,
    fontSize: number,
    fontColor?: string,
    callback?: () => void
}