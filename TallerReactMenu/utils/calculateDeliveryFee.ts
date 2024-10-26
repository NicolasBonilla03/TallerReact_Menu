export function calculateDeliveryFee(total: number): number {
    if (total > 90000) return 0;
    if (total > 70000) return 3000;
    return 5000;
}
