import dayjs from "dayjs";

export const formatCurrency = (
  value: number,
  currency: string = "USD",
): string => {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  } catch (error) {
    // Fallback to USD if invalid currency code is provided
    return value.toFixed(2);
  }
};

export const formatSubscriptionDateTime = (value?: string): string => {
  if (!value) return "Not Provided";
  const parseDate = dayjs(value);
  return parseDate.isValid() ? parseDate.format("MM/DD/YYYY") : "Not Provided";
};

export const formatStatusLabel = (value?: string): string => {
  if (!value) return "Unknown";
  return value.charAt(0).toUpperCase() + value.slice(1);
};
