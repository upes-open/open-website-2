import { motion } from 'motion/react';

type NavigationButtonsProps = {
  isFirstStep: boolean;
  isLastStep: boolean;
  handlePrev: () => void;
  handleNext: () => void;
};

export default function NavigationButtons({
  isFirstStep,
  isLastStep,
  handlePrev,
  handleNext,
}: NavigationButtonsProps) {
  return (
    <div className='flex justify-between m-4 mt-8'>
      {!isFirstStep && (
        <motion.button
          type='button'
          onClick={handlePrev}
          className='px-6 py-3 rounded-full font-semibold'
          style={{
            background: 'var(--primary-foreground)',
            color: 'var(--primary)',
            border: '1px solid var(--border)',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Back
        </motion.button>
      )}
      {!isLastStep && (
        <motion.button
          type='button'
          onClick={handleNext}
          className={`px-6 py-3 rounded-full font-semibold ${isFirstStep ? 'ml-auto' : ''}`}
          style={{
            background: 'var(--primary)',
            color: 'var(--primary-foreground)',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Next
        </motion.button>
      )}
    </div>
  );
}
