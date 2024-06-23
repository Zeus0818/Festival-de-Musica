export function formatCurrency(quantity: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PEN'  /*'PEN' para especificar que la moneda debe ser el sol peruano. */
    }).format(quantity);
}
