// Whatever the data we are requiring to, we're going to pass it right here as the type.
export type NotificationType =
  | "billing_reminder"
  | "payment_success"
  | "payment_failed"
  | "trial_expiring"
  | "price_change"
  | "subscription_cancelled"
  | "renewal_upcoming";
