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