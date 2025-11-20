export function displayNotificationDate(iso: string) {
    const date = new Date(iso);
    const now = new Date();

    const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const todayOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterdayOnly = new Date(todayOnly);
    yesterdayOnly.setDate(todayOnly.getDate() - 1);

    const day = date.getDate();
    const year = date.getFullYear();

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const fullMonth = months[date.getMonth()];

    if (dateOnly.getTime() === todayOnly.getTime()) {
        return `Today, ${day} ${fullMonth}`;
    }

    if (dateOnly.getTime() === yesterdayOnly.getTime()) {
        return `Yesterday, ${day} ${fullMonth}`;
    }

    return `${day} ${fullMonth}, ${year}`;
}
