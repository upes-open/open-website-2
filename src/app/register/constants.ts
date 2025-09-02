export const steps = [
  { name: 'Personal Info', fields: ['name', 'sap'] },
  {
    name: 'Academic Details',
    fields: ['degree', 'specialisation', 'academicYear'],
  },
  { name: 'Contact Info', fields: ['emailPersonal', 'emailCollege', 'phone'] },
  { name: 'Payment', fields: [] },
];

export const fieldDefinitions = [
  { label: 'Name', name: 'name', type: 'text' },
  { label: 'SAP', name: 'sap', type: 'text' },
  { label: 'Degree', name: 'degree', type: 'text' },
  { label: 'Specialisation', name: 'specialisation', type: 'text' },
  { label: 'Academic Year', name: 'academicYear', type: 'text' },
  { label: 'Email (Personal)', name: 'emailPersonal', type: 'email' },
  { label: 'Email (College)', name: 'emailCollege', type: 'email' },
  { label: 'Phone No (WhatsApp)', name: 'phone', type: 'tel' },
];

export const paymentPageURL = 'https://example-payment-provider.com/checkout';
