import { mockTransactions } from "@/shared/constants/mockData";
import { displayDate } from "./displayDate";

export function prepareList(data: typeof mockTransactions) {
    const sections: { title: string; data: typeof mockTransactions }[] = [];

    const sorted = [...data].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    let lastDate = "";

    sorted.forEach(item => {
        const dateStr = displayDate(item.date);
        if (dateStr !== lastDate) {
        // создаём новую секцию
        sections.push({ title: dateStr, data: [item] });
        lastDate = dateStr;
        } else {
        // добавляем карточку в существующую секцию
        sections[sections.length - 1].data.push(item);
        }
    });

    return sections;
}