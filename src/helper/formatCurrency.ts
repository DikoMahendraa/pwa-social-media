/**
 * Formats a number as currency with $ symbol
 * @param value The number to format as currency
 * @param currency The currency symbol to use (default: $)
 * @returns Formatted currency string
 */
export function formatCurrency(value: number, currency = "$"): string {
  if (!value && value !== 0) return `${currency}0`;

  // For values less than 1000, just return the value with currency symbol
  if (value < 1000) {
    return `${currency}${value}`;
  }

  // For values 1000 or greater, format with K suffix
  return `${currency}${(value / 1000).toFixed(1).replace(/\.0$/, "")}K`;
}
