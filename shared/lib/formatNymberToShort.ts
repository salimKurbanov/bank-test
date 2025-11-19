export function formatNumberToShort(value: number): string {
    if (value >= 1_000_000_000) {
        return (value / 1_000_000_000).toFixed(2).replace(/\.00$/, "") + "B";
    }

    if (value >= 1_000_000) {
        return (value / 1_000_000).toFixed(2).replace(/\.00$/, "") + "M";
    }

    if (value >= 1_000) {
        return (value / 1_000).toFixed(2).replace(/\.00$/, "") + "K";
    }

    // маленькие числа:
    // если целое — оставить как есть
    if (Number.isInteger(value)) {
        return String(value);
    }

    // если дробное → два знака
    return value.toFixed(2);
}
