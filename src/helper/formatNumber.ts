/**
 * Formats a number to a more readable format with K (thousands) or M (millions) suffix
 * @param value The number to format
 * @returns Formatted string representation of the number
 */
export function formatNumber(value: number = 0): string {
  if (!value && value !== 0) return "0";

  if (value >= 1000000) {
    return (value / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }

  if (value >= 1000) {
    return (value / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  }

  return value.toString();
}
