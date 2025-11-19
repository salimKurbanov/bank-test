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