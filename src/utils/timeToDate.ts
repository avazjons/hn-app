export function timeToDate(timestamp: number) {
    if (!timestamp) return;
    return new Date(timestamp * 1000).toLocaleDateString('ru-Ru');
}