// Contact Us Constants
export const CONTACT_INFO = {
  email: "contact@company.com",
  phone: "+1 (555) 123-4567",
  address: {
    line1: "123 Business Street",
    line2: "Suite 100",
    city: "City, State 12345"
  }
};

export const BUSINESS_HOURS = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" }
];

// Redirect Constants
export const REDIRECT_CONFIG = {
  url: "https://google.com",
  countdown: 3,
  companyName: "OPEN COMMUNITY"
};

// Subscription/Shipping Constants
export const SUBSCRIPTION_DETAILS = {
  id: "SUB-2024-001",
  startDate: new Date().toLocaleDateString(),
  status: "Active",
  amount: "$99.99/month",
  period: "Monthly billing cycle",
  billingAddress: {
    line1: "123 Business Street",
    line2: "Suite 100, City, State 12345",
    country: "United States"
  }
};

export const ACTIVATION_STEPS = [
  {
    title: "Subscription Confirmed",
    description: "Your subscription has been successfully created",
    status: "completed",
    timestamp: new Date().toLocaleString()
  },
  {
    title: "Processing Payment",
    description: "We're processing your payment information",
    status: "current",
    timestamp: null
  },
  {
    title: "Activating Services",
    description: "Setting up your account and services",
    status: "pending",
    timestamp: null
  },
  {
    title: "Ready to Use",
    description: "Your subscription is active and ready",
    status: "pending",
    timestamp: null
  }
];

// Cancellation/Refund Constants
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

// Terms and Conditions Constants
export const TERMS_AND_CONDITIONS = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement."
  },
  {
    id: "services",
    title: "2. Use of Services",
    content: "You may use our services for lawful purposes only. You agree not to use the service:",
    list: [
      "For any unlawful purpose or to solicit others to unlawful acts",
      "To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances",
      "To infringe upon or violate our intellectual property rights or the intellectual property rights of others",
      "To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate",
      "To submit false or misleading information"
    ]
  },
  {
    id: "privacy",
    title: "3. Privacy Policy",
    content: "Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices."
  },
  {
    id: "contact",
    title: "4. Contact Information",
    content: "Questions about the Terms of Service should be sent to us at:",
    contact: {
      email: "legal@company.com",
      phone: "+1 (555) 123-4567",
      address: "123 Business Street, Suite 100, City, State 12345"
    }
  }
];

// Privacy Policy Constants
export const PRIVACY_POLICY = [
  {
    id: "information",
    title: "1. Information We Collect",
    content: "We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support.",
    list: [
      "Personal information (name, email address, phone number)",
      "Payment information (credit card details, billing address)",
      "Usage data (how you interact with our services)",
      "Device information (IP address, browser type, operating system)"
    ]
  },
  {
    id: "usage",
    title: "2. How We Use Your Information",
    content: "We use the information we collect to provide, maintain, and improve our services:",
    list: [
      "Process transactions and send related information",
      "Send technical notices, updates, security alerts, and support messages",
      "Respond to your comments, questions, and customer service requests",
      "Monitor and analyze trends, usage, and activities in connection with our services"
    ]
  },
  {
    id: "sharing",
    title: "3. Information Sharing",
    content: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy."
  },
  {
    id: "contact",
    title: "4. Contact Us",
    content: "If you have any questions about this Privacy Policy, please contact us:",
    contact: {
      email: "privacy@company.com",
      phone: "+1 (555) 123-4567",
      address: "123 Business Street, Suite 100, City, State 12345"
    }
  }
];