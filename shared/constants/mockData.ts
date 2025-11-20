const now = new Date()

export const mockTransactions = [
    {
        id: "1",
        username: "Starbucks",
        type: "Money Transfer",
        date: String(now),
        price: 56.19,
        source: require('@/assets/images/user.jpg'),
    },
    {
        id: "2",
        username: "Anna Torres",
        type: "Food",
        date: "2024-06-09T10:23:00Z",
        price: 122.47,
        source: require('@/assets/images/starbuks.png'),
    },
    {
        id: "3",
        username: "Netflix",
        type: "Entertainment",
        date: "2024-06-09T08:10:00Z",
        price: 13.17,
        source: require('@/assets/images/netflix.png'),
    }
]

export const mockMotification = [
    {
        id: 1,
        title: "Received from Anna",
        money: "+$110",
        text_top: "Debit •• 4385",
        text_bottom: "$4,098.12",
        source: require('@/assets/images/user2.jpg'),
        date: String(now),
        type: "payments",
        isViewed: false,
    },
    {
        id: 2,
        title: "Payment to Netflix",
        money: "-$14.99",
        text_top: "Card •• 1289",
        text_bottom: "$3,982.15",
        source: false,
        date: "2025-06-16T21:12:00Z",
        type: "payments",
        isViewed: true,
    },
    {
        id: 3,
        title: "Transfer successful",
        text_top: "To Mike •• 9021",
        text_bottom: "$3,732.15",
        source: false,
        date: "2025-06-16T21:12:00Z",
        type: "travel",
        isViewed: false,
    },
    {
        id: 4,
        title: "Cashback received",
        text_top: "Groceries •• 6670",
        text_bottom: "$3,738.55",
        source: false,
        date: "2025-06-14T09:28:00Z",
        type: "security",
        isViewed: true,
    },
    {
        id: 5,
        title: "Your monthly report is ready",
        text_top: "Spending overview generated",
        text_bottom: "Tap to view the report",
        source: false,
        date: "2025-06-13T18:02:00Z",
        type: "info",
        isViewed: false,
    }
]