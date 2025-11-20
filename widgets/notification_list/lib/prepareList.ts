import { TypeNotificationItem } from "@/entities/notification_item/types/types";
import { displayNotificationDate } from "./displayDate";

export function prepareNotificationList(data: TypeNotificationItem[]) {
    const sections: { title: string; data: TypeNotificationItem[] }[] = [];

    const sorted = [...data].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    let lastDate = "";

    sorted.forEach(item => {
        const dateStr = displayNotificationDate(item.date);

        if (dateStr !== lastDate) {
            sections.push({ title: dateStr, data: [item] });
            lastDate = dateStr;
        } else {
            sections[sections.length - 1].data.push(item);
        }
    });

    return sections;
}
