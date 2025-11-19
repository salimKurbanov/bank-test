export function formatNumber(num: number): string {
    let formatted: string;

    if (num >= 100000) {
        // делим на 1000 и добавляем 'k'
        let value = num / 1000;

        // округляем до 2 знаков после запятой
        value = Math.round(value * 100) / 100;

        // проверяем, есть ли дробная часть
        const parts = value % 1 === 0 ? value.toString() : value.toFixed(2);

        formatted = parts + 'k';
    } else {
        // форматируем с разделителем тысяч
        formatted = num.toLocaleString(undefined, {
            minimumFractionDigits: num % 1 === 0 ? 0 : 2,
            maximumFractionDigits: 2,
        });
    }

    return formatted;
}