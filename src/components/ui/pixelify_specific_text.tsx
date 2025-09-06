import { pixelifySansFont } from '@/lib/fonts';
import clsx from 'clsx';

export const PixelifyText = ({
  text,
  classname,
  highlightLetters = [],
}: {
  text: string;
  classname?: string;
  highlightLetters?: string[];
}) => {
  const seen = new Set<string>();

  return (
    <>
      {Array.from(text).map((ch, i) => {
        const lower = ch.toLowerCase();
        const shouldChangeFont =
          highlightLetters.includes(lower) && !seen.has(lower);

        if (shouldChangeFont) {
          seen.add(lower);
        }

        return (
          <span
            key={`${ch}-${i}`}
            className={clsx(
              classname,
              shouldChangeFont && [pixelifySansFont.className],
            )}
          >
            {ch === ' ' ? '\u00A0' : ch}
          </span>
        );
      })}
    </>
  );
};
