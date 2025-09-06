import { DisplayCardGrid } from '@/components/ui/cardGrid';
import { cards } from './constants';
import { PixelifyText } from '@/components/ui/pixelify_specific_text';

export default function OtherProjects() {
  return (
    <div className='w-[100vw] flex flex-col items-center p-1 overflow-x-hidden'>
      <h1>
        <PixelifyText
          text='OTHER PROJECTS'
          classname='font-bold text-2xl'
          highlightLetters={['u', 'p', 'e', 's']}
        />
      </h1>

      <div className='w-[100vw] flex justify-center'>
        <DisplayCardGrid cards={cards} className='gap-10' />
      </div>
    </div>
  );
}
