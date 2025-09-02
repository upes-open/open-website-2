import { motion } from 'motion/react';
import { steps, fieldDefinitions } from './constants';

interface StepComponentProps {
  stepIndex: number;
  formData: { [key: string]: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: string[];
}

export default function StepComponent({
  stepIndex,
  formData,
  handleChange,
  errors,
}: StepComponentProps) {
  if (steps[stepIndex].name === 'Payment') {
    return (
      <motion.div
        key='payment-step'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className='p-8 bg-card rounded-2xl shadow-lg border border-border'
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className='text-2xl font-bold mb-4 text-center text-card-foreground'
        >
          Secure Your Membership
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className='text-center text-muted-foreground mb-6'
        >
          With this membership, you will be able to register for future events
          at a discounted price.
        </motion.p>
        <motion.button
          type='button'
          onClick={() => {
            const queryString = new URLSearchParams(formData).toString();
            const paymentPageURL =
              'https://example-payment-provider.com/checkout';
            window.location.href = `${paymentPageURL}?${queryString}`;
          }}
          className='w-full px-6 py-4 rounded-full font-semibold text-primary-foreground bg-primary shadow-md hover:bg-primary/90 transition-all duration-300 transform hover:scale-105'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Proceed to Payment
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div
      key={stepIndex}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className='space-y-6'
    >
      <h2 className='text-xl font-bold'>{steps[stepIndex].name}</h2>
      {fieldDefinitions
        .filter((field) => steps[stepIndex].fields.includes(field.name))
        .map((field, idx) => (
          <motion.div
            key={field.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + idx * 0.1, duration: 0.4 }}
            className='m-4'
          >
            <label
              htmlFor={field.name}
              className='block font-medium mb-1 text-sm text-muted-foreground'
            >
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              id={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className={`w-full border-b-2 bg-transparent focus:outline-none transition-colors duration-300 px-0 py-2 ${errors.includes(field.name) ? 'border-destructive' : 'focus:border-primary'}`}
              required
            />
          </motion.div>
        ))}
    </motion.div>
  );
}
