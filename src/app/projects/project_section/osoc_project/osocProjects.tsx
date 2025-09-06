import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { projects } from './constants';
import { PixelifyText } from '@/components/ui/pixelify_specific_text';

export default function OsocProjects() {
  return (
    <div className='w-screen flex flex-col items-center p-1 overflow-x-hidden'>
      <div className='osoc_project w-[100%] mt-7 text-center flex flex-col items-center'>
        <h1>
          <PixelifyText
            text='OSOC PROJECTS'
            classname='font-bold text-2xl'
            highlightLetters={['u', 'p', 'e', 's']}
          />
        </h1>

        <InfiniteMovingCards
          projects={projects}
          pauseOnHover={true}
          direction='left'
          speed='slow'
        />
      </div>
    </div>
  );
}
