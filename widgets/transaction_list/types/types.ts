import { TypeMessageCard } from "@/entities/message_card/types/types"

export type TypeTransactionItem = TypeMessageCard & {
    id: string
}

export type TypeTransactionList = {
    list: TypeTransactionItem[]
}