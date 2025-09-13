// src/constants/terms.ts

export const TERMS_AND_CONDITIONS = [
  {
    id: 1,
    title: "1. Acceptance of Terms",
    content: `By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`
  },
  {
    id: 2,
    title: "2. Use License",
    content: `Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:`,
    list: [
      "modify or copy the materials",
      "use the materials for any commercial purpose or for any public display",
      "attempt to reverse engineer any software contained on the website",
      "remove any copyright or other proprietary notations from the materials"
    ]
  },
  {
    id: 3,
    title: "3. Disclaimer",
    content: `The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.`
  },
  {
    id: 4,
    title: "4. Limitations",
    content: `In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.`
  },
  {
    id: 5,
    title: "5. Privacy Policy",
    content: `Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our service. By using our service, you agree to the collection and use of information in accordance with our Privacy Policy.`
  },
  {
    id: 6,
    title: "6. User Accounts",
    content: `When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.`
  },
  {
    id: 7,
    title: "7. Prohibited Uses",
    content: `You may not use our service:`,
    list: [
      "For any unlawful purpose or to solicit others to perform unlawful acts",
      "To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances",
      "To infringe upon or violate our intellectual property rights or the intellectual property rights of others",
      "To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate",
      "To submit false or misleading information"
    ]
  },
  {
    id: 8,
    title: "8. Changes to Terms",
    content: `We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.`
  },
  {
    id: 9,
    title: "9. Contact Information",
    content: `If you have any questions about these Terms and Conditions, please contact us at:`,
    contact: {
      email: "legal@company.com",
      phone: "+1 (555) 123-4567",
      address: "123 Legal Street, City, State 12345"
    }
  }
];
// src/constants/privacy.ts

export const PRIVACY_POLICY = [
  {
    id: 1,
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us, such as when you:`,
    list: [
      "Create an account or profile",
      "Contact us through our website or email",
      "Subscribe to our newsletter or updates",
      "Participate in surveys or feedback forms",
      "Use our services and interact with our platform",
    ],
  },
  {
    id: 2,
    title: "2. How We Use Your Information",
    content: `We use the information we collect to:`,
    list: [
      "Provide, maintain, and improve our services",
      "Process transactions and send related information",
      "Send technical notices, updates, and support messages",
      "Respond to your comments, questions, and customer service requests",
      "Communicate with you about products, services, and events",
      "Monitor and analyze trends, usage, and activities",
    ],
  },
  {
    id: 3,
    title: "3. Information Sharing",
    content: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with trusted third parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.`,
  },
  {
    id: 4,
    title: "4. Data Security",
    content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.`,
  },
  {
    id: 5,
    title: "5. Cookies and Tracking",
    content: `We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:`,
    list: [
      "Remember your preferences and settings",
      "Understand how you use our website",
      "Improve our services and user experience",
      "Provide personalized content and recommendations",
    ],
  },
  {
    id: 6,
    title: "6. Your Rights",
    content: `You have the right to:`,
    list: [
      "Access and receive a copy of your personal information",
      "Rectify inaccurate or incomplete personal information",
      "Delete your personal information under certain circumstances",
      "Object to or restrict the processing of your personal information",
      "Withdraw consent where processing is based on consent",
    ],
  },
  {
    id: 7,
    title: "7. Data Retention",
    content: `We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. When we no longer need your personal information, we will securely delete or anonymize it.`,
  },
  {
    id: 8,
    title: "8. Children's Privacy",
    content: `Our service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so we can take appropriate action.`,
  },
  {
    id: 9,
    title: "9. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.`,
  },
  {
    id: 10,
    title: "10. Contact Us",
    content: `If you have any questions about this Privacy Policy, please contact us at:`,
    contact: {
      email: "privacy@company.com",
      phone: "+1 (555) 123-4567",
      address: "123 Privacy Street, City, State 12345",
    },
  },
];
// Cancellation & Refunds content constants

export const REFUND_LAST_UPDATED = new Date().toLocaleDateString();

