export const REFUND_LAST_UPDATED = new Date().toLocaleDateString();

export const SUBSCRIPTION_CANCELLATION = {
  title: "Subscription Cancellation",
  points: [
    "You can cancel your subscription at any time from your account dashboard",
    "Cancellation takes effect at the end of your current billing period",
    "You'll continue to have access to all features until the end of your paid period",
    "No cancellation fees apply to monthly or annual subscriptions"
  ]
};

export const REFUND_POLICY = {
  title: "Refund Policy",
  options: [
    {
      heading: "30-Day Money Back",
      text: "Full refund available within 30 days of initial purchase for new customers"
    },
    {
      heading: "Pro-rated Refunds",
      text: "Unused portion refunded for annual plans cancelled within first 60 days"
    }
  ]
};

export const HOW_TO_CANCEL = {
  title: "How to Cancel",
  steps: [
    "Log into your account dashboard",
    "Navigate to 'Subscription Settings'",
    "Click 'Cancel Subscription'",
    "Confirm your cancellation",
    "You'll receive an email confirmation"
  ],
  alt: "Alternatively, contact our support team for assistance with cancellation."
};

export const PROCESSING_TIMES = {
  title: "Processing Times",
  times: [
    { label: "3-5", text: "Business days for credit card refunds" },
    { label: "5-10", text: "Business days for bank transfers" },
    { label: "24hrs", text: "Email confirmation of cancellation" }
  ]
};

export const SPECIAL_CIRCUMSTANCES = {
  title: "Special Circumstances",
  points: [
    "Technical issues preventing service use may qualify for full refund",
    "Billing errors will be corrected and refunded within 2 business days",
    "Duplicate charges are automatically refunded to original payment method"
  ]
};

export const NON_REFUNDABLE_ITEMS = {
  title: "Non-Refundable Items",
  points: [
    "Setup fees and one-time charges",
    "Third-party service fees",
    "Custom development work already completed",
    "Subscriptions cancelled after 30-day period (monthly plans)"
  ]
};

export const CONTACT_INFO = {
  title: "Contact Information",
  email: "support@company.com",
  phone: "+1 (555) 123-4567",
  hours: "Monday-Friday, 9AM-6PM EST",
  response: "Within 24 hours"
};