export const SUBSCRIPTION_CANCELLATION = {
  title: "Subscription Cancellation",
  icon: "MdRefresh",
  points: [
    "Your subscription will remain active until the end of your current billing period",
    "You will continue to have access to all premium features until the subscription expires",
    "No additional charges will be made after cancellation",
    "You will receive a confirmation email within 24 hours",
  ],
};

export const REFUND_POLICY = {
  title: "Refund Policy",
  icon: "MdCreditCard",
  options: [
    {
      heading: "7-Day Money Back Guarantee",
      text: "Full refund available within 7 days of your initial subscription for first-time subscribers.",
    },
    {
      heading: "Pro-rated Refunds",
      text: "Unused portions of annual subscriptions may be refunded at our discretion.",
    },
  ],
};

export const HOW_TO_CANCEL = {
  title: "How to Cancel Your Subscription",
  icon: "MdCalendarToday",
  steps: [
    "Log into your account dashboard",
    "Navigate to \"Subscription Settings\" or \"Billing\"",
    "Click \"Manage Subscription\" to access the customer portal",
    "Select \"Cancel Subscription\" and follow the prompts",
    "Confirm your cancellation via the confirmation email",
  ],
  alt: "Alternative: Contact our support team at support@example.com for assistance with cancellation.",
};

export const PROCESSING_TIMES = {
  title: "Processing Times",
  icon: "MdWarning",
  times: [
    { label: "Immediate", text: "Cancellation Processing" },
    { label: "3-5 Days", text: "Refund Processing" },
    { label: "5-10 Days", text: "Bank Processing" },
  ],
};

export const SPECIAL_CIRCUMSTANCES = {
  title: "Special Circumstances",
  points: [
    "Technical issues preventing service access for extended periods",
    "Billing errors or unauthorized charges",
    "Service downtime exceeding our SLA commitments",
    "Duplicate subscriptions or payments",
  ],
};

export const NON_REFUNDABLE_ITEMS = {
  title: "Non-Refundable Items",
  points: [
    "Partially used monthly subscriptions (beyond 7-day guarantee)",
    "Add-on services or one-time purchases",
    "Subscription fees for months already accessed and used",
    "Cancellations due to violation of terms of service",
  ],
};

export const CONTACT_INFO = {
  title: "Need Help?",
  email: "support@example.com",
  phone: "1-800-SUPPORT",
  hours: "Monday - Friday, 9 AM - 6 PM EST",
  response: "Within 24 hours",
};
// src/constants/subscription.ts

export const SUBSCRIPTION_DETAILS = {
  id: "#SUB-2024-001",
  startDate: new Date().toLocaleDateString(),
  status: "Activating",
  amount: "$29.99/month",
  period: "Yearly",
  billingAddress: {
    line1: "UPES",
    line2: "Uttrakhand, Dehradun",
    country: "India",
  },
};

export const ACTIVATION_STEPS = [
  {
    title: "Subscription Confirmed",
    description: "Payment received and subscription confirmed",
    timestamp: new Date().toLocaleString(),
    status: "completed",
  },
  {
    title: "Activating",
    description: "Your subscription is being activated",
    timestamp: "In progress...",
    status: "current",
  },
  {
    title: "Access Granted",
    description: "Full access to subscription features enabled",
    status: "pending",
  },
  {
    title: "Welcome Email Sent",
    description: "Check your inbox for getting started guide",
    status: "pending",
  },
];
// constants.ts



export const BUSINESS_HOURS = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" }
];

export const HERO_SECTION = {
  title: "Contact Us",
  subtitle:
    "We'd love to hear from you. Send us a message and we'll respond as soon as possible."
};

export const CTA_SECTION = {
  title: "Ready to Get Started?",
  subtitle:
    "Join thousands of satisfied customers who trust us with their business needs.",
  actions: {
    quote: {
      label: "Get a Quote",
      href: "mailto:contact@company.com"
    },
    call: {
      label: "Call Now",
      href: "tel:+15551234567"
    }
  }
};
